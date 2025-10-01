import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import glossLaminate from "@/assets/gloss-laminate.jpg";
import mattLaminate from "@/assets/matt-laminate.jpg";
import mountingAdhesive from "@/assets/mounting-adhesive.jpg";

const FinishingFilms = () => {
  const products = [
    {
      name: "Gloss Lamination",
      description: "Crystal clear gloss laminate for print protection and enhancement. UV resistant with excellent clarity.",
      image: glossLaminate,
      specs: {
        thickness: "75 Microns, 100 Microns",
        finish: "Gloss",
        sizes: "1370mm, 1520mm",
        length: "50m, 100m",
        application: "Cold lamination",
      },
    },
    {
      name: "Matt Lamination",
      description: "Anti-glare matt laminate for professional finish without reflections. Perfect for indoor displays and posters.",
      image: mattLaminate,
      specs: {
        thickness: "75 Microns, 100 Microns",
        finish: "Matt",
        sizes: "1370mm, 1520mm",
        length: "50m, 100m",
        application: "Cold lamination",
      },
    },
    {
      name: "Mounting Adhesive",
      description: "Clear permanent and repositionable adhesive films for mounting prints to various substrates.",
      image: mountingAdhesive,
      specs: {
        thickness: "100 Microns",
        finish: "Clear",
        sizes: "1370mm, 1520mm",
        length: "50m",
        application: "Cold application, permanent & repositionable",
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Finishing Films</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Professional lamination and mounting films to protect, enhance, and finish your prints. Indoor and outdoor solutions available.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">Request Quote</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Request Samples</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="space-y-16">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl md:text-3xl mb-2">{product.name}</CardTitle>
                      <CardDescription className="text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Specifications:</h4>
                        <dl className="space-y-2 text-sm">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex flex-col sm:flex-row sm:gap-2">
                              <dt className="font-medium min-w-[140px] capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </dt>
                              <dd className="text-muted-foreground">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <Button asChild>
                          <a href="#contact">Request Quote</a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="#contact">Request Samples</a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-secondary/30 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Use Finishing Films?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Print Protection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• UV protection</li>
                    <li>• Scratch resistance</li>
                    <li>• Moisture barrier</li>
                    <li>• Extended lifespan</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Professional Finish</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Enhanced colors</li>
                    <li>• Gloss or matt options</li>
                    <li>• Uniform appearance</li>
                    <li>• Premium look & feel</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Easy Application</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cold lamination</li>
                    <li>• Bubble-free application</li>
                    <li>• Wide roller compatibility</li>
                    <li>• Repositionable options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="container mx-auto px-4 py-12 md:py-20">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-none">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need help choosing the right finishing film?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our experts can recommend the perfect laminate or adhesive for your application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Get Expert Advice</Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+27824404465">
                    <Phone className="mr-2 h-4 w-4" />
                    Call +27 82 440 4465
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinishingFilms;

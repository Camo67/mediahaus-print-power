import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dtfFilm from "@/assets/dtf-film.jpg";
import dtfPowder from "@/assets/dtf-powder.jpg";

const DTFMedia = () => {
  const products = [
    {
      name: "DTF Transfer Film",
      description: "High-quality direct-to-film transfer media with excellent ink absorption and release properties. No weeding required.",
      image: dtfFilm,
      specs: {
        thickness: "75 Microns",
        finish: "Matt",
        sizes: "300mm, 600mm, 620mm",
        length: "100m",
        compatibility: "DTF Printers with pigment inks",
      },
    },
    {
      name: "DTF Adhesive Powder",
      description: "Hot melt adhesive powder for DTF transfers. Ensures strong bond and excellent wash durability on various fabrics.",
      image: dtfPowder,
      specs: {
        type: "Hot Melt Powder",
        particle: "Fine grain",
        sizes: "1kg, 5kg, 10kg",
        temperature: "160-180°C",
        compatibility: "All fabric types",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">DTF Media</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Direct-to-Film transfer media and supplies for garment decoration. No weeding required, perfect for full-color designs on any fabric.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose DTF Printing?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>No Weeding Required</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full-color prints</li>
                    <li>• Complex designs simplified</li>
                    <li>• Faster production</li>
                    <li>• Less waste</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Universal Fabric</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cotton & polyester</li>
                    <li>• Blended fabrics</li>
                    <li>• Light & dark garments</li>
                    <li>• Various textures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Superior Quality</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vibrant colors</li>
                    <li>• Soft hand feel</li>
                    <li>• Excellent wash durability</li>
                    <li>• Fine detail reproduction</li>
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
                Ready to start with DTF printing?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team can help you get started with the right DTF materials and provide technical support.
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

export default DTFMedia;

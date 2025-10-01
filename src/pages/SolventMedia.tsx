import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import glossVinyl from "@/assets/gloss-vinyl.jpg";
import castVinyl from "@/assets/cast-vinyl.jpg";
import blockoutBanner from "@/assets/blockout-banner.jpg";

const SolventMedia = () => {
  const products = [
    {
      name: "Gloss Vinyl",
      description: "High-quality calendered vinyl for outdoor signage, banners, and short-to-medium term applications.",
      image: glossVinyl,
      specs: {
        thickness: "80 Microns",
        finish: "Gloss",
        sizes: "1370mm, 1520mm",
        length: "50m",
        compatibility: "Solvent, Eco-solvent, Latex and UV",
      },
    },
    {
      name: "Cast Vinyl",
      description: "Premium cast vinyl for vehicle wraps, long-term outdoor applications, and complex curved surfaces.",
      image: castVinyl,
      specs: {
        thickness: "50 Microns",
        finish: "Gloss, Matt",
        sizes: "1370mm, 1520mm",
        length: "50m",
        compatibility: "Solvent, Eco-solvent, Latex and UV",
      },
    },
    {
      name: "Blockout Banner",
      description: "Heavy-duty PVC banner material with blockout layer, ideal for double-sided prints and outdoor advertising.",
      image: blockoutBanner,
      specs: {
        thickness: "440gsm, 510gsm",
        finish: "Matt",
        sizes: "1370mm, 1520mm, 3200mm",
        length: "50m",
        compatibility: "Solvent, Eco-solvent, Latex and UV",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solvent Media</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Durable outdoor media for solvent, eco-solvent, and latex printers. Perfect for signage, vehicle wraps, and long-term outdoor applications.
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
                          <div className="flex flex-col sm:flex-row sm:gap-2">
                            <dt className="font-medium min-w-[140px]">Thickness:</dt>
                            <dd className="text-muted-foreground">{product.specs.thickness}</dd>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:gap-2">
                            <dt className="font-medium min-w-[140px]">Finish:</dt>
                            <dd className="text-muted-foreground">{product.specs.finish}</dd>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:gap-2">
                            <dt className="font-medium min-w-[140px]">Available Sizes:</dt>
                            <dd className="text-muted-foreground">{product.specs.sizes}</dd>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:gap-2">
                            <dt className="font-medium min-w-[140px]">Length:</dt>
                            <dd className="text-muted-foreground">{product.specs.length}</dd>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:gap-2">
                            <dt className="font-medium min-w-[140px]">Printer Compatibility:</dt>
                            <dd className="text-muted-foreground">{product.specs.compatibility}</dd>
                          </div>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Solvent Media?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Weather Resistant</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• UV resistant inks</li>
                    <li>• Waterproof materials</li>
                    <li>• Long outdoor durability</li>
                    <li>• Fade resistant</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Versatile Applications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vehicle wraps</li>
                    <li>• Building signage</li>
                    <li>• Outdoor banners</li>
                    <li>• Window graphics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Professional Quality</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Premium materials</li>
                    <li>• Consistent quality</li>
                    <li>• Wide printer compatibility</li>
                    <li>• Expert support</li>
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
                Need help choosing the correct Media?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our experts can recommend the perfect substrate for your specific application and printer.
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

export default SolventMedia;

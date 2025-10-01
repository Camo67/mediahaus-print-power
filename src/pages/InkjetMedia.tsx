import { ShoppingCart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bondPaper from "@/assets/bond-paper.jpg";
import coatedPaper from "@/assets/coated-paper.jpg";
import photoPaper from "@/assets/photo-paper.jpg";
import canvas from "@/assets/canvas.jpg";
import mattVinyl from "@/assets/matt-vinyl.jpg";

const InkjetMedia = () => {
  const products = [
    {
      name: "Bond Paper",
      description: "A standard uncoated 80gsm paper used to print CAD drawings, landscaping plans, blueprints and templates. Bond paper is acid-free and won't yellow over time.",
      image: bondPaper,
      specs: [
        { label: "Thickness", value: "80gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m, 100m, 150m" },
        { label: "Printer Compatibility", value: "Inkjet, Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Coated Paper",
      description: "A matt white coated paper which has a special inkjet coating to allow the ink not to bleed in order to produce very sharp images. For indoor poster use.",
      image: coatedPaper,
      specs: [
        { label: "Thickness", value: "90gsm, 125gsm, 180gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "610mm, 914mm, 1118mm" },
        { label: "Length", value: "30m, 45m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex and UV" },
      ],
    },
    {
      name: "Photo Paper",
      description: "A very high quality resin coated paper used for photographic reproduction. Excellent colour gamut, vivid images.",
      image: photoPaper,
      specs: [
        { label: "Thickness", value: "190gsm, 260gsm" },
        { label: "Finish", value: "Matt, satin, lustre, gloss" },
        { label: "Available Sizes", value: "420mm, 610mm, 914mm, 1118mm" },
        { label: "Length", value: "30m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex and UV" },
      ],
    },
    {
      name: "Canvas",
      description: "High-quality canvas substrates for art reproductions and photographic prints. Available in polyester blend and pure cotton varieties.",
      image: canvas,
      specs: [
        { label: "Thickness", value: "260gsm (Polyester), 350gsm (Cotton)" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "432mm, 610mm, 914mm, 1118mm, 1524mm" },
        { label: "Length", value: "18m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex and UV" },
      ],
    },
    {
      name: "Matt Vinyl",
      description: "Inkjet self-adhesive vinyl with a solvent-acrylic adhesive. Waterproof and smudge proof, ideal for indoor projects, advertising, stickers, and short-term outdoor advertising.",
      image: mattVinyl,
      specs: [
        { label: "Thickness", value: "150 Microns" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "610mm, 914mm" },
        { label: "Length", value: "30m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex and UV" },
      ],
    },
  ];

  const benefits = [
    {
      title: "Quality Assurance",
      points: [
        "Acid-free papers won't yellow",
        "Special inkjet coatings",
        "Sharp image reproduction",
        "Consistent quality control",
      ],
    },
    {
      title: "Wide Compatibility",
      points: [
        "Canon & Epson printers",
        "Large format inkjet",
        "Engineering copiers",
        "UV and Latex systems",
      ],
    },
    {
      title: "Applications",
      points: [
        "CAD drawings & blueprints",
        "Indoor posters & displays",
        "Art reproductions",
        "Photography prints",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Inkjet Media</h1>
              <p className="text-lg text-muted-foreground">
                Media for water-based and pigmented inks for large format indoor printers (e.g. Canon and Epson). 
                This media is generally for indoor applications.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-xl">Specifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="space-y-3">
                          {product.specs.map((spec) => (
                            <div key={spec.label} className="grid grid-cols-3 gap-4">
                              <dt className="font-medium text-muted-foreground">{spec.label}:</dt>
                              <dd className="col-span-2">{spec.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </CardContent>
                    </Card>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild>
                        <a href="#contact">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Request Quote
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="#contact">Request Samples</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-secondary/30 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Inkjet Media?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.points.map((point) => (
                        <li key={point} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-cyan/10 to-magenta/10 border-2">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need help choosing the correct Media?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our experts can recommend the perfect substrate for your specific application and printer.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="#contact">Get Expert Advice</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+27824404465">
                      <Phone className="w-4 h-4 mr-2" />
                      Call +27 82 440 4465
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InkjetMedia;

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bondPaper from "@/assets/bond-paper-new.jpg";
import coatedPaper from "@/assets/coated-paper-new.jpg";
import photoPaper from "@/assets/photo-paper-new.jpg";
import canvas from "@/assets/canvas.jpg";
import mattVinyl from "@/assets/vinyl-new.jpg";
import glossVinyl from "@/assets/gloss-vinyl.jpg";
import castVinyl from "@/assets/camo.jpeg";
import blockoutBanner from "@/assets/blockout-banner.jpg";
import dtfFilm from "@/assets/dtf-film.jpg";
import dtfPowder from "@/assets/dtf-powder.jpg";
import glossLaminate from "@/assets/gloss-laminate.jpg";
import mattLaminate from "@/assets/matt-laminate.jpg";
import mountingAdhesive from "@/assets/mounting-adhesive.jpg";

const Products = () => {
  const products = [
    {
      name: "Bond Paper",
      category: "Inkjet Media",
      description: "A standard uncoated 80gsm paper used to print CAD drawings, landscaping plans, blueprints, and templates. Acid-free and won't yellow over time.",
      image: bondPaper,
      specs: [
        { label: "Thickness", value: "80gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m, 100m, 150m" },
        { label: "Printer Compatibility", value: "Inkjet, Solvent, Eco-solvent, Latex, UV" },
      ],
    },
    {
      name: "Coated Paper",
      category: "Inkjet Media",
      description: "A matt white coated paper with a special inkjet coating for sharp images.",
      image: coatedPaper,
      specs: [
        { label: "Thickness", value: "90gsm, 125gsm, 180gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "610mm, 914mm, 1118mm" },
        { label: "Length", value: "30m, 45m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex, UV" },
      ],
    },
    {
      name: "Photo Paper",
      category: "Inkjet Media",
      description: "High-quality resin-coated paper for photographic reproduction.",
      image: photoPaper,
      specs: [
        { label: "Thickness", value: "190gsm, 260gsm" },
        { label: "Finish", value: "Matt, satin, lustre, gloss" },
        { label: "Available Sizes", value: "610mm, 914mm, 1118mm" },
        { label: "Length", value: "30m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex, UV" },
      ],
    },
    {
      name: "Canvas",
      category: "Inkjet Media",
      description: "High-quality canvas substrates for art reproductions. Available in polyester (Canvas Light) and cotton (Classic Canvas) varieties.",
      image: canvas,
      specs: [
        { label: "Thickness", value: "260gsm (Polyester), 350gsm (Cotton)" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "432mm, 610mm, 914mm, 1118mm, 1524mm" },
        { label: "Length", value: "18m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex, UV" },
      ],
    },
    {
      name: "Matt Vinyl",
      category: "Solvent Media",
      description: "Durable outdoor vinyl with a matt finish. Perfect for signage and wraps.",
      image: mattVinyl,
      specs: [
        { label: "Thickness", value: "150 Microns" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "610mm, 914mm, 1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex, UV" },
      ],
    },
    {
      name: "Gloss Vinyl",
      category: "Solvent Media",
      description: "High-gloss outdoor vinyl for vibrant signage and vehicle wraps.",
      image: glossVinyl,
      specs: [
        { label: "Thickness", value: "150 Microns" },
        { label: "Finish", value: "Gloss" },
        { label: "Available Sizes", value: "610mm, 914mm, 1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex, UV" },
      ],
    },
    {
      name: "Cast Vinyl",
      category: "Solvent Media",
      description: "Premium cast vinyl for vehicle wraps and complex curved surfaces.",
      image: castVinyl,
      specs: [
        { label: "Thickness", value: "80 Microns" },
        { label: "Finish", value: "Gloss" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex, UV" },
      ],
    },
    {
      name: "Blockout Banner",
      category: "Solvent Media",
      description: "Heavy-duty banner material with blockout layer for double-sided printing.",
      image: blockoutBanner,
      specs: [
        { label: "Thickness", value: "510gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm, 3200mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex, UV" },
      ],
    },
    {
      name: "DTF Film",
      category: "DTF Media",
      description: "Direct-to-Film transfer film for garment printing. No weeding required.",
      image: dtfFilm,
      specs: [
        { label: "Thickness", value: "75 Microns" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "300mm, 400mm, 600mm" },
        { label: "Length", value: "100m" },
        { label: "Printer Compatibility", value: "DTF Printers" },
      ],
    },
    {
      name: "DTF Powder",
      category: "DTF Media",
      description: "Hot-melt adhesive powder for DTF transfers. Creates durable bond with fabrics.",
      image: dtfPowder,
      specs: [
        { label: "Particle Size", value: "80-120 mesh" },
        { label: "Melting Point", value: "110-120°C" },
        { label: "Package Size", value: "1kg, 5kg, 10kg" },
        { label: "Application", value: "All fabric types" },
      ],
    },
    {
      name: "Gloss Laminate",
      category: "Finishing Films",
      description: "High-gloss protection film for outdoor durability and UV resistance.",
      image: glossLaminate,
      specs: [
        { label: "Thickness", value: "75 Microns" },
        { label: "Finish", value: "Gloss" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "UV Protection", value: "3-5 years" },
      ],
    },
    {
      name: "Matt Laminate",
      category: "Finishing Films",
      description: "Anti-glare matt laminate for indoor displays and elegant finishes.",
      image: mattLaminate,
      specs: [
        { label: "Thickness", value: "75 Microns" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "UV Protection", value: "Indoor use" },
      ],
    },
    {
      name: "Mounting Adhesive",
      category: "Finishing Films",
      description: "Double-sided adhesive film for mounting prints to rigid substrates.",
      image: mountingAdhesive,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Adhesive Type", value: "Permanent" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Application", value: "Foamboard, PVC, Aluminium" },
      ],
    },
  ];

  const categories = [
    { id: "inkjet", name: "Inkjet Media", description: "Indoor papers and films for high quality prints" },
    { id: "solvent", name: "Solvent Media", description: "Durable outdoor vinyl for signage and wraps" },
    { id: "dtf", name: "DTF Media", description: "Direct-to-Film transfer products" },
    { id: "finishing", name: "Finishing Films", description: "Lamination and mounting solutions" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-lg text-muted-foreground">
                Professional-grade media for every printing application. Browse our comprehensive range 
                of inkjet media, solvent vinyl, DTF products, and finishing films.
              </p>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="border-b bg-card sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 overflow-x-auto py-4">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-secondary transition-colors"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Products by Category */}
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h2>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>

              <div className="space-y-16">
                {products
                  .filter((product) => product.category === category.name)
                  .map((product, index) => (
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
                        <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
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
                            <a href="/contact">
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Request Quote
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href="/contact">Learn More</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-secondary/30 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-cyan/10 to-magenta/10 border-2">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need help choosing the right product?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our experts can recommend the perfect media for your specific application and printer.
                </p>
                <Button size="lg" asChild>
                  <a href="/contact">Contact Us Today</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

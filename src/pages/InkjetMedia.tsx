import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "@/components/ui/ProductCard";
import bondPaper from "../assets/bond-paper.jpg";
import coatedPaper from "../assets/coated-paper.jpg";
import photoPaper from "../assets/photo-paper-new.jpg";
import canvas from "../assets/carwrap.jpg";
import mattVinyl from "../assets/matt-laminate.jpg";
import glossVinyl from "../assets/gloss-vinyl.jpg";
const mountingAdhesive = "../assets/mounting-adhesive.jpg";
const glossLaminate = "../assets/gloss-laminate.jpg";
// Using shared ProductCard for consistent layout and full images



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
        { label: "Thickness", value: "120gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m, 100m, 150m" },
        { label: "Printer Compatibility", value: "Inkjet" },
      ],
    },
    {
      name: "Enhanced Coated Paper",
      description: "An enhanced version of coated paper offering improved durability and higher quality prints. Ideal for high-resolution graphic output.",
      image: coatedPaper,
      specs: [
        { label: "Thickness", value: "150gsm" },
        { label: "Finish", value: "Semi-Gloss" },
        { label: "Available Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m, 100m, 150m" },
        { label: "Printer Compatibility", value: "Inkjet" },
      ],
    },
    {
      name: "Photo Paper",
      description: "High-quality glossy photo paper designed for premium photographic prints. Perfect for professional photography and presentations.",
      image: photoPaper,
      specs: [
        { label: "Thickness", value: "200gsm" },
        { label: "Finish", value: "Glossy" },
        { label: "Available Sizes", value: "210mm x 297mm, 297mm x 420mm" },
        { label: "Printer Compatibility", value: "Inkjet" },
      ],
    },
    {
      name: "Canvas",
      description: "Premium canvas material suitable for art reproduction and photography. Offers a textured surface resembling traditional canvas.",
      image: canvas,
      specs: [
        { label: "Thickness", value: "380gsm" },
        { label: "Finish", value: "Matte" },
        { label: "Available Sizes", value: "420mm x 594mm, 594mm x 841mm" },
        { label: "Printer Compatibility", value: "Inkjet" },
      ],
    },
    {
      name: "Vinyl",
      description: "Flexible vinyl material for banners and outdoor signage. Weather-resistant and durable for long-term use.",
      image: mattVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Mounting Films",
      description: "Adhesive mounting films for laminating prints onto rigid surfaces. Provides a smooth finish and ensures durability.",
      image: mountingAdhesive || "",
      specs: [
        { label: "Thickness", value: "50 Microns" },
        { label: "Finish", value: "Matte" },
        { label: "Available Sizes", value: "1220mm, 1370mm" },
        { label: "Length", value: "50m" },
      ],
    },
    {
      name: "Lamination",
      description: "Protective lamination film for prints. Available in both glossy and matte finishes to enhance print longevity.",
      image: glossLaminate || "",
      specs: [
        { label: "Thickness", value: "75 Microns, 100 Microns" },
        { label: "Finish", value: "Gloss, Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m, 100m" },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-secondary/30 to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Inkjet Media</h1>
              <p className="text-lg text-muted-foreground">
               High-Quality Indoor Printing Papers and Films. Premium Indoor Media for Professional Prints. Custom Indoor Banner Papers and Vinyl Films for Superior Quality.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 gap-8 xl:gap-10 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                description={product.description}
                image={product.image}
                specs={product.specs}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export { InkjetMedia };

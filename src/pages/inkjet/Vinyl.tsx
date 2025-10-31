import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ui/ProductCard";
import vinylImage from "@/assets/vinyl-new.jpg";

const InkjetVinyl = () => {
  const products = [
    {
      name: "Self-Adhesive Vinyl (Inkjet)",
      description:
        "Multipurpose self-adhesive vinyl for indoor graphics and short-term signage. Optimized for inkjet with clean, vivid print quality.",
      image: vinylImage,
      specs: [
        { label: "Thickness", value: "100–150 Microns" },
        { label: "Finish", value: "Matt / Gloss" },
        { label: "Available Sizes", value: "610mm, 914mm, 1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex and UV" },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Inkjet Media — Vinyl</h1>
              <p className="text-lg text-muted-foreground">
                Vivid indoor self-adhesive vinyl for displays and POS.
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

export default InkjetVinyl;


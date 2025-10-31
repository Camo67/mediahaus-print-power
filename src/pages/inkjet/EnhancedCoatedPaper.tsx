import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ui/ProductCard";
import enhancedCoated from "@/assets/coated-paper-new.jpg";

const InkjetEnhancedCoatedPaper = () => {
  const products = [
    {
      name: "Enhanced Coated Paper",
      description:
        "Premium coated paper optimized for higher color gamut, sharper detail and faster drying. Ideal for premium indoor posters and proofing.",
      image: enhancedCoated,
      specs: [
        { label: "Thickness", value: "200gsm" },
        { label: "Finish", value: "Satin / Matt" },
        { label: "Available Sizes", value: "610mm, 914mm, 1118mm" },
        { label: "Length", value: "30m" },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Inkjet Media — Enhanced Coated Paper</h1>
              <p className="text-lg text-muted-foreground">
                Higher gamut and crisp detail for premium posters.
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

export default InkjetEnhancedCoatedPaper;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ui/ProductCard";
import bondPaper from "@/assets/bond-paper-new.jpg";

const InkjetBondPaper = () => {
  const products = [
    {
      name: "Bond Paper",
      description:
        "A standard uncoated 80gsm paper used to print CAD drawings, landscaping plans, blueprints and templates. Bond paper is acid-free and won’t yellow over time. Fits most large-format printers and engineering copiers.",
      image: bondPaper,
      specs: [
        { label: "Thickness", value: "80gsm" },
        { label: "Finish", value: "Matt" },
        {
          label: "Available Sizes",
          value:
            "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm",
        },
        { label: "Length", value: "50m, 100m, 150m" },
        {
          label: "Printer Compatibility",
          value: "Inkjet, Solvent, Eco-solvent, Latex and UV",
        },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Inkjet Media — Bond Paper</h1>
              <p className="text-lg text-muted-foreground">
                Precise linework and plans on reliable uncoated stock.
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

export default InkjetBondPaper;


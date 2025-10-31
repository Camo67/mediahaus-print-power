import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ui/ProductCard";
import canvasImage from "@/assets/hero-rolls.jpg";

const InkjetCanvas = () => {
  const products = [
    {
      name: "Polyester Canvas (Canvas Light)",
      description:
        "A good quality polyester/cotton blended canvas with an inkjet coating. Used to print photographic and art reproductions. Can be stretched over a frame without the edges cracking.",
      image: canvasImage,
      specs: [
        { label: "Thickness", value: "260gsm" },
        { label: "Finish", value: "Matt" },
        {
          label: "Available Sizes",
          value: "432mm, 610mm, 914mm, 1118mm, 1524mm",
        },
        { label: "Length", value: "18m" },
        { label: "Printer Compatibility", value: "Inkjet, Latex and UV" },
      ],
    },
    {
      name: "Cotton Canvas (Classic Canvas)",
      description:
        "An exceptional quality pure cotton canvas with an inkjet coating. Used to print photographic and art reproductions. Can be stretched over a frame without the edges cracking.",
      image: canvasImage,
      specs: [
        { label: "Thickness", value: "350gsm" },
        { label: "Finish", value: "Matt" },
        {
          label: "Available Sizes",
          value: "432mm, 610mm, 914mm, 1118mm, 1524mm",
        },
        { label: "Length", value: "18m" },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Inkjet Media — Canvas</h1>
              <p className="text-lg text-muted-foreground">
                Fine-art canvas materials for stretched and framed prints.
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

export default InkjetCanvas;


import Header from "../components/Header";
import Footer from "../components/Footer";
import glossLaminate from "@/assets/gloss-laminate.jpg";
import mattLaminate from "@/assets/matt-laminate.jpg";
import mountingAdhesive from "@/assets/mounting-adhesive.jpg";
import ProductCard from "../components/ui/ProductCard";

const FinishingFilms = () => {
  const products = [
    {
      name: "Gloss Lamination",
      description:
        "Crystal clear gloss laminate for print protection and enhancement. UV resistant with excellent clarity.",
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
      name: "Double-sided Mounting Film",
      description:
        "A clear polyester mounting film, coated on both sides with a permanent pressure sensitive acrylic adhesive, one of which is protected by a Kraft siliconized release liner and one side a film release liner. The perfect product for the mounting of graphics onto various substrates such as correx etc.",
      image: mountingAdhesive,
      specs: {
        thickness: "45 Micron",
        finish: "N/A",
        sizes: "1040mm, 1270mm",
        length: "33m",
      },
    },
    {
      name: "Optically Clear Double-sided Mounting Film",
      description:
        "A 100% optically transparent polyester film. Both sides of the film have a high-viscosity solvent-acrylic adhesive that are protected by a clear film lining. Used for special applications that require full clarity, such as mounting a print to acrylic or glass.",
      image: mountingAdhesive,
      specs: {
        thickness: "25 Micron",
        finish: "N/A",
        sizes: "1300mm",
        length: "25m, 50m",
      },
    },
    {
      name: "Matt Lamination",
      description:
        "Anti-glare matt laminate for professional finish without reflections. Perfect for indoor displays and posters.",
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
    <div>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-secondary/30 to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Finishing Films</h1>
              <p className="text-lg text-muted-foreground">
                Adhesive and lamination films for protection and mounting.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 gap-8 xl:gap-10 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                image={product.image}
                specs={Object.entries(product.specs).map(([label, value]) => ({ label, value }))}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinishingFilms;

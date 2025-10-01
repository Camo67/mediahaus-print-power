import { ArrowRight, Printer, Palette, Shield, Shirt } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import indoorLamination from "@/assets/indoor-lamination.jpg";
import outdoorLamination from "@/assets/outdoor-lamination.jpg";
import prodDtg from "@/assets/prod-dtg.jpg";
import heroRolls from "@/assets/hero-rolls.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "Inkjet Media",
      description: "Indoor papers and films for high quality prints.",
      icon: Printer,
      image: indoorLamination,
      href: "/inkjet-media",
    },
    {
      title: "Solvent Vinyl",
      description: "Durable outdoor vinyl for all signage and wraps.",
      icon: Palette,
      image: heroRolls,
      href: "#solvent",
    },
    {
      title: "Finishing Films",
      description: "Adhesive & Lamination films for protection.",
      icon: Shield,
      image: outdoorLamination,
      href: "#finishing",
    },
    {
      title: "DTF Media",
      description: "Direct-to-garment transfer films (no weeding).",
      icon: Shirt,
      image: prodDtg,
      href: "#dtf",
    },
  ];

  return (
    <section id="products" className="container mx-auto px-4 py-12 md:py-20 bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Categories</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional-grade media for every printing application
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <a key={index} href={category.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {category.title}
                    <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCategories;

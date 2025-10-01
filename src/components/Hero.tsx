import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-rolls.jpg";

const Hero = () => {
  const benefits = [
    "25+ years in the graphics industry",
    "Vinyl, PVC, Paper, DTG Film, Lamination",
    "Expert product guidance",
    "Fast national distribution",
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Premium media for every print job
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            From indoor inkjet to outdoor solvent vinyl, we supply trusted materials, 
            expert advice and fast turnaround to the graphics trade across South Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" asChild>
              <a href="#products">View Products</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Request Quote</a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 pt-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={heroImage}
              alt="Print media rolls in warehouse"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan to-magenta opacity-20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

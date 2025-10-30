import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ui/ProductCard";
import bondPaper from "@/assets/bond-paper.jpg";
import trisolvePosterPaper from "@/assets/coated-paper-new.jpg";
import tearResistantSyntheticPaper from "@/assets/coated-paper.jpg";
import photoPaper from "@/assets/photo-paper-new.jpg";
import magneticPaper from "@/assets/vinyl-new.jpg";
import hausMonomericVinyl1Year from "@/assets/vinyl-new.jpg";
import polymericVinyl from "@/assets/vinyl-new.jpg";
import castVinyl from "@/assets/cast-vinyl.jpg";
import hausMonomericVinyl3Year from "@/assets/vinyl-new.jpg";
import oraJet3164 from "@/assets/vinyl-new.jpg";
import hausHighTackVinyl from "@/assets/vinyl-new.jpg";
import hausPerforatedVinyl from "@/assets/vinyl-new.jpg";
import hausFrostedVinyl from "@/assets/vinyl-new.jpg";
import hausEezidotVinyl from "@/assets/vinyl-new.jpg";
import hausReflectiveVinyl from "@/assets/vinyl-new.jpg";
import averyReflectiveVinyl from "@/assets/vinyl-new.jpg";
import haus5YearVinyl from "@/assets/vinyl-new.jpg";
import oraJetPolymericVinyl from "@/assets/vinyl-new.jpg";
import averyWallVinylMP2611 from "@/assets/vinyl-new.jpg";
import averyMPI1105 from "@/assets/carwrap.jpg"; 
import mactacCastVinylJT10700 from "@/assets/mactac Cast Vinyl JT 10700.jpg";
import blockoutPVC from "@/assets/blockout-banner.jpg";
import rollUpPVC from "@/assets/vinyl-new.jpg";
import backlitPVC from "@/assets/indoor-lamination.jpg";
import meshWithLiner from "@/assets/vinyl-new.jpg";
import tShirtTransferVinyl from "@/assets/prod-dtg.jpg";
import backlitFilm from "@/assets/indoor-lamination.jpg";
import hausPolyesterCanvas from "@/assets/hero-rolls.jpg";
import hausCottonCanvas from "@/assets/hero-rolls.jpg";
import picassoCanvas from "@/assets/hero-rolls.jpg";  
import muramourSableWallpaper from "@/assets/muramourSableWallpaper.jpg";
import muraspecGraphiteWallpaper from "@/assets/muraspec Graphite Wallpaper.jpeg";
import TexSelfAdhesiveWallpaper from "@/assets/TexSelfAdhesiveWallpaper.jpeg";  

const SolventMedia = () => {
  const products = [
    {
      name: "Bond Paper",
      description: "A standard uncoated 80gsm paper used to print CAD drawings, landscaping plans, blueprints and templates. Bond paper is acid-free and won't yellow over time.",
      image: bondPaper,
      specs: [
        { label: "Thickness", value: "80gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m, 100m, 150m" },
        { label: "Printer Compatibility", value: "Inkjet, Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Inkjet, Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Trisolve Poster Paper",
      description: "High-quality poster paper designed for solvent-based printing. Offers excellent ink absorption and vibrant color reproduction.",
      image: trisolvePosterPaper,
      specs: [
        { label: "Thickness", value: "120gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m, 100m, 150m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Tear-resistant Synthetic Paper",
      description: "Durable synthetic paper resistant to tearing and water damage. Ideal for outdoor applications and high-traffic areas.",
      image: tearResistantSyntheticPaper,
      specs: [
        { label: "Thickness", value: "150 Microns" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m, 100m, 150m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
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
        { label: "Sizes", value: "210mm x 297mm, 297mm x 420mm" },
        { label: "Compatibility", value: "Inkjet" },
      ],
    },
    {
      name: "Magnetic Paper",
      description: "Flexible magnetic paper suitable for creating custom magnets and promotional materials. Adheres to any magnetic surface.",
      image: magneticPaper,
      specs: [
        { label: "Thickness", value: "300 Microns" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Sizes", value: "294mm, 420mm, 594mm, 610mm, 841mm, 914mm, 1118mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m, 100m, 150m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus Monomeric Vinyl 1 Year",
      description: "Durable monomeric vinyl suitable for short-term outdoor use. Ideal for vehicle graphics and signage.",
      image: hausMonomericVinyl1Year,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "1 Year Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Polymeric Vinyl",
      description: "Flexible polymeric vinyl designed for medium-term outdoor applications. Resists shrinking and cracking.",
      image: polymericVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "3-5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Cast Vinyl",
      description: "High-quality cast vinyl offering superior conformability for complex surfaces. Suitable for long-term use.",
      image: castVinyl,
      specs: [
        { label: "Thickness", value: "80 Microns" },
        { label: "Durability", value: "7+ Years Outdoor" },
        { label: "Finish", value: "Gloss" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus Monomeric Vinyl 3 Year",
      description: "Enhanced monomeric vinyl with extended durability for outdoor use. Ideal for high-traffic areas.",
      image: hausMonomericVinyl3Year,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "3 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Orajet 3164 Monomeric Vinyl 4 Year",
      description: "Premium monomeric vinyl with excellent print quality and durability for outdoor applications.",
      image: oraJet3164,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "4 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus High Tack Vinyl",
      description: "High-tack adhesive vinyl designed for challenging surfaces and irregular shapes.",
      image: hausHighTackVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "3-5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus Perforated Vinyl",
      description: "Perforated vinyl for window graphics, allowing visibility from inside while displaying ads outside.",
      image: hausPerforatedVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "3-5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus Frosted Vinyl",
      description: "Frosted vinyl providing privacy while maintaining light transmission. Ideal for glass surfaces.",
      image: hausFrostedVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "3-5 Years Indoor" },
        { label: "Finish", value: "Frosted" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus Eezidot Vinyl",
      description: "Easy-to-use vinyl with a dot pattern adhesive layer for bubble-free application.",
      image: hausEezidotVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "3-5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus Reflective Vinyl",
      description: "Reflective vinyl enhancing visibility during nighttime. Ideal for safety and promotional graphics.",
      image: hausReflectiveVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "3-5 Years Outdoor" },
        { label: "Finish", value: "Reflective" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Avery Reflective Vinyl",
      description: "High-quality reflective vinyl from Avery, offering enhanced night-time visibility.",
      image: averyReflectiveVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "5 Years Outdoor" },
        { label: "Finish", value: "Reflective" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus 5 Year",
      description: "Premium vinyl offering 5 years of outdoor durability. Suitable for long-term branding and signage.",
      image: haus5YearVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Orajet Polymeric Vinyl 3165/3651RA 5 Year",
      description: "High-performance polymeric vinyl with extended outdoor durability. Ideal for long-term applications.",
      image: oraJetPolymericVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Avery Wall Vinyl MP!2611",
      description: "Removable wall vinyl suitable for indoor use. Easy to apply and remove without residue.",
      image: averyWallVinylMP2611,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "3-5 Years Indoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Avery MPI1105 (7-10 Year)",
      description: "Ultra-durable cast vinyl with up to 10 years of outdoor durability. Ideal for vehicle wraps and long-term branding.",
      image: averyMPI1105,
      specs: [
        { label: "Thickness", value: "80 Microns" },
        { label: "Durability", value: "7-10 Years Outdoor" },
        { label: "Finish", value: "Gloss" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Mactac Cast Vinyl JT10700 (7 Year)",
      description: "High-quality cast vinyl from Mactac, offering superior conformability and 7 years of outdoor durability.",
      image: mactacCastVinylJT10700,
      specs: [
        { label: "Thickness", value: "80 Microns" },
        { label: "Durability", value: "7 Years Outdoor" },
        { label: "Finish", value: "Gloss" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Blockout PVC",
      description: "Opaque PVC material designed to block light completely, ideal for banners and signage.",
      image: blockoutPVC,
      specs: [
        { label: "Thickness", value: "440 Microns" },
        { label: "Durability", value: "3-5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Roll-up PVC (Layflat)",
      description: "Flexible PVC material designed for roll-up banners. Resists curling and lays flat for easy use.",
      image: rollUpPVC,
      specs: [
        { label: "Thickness", value: "400 Microns" },
        { label: "Durability", value: "3-5 Years Indoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Backlit PVC",
      description: "Translucent PVC material designed for backlit applications such as lightboxes. Provides vibrant prints when illuminated.",
      image: backlitPVC,
      specs: [
        { label: "Thickness", value: "360 Microns" },
        { label: "Durability", value: "3-5 Years Indoor" },
        { label: "Finish", value: "Gloss" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Mesh with Liner",
      description: "Perforated PVC mesh with a protective liner, allowing airflow while maintaining print quality. Ideal for outdoor banners and fences.",
      image: meshWithLiner,
      specs: [
        { label: "Thickness", value: "380 Microns" },
        { label: "Durability", value: "3-5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "T-Shirt Transfer Vinyl",
      description: "Flexible vinyl designed for heat transfer onto t-shirts and fabrics. Durable and wash-resistant.",
      image: tShirtTransferVinyl,
      specs: [
        { label: "Thickness", value: "100 Microns" },
        { label: "Durability", value: "50+ Washes" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "420mm, 610mm" },
        { label: "Sizes", value: "420mm, 610mm" },
        { label: "Length", value: "25m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Backlit Film",
      description: "Translucent film designed for backlit applications such as lightboxes. Provides vibrant prints when illuminated.",
      image: backlitFilm,
      specs: [
        { label: "Thickness", value: "175 Microns" },
        { label: "Durability", value: "3-5 Years Indoor" },
        { label: "Finish", value: "Gloss" },
        { label: "Available Sizes", value: "1370mm, 1520mm" },
        { label: "Sizes", value: "1370mm, 1520mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus Polyester Canvas",
      description: "Durable polyester canvas suitable for indoor and outdoor use. Resists tearing and water damage.",
      image: hausPolyesterCanvas,
      specs: [
        { label: "Thickness", value: "400gsm" },
        { label: "Durability", value: "3-5 Years Outdoor" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "914mm, 1067mm" },
        { label: "Sizes", value: "914mm, 1067mm" },
        { label: "Length", value: "30m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Haus Cotton Canvas",
      description: "Premium cotton canvas offering a natural texture. Ideal for fine art reproduction and high-end prints.",
      image: hausCottonCanvas,
      specs: [
        { label: "Thickness", value: "410gsm" },
        { label: "Durability", value: "Indoor Use Only" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "914mm, 1067mm" },
        { label: "Sizes", value: "914mm, 1067mm" },
        { label: "Length", value: "30m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Picasso Canvas",
      description: "High-quality canvas material with excellent color reproduction. Suitable for professional artists and photographers.",
      image: picassoCanvas,
      specs: [
        { label: "Thickness", value: "420gsm" },
        { label: "Durability", value: "Indoor Use Only" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "914mm, 1067mm" },
        { label: "Sizes", value: "914mm, 1067mm" },
        { label: "Length", value: "30m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Muramour Sable Wallpaper",
      description: "Luxury wallpaper with a textured finish. Ideal for interior design projects.",
      image: muramourSableWallpaper,
      specs: [
        { label: "Thickness", value: "280gsm" },
        { label: "Durability", value: "Indoor Use Only" },
        { label: "Finish", value: "Textured" },
        { label: "Available Sizes", value: "1067mm" },
        { label: "Sizes", value: "1067mm" },
        { label: "Length", value: "10m" },
        { label: "Printer Compatibility", value: "Latex and UV" },
        { label: "Compatibility", value: "Latex and UV" },
      ],
    },
    {
      name: "Muraspec Graphite Wallpaper",
      description: "Modern graphite-textured wallpaper for contemporary interiors. Easy to apply and remove.",
      image: muraspecGraphiteWallpaper,
      specs: [
        { label: "Thickness", value: "250gsm" },
        { label: "Durability", value: "Indoor Use Only" },
        { label: "Finish", value: "Textured" },
        { label: "Available Sizes", value: "1067mm" },
        { label: "Sizes", value: "1067mm" },
        { label: "Length", value: "10m" },
        { label: "Printer Compatibility", value: "Latex and UV" },
        { label: "Compatibility", value: "Latex and UV" },
      ],
    },
    {
      name: "GV Tex Self-adhesive Wallpaper",
      description: "Self-adhesive wallpaper with easy application and removal. Suitable for temporary and permanent installations.",
      image: TexSelfAdhesiveWallpaper,
      specs: [
        { label: "Thickness", value: "220gsm" },
        { label: "Durability", value: "Indoor Use Only" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1067mm" },
        { label: "Sizes", value: "1067mm" },
        { label: "Length", value: "10m" },
        { label: "Printer Compatibility", value: "Latex and UV" },
        { label: "Compatibility", value: "Latex and UV" },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Solvent Media</h1>
              <p className="text-lg text-muted-foreground">
                Durable outdoor vinyl for all signage and wraps. Media for solvent, eco-solvent, latex and UV printers.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 gap-8 xl:gap-10 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default SolventMedia;

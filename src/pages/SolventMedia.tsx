import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { useLocation } from "react-router-dom";
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
  // Sub-categories for Solvent Media
  const sections = [
    { id: "pvc", name: "PVC" },
    { id: "paper", name: "Paper" },
    { id: "vinyl", name: "Vinyl" },
    { id: "other", name: "Other" },
  ];

  const toId = (s: string) => s.toLowerCase();
  const vinylNameExceptions = new Set([
    toId("Avery MPI1105 (7-10 Year)"),
    toId("Haus 5 Year"),
  ]);
  const getSubCategory = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("pvc")) return "pvc";
    if (n.includes("paper")) return "paper";
    if (n.includes("vinyl") || vinylNameExceptions.has(n)) return "vinyl";
    return "other";
  };

  const products = [
    {
      name: "Bond Paper",
      description:
        "A standard uncoated 80gsm paper used to print cad drawings, landscaping plans, blueprints and templates. Bond paper is acid-free and won’t yellow over time. Fits most large-format printers and engineering copiers.",
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
      name: "Trisolve Poster Paper",
      description:
        "A multi-coated, weatherproof poster paper with high wet-strength and a glossy satin finish. This poster paper impresses with high colour brilliance and very good image definition. The material dries quickly even with high ink densities and does not cockle easily.",
      image: trisolvePosterPaper,
      specs: [
        { label: "Thickness", value: "135gsm, 200gsm" },
        { label: "Finish", value: "Satin" },
        { label: "Available Sizes", value: "914mm, 1270mm, 1370mm, 1524mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Tear-resistant Synthetic Paper",
      description:
        "A synthetic tear-proof paper used for poster printing, point of sale, pull-up banners, scrolling banners. Scratch and smudge resistant.",
      image: tearResistantSyntheticPaper,
      specs: [
        { label: "Thickness", value: "135gsm" },
        { label: "Finish", value: "Satin" },
        { label: "Available Sizes", value: "1270mm, 1524mm" },
        { label: "Length", value: "30m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Photo Paper",
      description:
        "A very high quality synthetic paper used for photographic reproduction. Scratch and smudge resistant.",
      image: photoPaper,
      specs: [
        { label: "Thickness", value: "220gsm" },
        { label: "Finish", value: "Matt and Gloss" },
        { label: "Available Sizes", value: "914mm, 1270mm, 1524mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Magnetic Paper (Promo Steel)",
      description:
        "Promo Steel is a digitally printable paper with an iron/ferrous coating that can be applied directly to magnetic substrates. This product is used for retail advertising, allowing you to replace the graphic with ease.",
      image: magneticPaper,
      specs: [
        { label: "Thickness", value: "—" },
        { label: "Finish", value: "Satin" },
        { label: "Available Sizes", value: "1270mm" },
        { label: "Length", value: "30m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
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
      description:
        "A high-strength laminated flex (1000 x 1000 DIN) designed for outdoor use for billboards and banners. The black back gives 100% opacity so if the sun shines from behind, it does not interfere with the image printed on it.",
      image: blockoutPVC,
      specs: [
        { label: "Thickness", value: "510 gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1600mm, 3200mm" },
        { label: "Sizes", value: "1370mm, 1600mm, 3200mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Roll-up PVC (Layflat)",
      description:
        "A scrimless non-curl frontlit PVC banner ideally used for roll-ups and X-banners. The PVC has a scrimless smooth appearance.",
      image: rollUpPVC,
      specs: [
        { label: "Thickness", value: "510 gsm" },
        { label: "Finish", value: "Satin" },
        { label: "Available Sizes", value: "900mm, 1350mm, 1800mm, 2700mm, 3200mm" },
        { label: "Sizes", value: "900mm, 1350mm, 1800mm, 2700mm, 3200mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Backlit PVC",
      description:
        "This backlit PVC is re-inforced and designed to be translucent so that when light shines through from behind, the design lights up. Generally used in lightboxes and backlit billboards that get viewed from a distance. Weather resistant with good light transmission.",
      image: backlitPVC,
      specs: [
        { label: "Thickness", value: "500 gsm" },
        { label: "Finish", value: "Satin" },
        { label: "Available Sizes", value: "1370mm, 1600mm, 2500mm, 3200mm" },
        { label: "Sizes", value: "1370mm, 1600mm, 2500mm, 3200mm" },
        { label: "Length", value: "50m" },
        { label: "Printer Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
        { label: "Compatibility", value: "Solvent, Eco-solvent, Latex and UV" },
      ],
    },
    {
      name: "Mesh with Liner",
      description:
        "A lightweight PVC mesh used for banners and other graphics applications and which allows air and sound to pass through. Ideal for high-wind applications. Can be used for building wraps, event graphics, fence banners and even indoor blinds as it is partially see-through.",
      image: meshWithLiner,
      specs: [
        { label: "Thickness", value: "270 gsm" },
        { label: "Finish", value: "Matt" },
        { label: "Available Sizes", value: "1370mm, 1600mm, 3200mm" },
        { label: "Sizes", value: "1370mm, 1600mm, 3200mm" },
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

  const location = useLocation();
  const activeSectionId = (location.hash || "").replace("#", "");
  const isValidSection = sections.some((s) => s.id === activeSectionId);
  const visibleSections = isValidSection ? sections.filter((s) => s.id === activeSectionId) : sections;

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
        {/* Category Navigation */}
        <section className="border-b bg-card sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 overflow-x-auto py-4">
              {sections.map((cat) => (
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

        {/* Products by Sub-category */}
        {visibleSections.map((category) => (
          <section key={category.id} id={category.id} className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h2>
              </div>
              <div className="grid grid-cols-1 gap-8 xl:gap-10 max-w-4xl mx-auto">
                {products
                  .filter((p) => getSubCategory(p.name) === category.id)
                  .map((product) => (
                    <ProductCard
                      key={product.name}
                      name={product.name}
                      description={product.description}
                      image={product.image}
                      specs={product.specs}
                    />
                  ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};
export default SolventMedia;

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SolventMedia from "./pages/SolventMedia";
import DTGFilms from "./pages/DTGFilms";
import FinishingFilms from "./pages/FinishingFilms";
import { InkjetMedia } from "./pages/InkjetMedia";
import InkjetBondPaper from "./pages/inkjet/BondPaper";
import InkjetCoatedPaper from "./pages/inkjet/CoatedPaper";
import InkjetEnhancedCoatedPaper from "./pages/inkjet/EnhancedCoatedPaper";
import InkjetPhotoPaper from "./pages/inkjet/PhotoPaper";
import InkjetCanvas from "./pages/inkjet/Canvas";
import InkjetVinyl from "./pages/inkjet/Vinyl";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="mediahaus-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inkjet-media" element={<InkjetMedia/>} />
          <Route path="/inkjet-media/bond-paper" element={<InkjetBondPaper />} />
          <Route path="/inkjet-media/coated-paper" element={<InkjetCoatedPaper />} />
          <Route path="/inkjet-media/enhanced-coated-paper" element={<InkjetEnhancedCoatedPaper />} />
          <Route path="/inkjet-media/photo-paper" element={<InkjetPhotoPaper />} />
          <Route path="/inkjet-media/canvas" element={<InkjetCanvas />} />
          <Route path="/inkjet-media/vinyl" element={<InkjetVinyl />} />
          <Route path="/solvent-media" element={<SolventMedia />} />
          <Route path="/dtg-films" element={<DTGFilms />} />
          <Route path="/finishing-films" element={<FinishingFilms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

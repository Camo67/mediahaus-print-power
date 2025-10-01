import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InkjetMedia from "./pages/InkjetMedia";
import SolventMedia from "./pages/SolventMedia";
import DTFMedia from "./pages/DTFMedia";
import FinishingFilms from "./pages/FinishingFilms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/inkjet-media" element={<InkjetMedia />} />
          <Route path="/solvent-media" element={<SolventMedia />} />
          <Route path="/dtf-media" element={<DTFMedia />} />
          <Route path="/finishing-films" element={<FinishingFilms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Index from "./pages/Index";
import About from "./pages/About";
import News from "./pages/News";
import Policies from "./pages/Policies";
import Opportunities from "./pages/Opportunities";
import Guide from "./pages/Guide";
import Database from "./pages/Database";
import Services from "./pages/Services";
import HCMC from "./pages/HCMC";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewsDetail from "./pages/NewsDetail"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/database" element={<Database />} />
              <Route path="/services" element={<Services />} />
              <Route path="/hcmc" element={<HCMC />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

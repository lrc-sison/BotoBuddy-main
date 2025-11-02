import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import VotingPage from "./pages/VotingPage";
import CandidateProfiles from "./pages/CandidateProfiles";
import SampleTest from "./pages/SampleTest";
import CompetenceTest from "./pages/CompetenceTest";
import AboutUs from "./pages/AboutUs";
import MeetTheTeam from "./pages/MeetTheTeam";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/candidates" element={<CandidateProfiles />} />
          <Route path="/test" element={<SampleTest />} />        {/* alignment test */}
          <Route path="/competence" element={<CompetenceTest />} /> {/* competence test */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

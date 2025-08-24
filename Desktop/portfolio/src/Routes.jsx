import React from "react";
import { HashRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import PortfolioHomepage from "pages/portfolio-homepage";
import ProjectDetailModal from "pages/project-detail-modal";
import ResumePreviewModal from "pages/resume-preview-modal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <HashRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<PortfolioHomepage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/portfolio-homepage" element={<PortfolioHomepage />} />
        <Route path="/project-detail-modal" element={<ProjectDetailModal />} />
        <Route path="/resume-preview-modal" element={<ResumePreviewModal />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </HashRouter>
  );
};

export default Routes;
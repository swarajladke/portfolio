import React, { Suspense, lazy } from "react";
import { HashRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

const PortfolioHomepage = lazy(() => import("pages/portfolio-homepage"));
const ProjectDetailModal = lazy(() => import("pages/project-detail-modal"));
const ResumePreviewModal = lazy(() => import("pages/resume-preview-modal"));
const PrivacyPolicy = lazy(() => import("pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("pages/TermsOfService"));
const NotFound = lazy(() => import("pages/NotFound"));

const Routes = () => {
  return (
    <HashRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a] text-white">Loading...</div>}>
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
        </Suspense>
      </ErrorBoundary>
    </HashRouter>
  );
};

export default Routes;
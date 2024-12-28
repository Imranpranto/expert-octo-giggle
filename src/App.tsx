import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './pages/Auth';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { ServicesProvider } from './contexts/ServicesContext';
import { LeadsProvider } from './contexts/LeadsContext';
import { useAuth } from './hooks/useAuth';
import { toast } from './utils/toast';

// Lazy load components for better performance
const FeatureCards = React.lazy(() => import('./components/FeatureCards'));
const CreditStats = React.lazy(() => import('./components/CreditStats'));
const ServicesGrid = React.lazy(() => import('./components/ServicesGrid'));
const ServiceDetails = React.lazy(() => import('./pages/ServiceDetails'));
const Operations = React.lazy(() => import('./pages/Operations'));
const ProfilePostCommentators = React.lazy(() => import('./pages/ProfilePostCommentators'));
const GetPostReactions = React.lazy(() => import('./pages/GetPostReactions'));
const Integrations = React.lazy(() => import('./pages/Integrations'));
const ProfilePosts = React.lazy(() => import('./pages/ProfilePosts'));
const CompanyPosts = React.lazy(() => import('./pages/CompanyPosts'));
const Leads = React.lazy(() => import('./pages/Leads'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const ProfileDataByUrl = React.lazy(() => import('./pages/ProfileDataByUrl'));
const ArticleComments = React.lazy(() => import('./pages/ArticleComments'));
const ArticleReactions = React.lazy(() => import('./pages/ArticleReactions'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const MySubscription = React.lazy(() => import('./pages/MySubscription'));

// Success page component
function SubscriptionSuccess() {
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (user && location.search.includes('success=true')) {
      toast.success('Subscription updated successfully!');
    }
  }, [location, user]);

  return <Navigate to="/my-subscription" replace />;
}

function App() {
  return (
    <ServicesProvider>
      <LeadsProvider>
        <Router>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/subscription/success" element={<SubscriptionSuccess />} />
            <Route path="/*" element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50 flex">
                  <Sidebar />
                  <div className="flex-1 flex flex-col ml-16">
                    <Header />
                    <main className="flex-1">
                      <React.Suspense fallback={
                        <div className="flex items-center justify-center h-full">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                        </div>
                      }>
                        <Routes>
                          <Route path="/" element={
                            <div className="p-8">
                              <div className="max-w-7xl mx-auto">
                                <div className="mb-8">
                                  <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
                                  <p className="text-gray-500">A reliable Company to search & enrich LinkedIn things</p>
                                </div>
                                <div className="mb-8">
                                  <CreditStats />
                                </div>
                                <div className="mb-8">
                                  <FeatureCards />
                                </div>
                                <div className="mb-8">
                                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Operations</h2>
                                  <ServicesGrid />
                                </div>
                              </div>
                            </div>
                          } />
                          <Route path="/service/:serviceId" element={<ServiceDetails />} />
                          <Route path="/operations" element={<Operations />} />
                          <Route path="/get-post-reactions" element={<GetPostReactions />} />
                          <Route path="/profile-post-commentators" element={<ProfilePostCommentators />} />
                          <Route path="/profile-posts" element={<ProfilePosts />} />
                          <Route path="/company-posts" element={<CompanyPosts />} />
                          <Route path="/profile-data-by-url" element={<ProfileDataByUrl />} />
                          <Route path="/article-comments" element={<ArticleComments />} />
                          <Route path="/analytics" element={<Analytics />} />
                          <Route path="/article-reactions" element={<ArticleReactions />} />
                          <Route path="/pricing" element={<Pricing />} />
                          <Route path="/my-subscription" element={<MySubscription />} />
                          <Route path="/settings" element={<Settings />} />
                          <Route path="/leads" element={<Leads />} />
                          <Route path="/integrations" element={<Integrations />} />
                          <Route path="*" element={<Navigate to="/" replace={true} />} />
                        </Routes>
                      </React.Suspense>
                    </main>
                  </div>
                </div>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </LeadsProvider>
    </ServicesProvider>
  );
}

export default App;
// Imports for Authentication
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/interactive-learning" element={<InteractiveLearning />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/modules" element={<Modules />} />

            {/* Protected Routes */}
            <Route 
              path="/progress" 
              element={
                <ProtectedRoute>
                  <ProgressDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Module Landing Pages */}
            <Route 
              path="/modules/module1" 
              element={
                <ProtectedRoute>
                  <Module1Landing />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/modules/module2" 
              element={
                <ProtectedRoute>
                  <Module2Landing />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/modules/module3" 
              element={
                <ProtectedRoute>
                  <Module3Landing />
                </ProtectedRoute>
              } 
            />

            {/* Module 1 Sections */}
            <Route 
              path="/module1/digital-currencies" 
              element={
                <ProtectedRoute>
                  <DigitalCurrenciesSection />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/module1/history-of-money" 
              element={
                <ProtectedRoute>
                  <HistoryOfMoneySection />
                </ProtectedRoute>
              } 
            />
            {/* Continue with similar protected routes for other sections and quizzes */}

            {/* Fallback 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

// Create a simple NotFound component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-blue-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">404 - Page Not Found</h1>
      <p className="text-blue-700 mb-6">The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </div>
  </div>
);

export default App;
import Module3Landing from './pages/Module3Landing';
import ProgressDashboard from './components/ProgressDashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interactive-learning" element={<InteractiveLearning />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/progress" element={<ProgressDashboard />} />

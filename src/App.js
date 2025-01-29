import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import InteractiveLearning from './pages/InteractiveLearning';
import Curriculum from './pages/Curriculum';
import Modules from './pages/Modules';
import ProgressDashboard from './components/ProgressDashboard';

// Module Landing and Section Imports
import Module1Landing from './pages/Module1Landing';
import Module2Landing from './pages/Module2Landing';
import Module3Landing from './pages/Module3Landing';

// Module 1 Specific Imports
import DigitalCurrenciesSection from './pages/DigitalCurrenciesSection';
import HistoryOfMoneySection from './pages/HistoryOfMoneySection';
import BitcoinSection from './pages/BitcoinSection';
import AltcoinsAndTokensSection from './pages/AltcoinsAndTokensSection';
import CryptoMarketDynamicsSection from './pages/CryptoMarketDynamicsSection';
import CryptographySection from './pages/CryptographySection';

// Module 2 Specific Imports
import BlockchainBasicsSection from './pages/BlockchainBasicsSection';
import DistributedLedgerSection from './pages/DistributedLedgerSection';
import ConsensusMechanismsSection from './pages/ConsensusMechanismsSection';
import SmartContractsSection from './pages/SmartContractsSection';

// Module 3 Specific Imports
import BlockchainScalabilitySection from './pages/BlockchainScalabilitySection';
import BlockchainTypesSection from './pages/BlockchainTypesSection';
import BlockchainPlatformsSection from './pages/BlockchainPlatformsSection';

// Module 1 Quizzes
import Module1Quiz from './pages/Module1Quiz';
import DigitalCurrenciesQuiz from './pages/DigitalCurrenciesQuiz';
import HistoryOfMoneyQuiz from './pages/HistoryOfMoneyQuiz';
import BitcoinQuiz from './pages/BitcoinQuiz';
import AltcoinsAndTokensQuiz from './pages/AltcoinsAndTokensQuiz';
import CryptoMarketDynamicsQuiz from './pages/CryptoMarketDynamicsQuiz';
import CryptographyQuiz from './pages/CryptographyQuiz';

// Module 2 Quizzes
import BlockchainBasicsQuiz from './pages/BlockchainBasicsQuiz';
import DistributedLedgerQuiz from './pages/DistributedLedgerQuiz';
import ConsensusMechanismsQuiz from './pages/ConsensusMechanismsQuiz';
import SmartContractsQuiz from './pages/SmartContractsQuiz';

// Module 3 Quizzes
import BlockchainScalabilityQuiz from './pages/BlockchainScalabilityQuiz';
import BlockchainTypesQuiz from './pages/BlockchainTypesQuiz';
import BlockchainPlatformsQuiz from './pages/BlockchainPlatformsQuiz';

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

          {/* Module Landing Pages */}
          <Route path="/modules/module1" element={<Module1Landing />} />
          <Route path="/modules/module2" element={<Module2Landing />} />
          <Route path="/modules/module3" element={<Module3Landing />} />

          {/* Module 1 Sections */}
          <Route path="/module1/digital-currencies" element={<DigitalCurrenciesSection />} />
          <Route path="/module1/history-of-money" element={<HistoryOfMoneySection />} />
          <Route path="/module1/bitcoin" element={<BitcoinSection />} />
          <Route path="/module1/altcoins-and-tokens" element={<AltcoinsAndTokensSection />} />
          <Route path="/module1/market-dynamics" element={<CryptoMarketDynamicsSection />} />
          <Route path="/module1/cryptography" element={<CryptographySection />} />

          {/* Module 2 Sections */}
          <Route path="/module2/blockchain-basics" element={<BlockchainBasicsSection />} />
          <Route path="/module2/distributed-ledger" element={<DistributedLedgerSection />} />
          <Route path="/module2/consensus-mechanisms" element={<ConsensusMechanismsSection />} />
          <Route path="/module2/smart-contracts" element={<SmartContractsSection />} />

          {/* Module 3 Sections */}
          <Route path="/module3/scalability" element={<BlockchainScalabilitySection />} />
          <Route path="/module3/blockchain-types" element={<BlockchainTypesSection />} />
          <Route path="/module3/blockchain-platforms" element={<BlockchainPlatformsSection />} />

          {/* Module 1 Quizzes */}
          <Route path="/module1/quiz" element={<Module1Quiz />} />
          <Route path="/module1/digital-currencies-quiz" element={<DigitalCurrenciesQuiz />} />
          <Route path="/module1/history-of-money-quiz" element={<HistoryOfMoneyQuiz />} />
          <Route path="/module1/bitcoin-quiz" element={<BitcoinQuiz />} />
          <Route path="/module1/altcoins-quiz" element={<AltcoinsAndTokensQuiz />} />
          <Route path="/module1/market-dynamics-quiz" element={<CryptoMarketDynamicsQuiz />} />
          <Route path="/module1/cryptography-quiz" element={<CryptographyQuiz />} />

          {/* Module 2 Quizzes */}
          <Route path="/module2/blockchain-basics-quiz" element={<BlockchainBasicsQuiz />} />
          <Route path="/module2/distributed-ledger-quiz" element={<DistributedLedgerQuiz />} />
          <Route path="/module2/consensus-mechanisms-quiz" element={<ConsensusMechanismsQuiz />} />
          <Route path="/module2/smart-contracts-quiz" element={<SmartContractsQuiz />} />

          {/* Module 3 Quizzes */}
          <Route path="/module3/scalability-quiz" element={<BlockchainScalabilityQuiz />} />
          <Route path="/module3/blockchain-types-quiz" element={<BlockchainTypesQuiz />} />
          <Route path="/module3/blockchain-platforms-quiz" element={<BlockchainPlatformsQuiz />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
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

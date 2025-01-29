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

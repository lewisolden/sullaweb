import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import InteractiveLearning from './pages/InteractiveLearning';
import Curriculum from './pages/Curriculum';
import Modules from './pages/Modules';

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

// Module 1 Quizzes
import Module1Quiz from './pages/Module1Quiz';
import DigitalCurrenciesQuiz from './pages/DigitalCurrenciesQuiz';
import HistoryOfMoneyQuiz from './pages/HistoryOfMoneyQuiz';
import BitcoinQuiz from './pages/BitcoinQuiz';
import AltcoinsAndTokensQuiz from './pages/AltcoinsAndTokensQuiz';
import CryptoMarketDynamicsQuiz from './pages/CryptoMarketDynamicsQuiz';
import CryptographyQuiz from './pages/CryptographyQuiz';

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

          {/* Module 1 Quizzes */}
          <Route path="/module1/quiz" element={<Module1Quiz />} />
          <Route path="/module1/digital-currencies-quiz" element={<DigitalCurrenciesQuiz />} />
          <Route path="/module1/history-of-money-quiz" element={<HistoryOfMoneyQuiz />} />
          <Route path="/module1/bitcoin-quiz" element={<BitcoinQuiz />} />
          <Route path="/module1/altcoins-quiz" element={<AltcoinsAndTokensQuiz />} />
          <Route path="/module1/market-dynamics-quiz" element={<CryptoMarketDynamicsQuiz />} />
          <Route path="/module1/cryptography-quiz" element={<CryptographyQuiz />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

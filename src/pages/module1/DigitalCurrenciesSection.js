import React, { useState, useEffect } from 'react';

const DigitalCurrenciesSection = () => {
  // Mock progress update function
  const updateProgress = (moduleId, sectionId, completed) => {
    console.log(`Progress updated: Module ${moduleId}, Section ${sectionId}, Completed: ${completed}`);
  };

  const [isFullyRead, setIsFullyRead] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercent);

      // Mark as fully read if scrolled to bottom
      if (scrollPercent > 95) {
        setIsFullyRead(true);
        updateProgress(1, 'digital-currencies', true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
        <div 
          className="h-full bg-blue-600" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Introduction to Digital Currencies: The Dawn of a New Financial Era
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Imagine a world where you can send money to anyone, anywhere, at any time, without needing a bank. A world where you have complete control over your finances, free from government interference or corporate oversight. A world where the very nature of money itself is being redefined. This isn't science fiction—it's the world of digital currencies, and it's happening right now.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">The Digital Revolution of Money</h2>
          
          <p>
            Just as the internet revolutionised information, digital currencies are transforming the very fabric of our financial systems. But what exactly are digital currencies? At their core, they're a new form of money designed for the digital age—intangible, yet as real and valuable as the cash in your wallet.
          </p>

          <p>
            Digital currencies come in various forms, from the cryptocurrencies that make headlines to the less-known virtual currencies used in online games. But it's cryptocurrencies like Bitcoin that have truly captured the world's imagination, promising a future where financial transactions are as easy as sending an email.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">More Than Just Money</h2>
          
          <p>
            But digital currencies are about more than just a new way to pay for things. They represent a fundamental shift in how we think about money, value, and trust in the digital age.
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Decentralisation:</strong> Many digital currencies operate on decentralised networks, free from the control of any single entity. This means no central bank, no CEO, and no single point of failure.
            </li>
            <li>
              <strong>Transparency:</strong> Transactions are often recorded on public ledgers, viewable by anyone. This level of transparency was unthinkable in traditional financial systems.
            </li>
            <li>
              <strong>Programmable Money:</strong> Some digital currencies, like Ethereum, allow for "smart contracts"—self-executing agreements that can automate complex financial transactions.
            </li>
            <li>
              <strong>Global Access:</strong> Digital currencies have the potential to provide financial services to the billions of people worldwide who don't have access to traditional banking.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Challenges and Controversies</h2>
          
          <p>
            Of course, this brave new world of digital currencies isn't without its challenges. Volatile prices, regulatory uncertainties, and concerns about illegal activities have all made headlines. Critics argue that cryptocurrencies are a bubble, a fad, or worse.
          </p>

          <p>
            But supporters see these as growing pains of a technology that could be as transformative as the internet itself. They point to the underlying blockchain technology, which has applications far beyond just digital money.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">The Future is Digital</h2>
          
          <p>
            Whether digital currencies will replace traditional money entirely is yet to be seen. But one thing is clear: they're already changing the way we think about finance, technology, and the nature of trust in the digital age.
          </p>

          <p>
            As we embark on this journey to understand digital currencies, we'll explore their history, their underlying technology, and their potential to reshape our financial future. We'll separate fact from fiction, hype from reality, and explore both the promises and pitfalls of this revolutionary technology.
          </p>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Digital Currencies section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalCurrenciesSection;

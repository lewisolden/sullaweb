import React, { useState, useEffect } from 'react';

const HistoryOfMoneySection = () => {
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
        updateProgress(1, 'history-of-money', true);
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

      <div className="max-w-4xl mx-auto prose lg:prose-xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          History and Evolution of Money
        </h1>

        <p className="lead">
          Money, in its various forms, has been a cornerstone of human civilization for thousands of years. To understand the significance of modern cryptocurrencies, it's crucial to trace the evolution of money from its earliest incarnations to the digital age.
        </p>

        <section>
          <h2 className="text-3xl font-bold text-blue-700 mt-8">Barter Systems: The Precursor to Money</h2>
          <p>
            Before the invention of money, people used barter systems to exchange goods and services directly. While simple in concept, barter had significant limitations:
          </p>
          <ul>
            <li>Double Coincidence of Wants: Both parties needed to have what the other wanted.</li>
            <li>Lack of a Common Measure of Value: Difficult to compare the value of different items.</li>
            <li>Indivisibility of Certain Goods: Some items couldn't be divided for smaller transactions.</li>
          </ul>
        </section>

        {/* Rest of the content from the document would be added here, carefully formatted */}
        
        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the History of Money section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryOfMoneySection;

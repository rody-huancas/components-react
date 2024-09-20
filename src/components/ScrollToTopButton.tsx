import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={classNames(
            'p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none shadow-md transition-all',
            'focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          )}
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

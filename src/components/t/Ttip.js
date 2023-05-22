import React, { useState } from 'react';

const Ttip = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative">
      <div
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute top-0 left-full ml-2 mt-1 bg-gray-200 p-2 rounded">
          {content}
        </div>
      )}
    </div>
  );
};

export default Ttip;
import React, { useState } from 'react';

const Info = (props) => {
  const { name, biography } = props;
  const [isVisible, setIsVisible] = useState(true);

  const handleCardClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={`card ${isVisible ? '' : 'hidden'}`} onClick={handleCardClick}>
      <h2>Hi! I am {name}</h2>
      <p>{biography}</p>
    </div>
  );
};

export default Info;
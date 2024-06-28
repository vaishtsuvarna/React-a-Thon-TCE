import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} link={card.link} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

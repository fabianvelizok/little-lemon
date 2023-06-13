import React from 'react';
import { useNavigate } from "react-router-dom";
import Container from '../Container/Container';
import Button from '../Button/Button';
import salad from '../../img/greek-salad.jpg';
import dessert from '../../img/lemon-dessert.jpg';
import './Specials.styles.css';

const mockCards = [
  {
    image: salad,
    title: 'Card 1',
    price: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum ullamcorper mauris ac tincidunt. Donec consectetur, nisi a sagittis pulvinar.'
  },
  {
    image: dessert,
    title: 'Card 2',
    price: 120,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum nunc eu mauris tristique, in lobortis lacus condimentum. Proin finibus.'
  },
  {
    image: salad,
    title: 'Card 3',
    price: 80,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a diam elementum, laoreet urna a, congue velit. Phasellus pretium lacinia.'
  }
];

const Specials = ({ className }) => {
  const classes = `specials ${className}`;
  const navigate = useNavigate();

  return (
    <section>
      <Container className={classes}>
        <div className="specials-heading specials-heading-top">
          <h1 className="highlight-color-black hero-title">This Weeks Specials!</h1>
          <Button handleClick={() => navigate('/booking')}>
            Online Menu
          </Button>
        </div>

        <div className="specials-container">
          {mockCards.map(card => (
            <div key={card.title} className="specials-card rounded">
              <figure className="specials-image-container">
                <img className="specials-image" src={card.image} alt={card.title} />
              </figure>
              <div className="specials-body highlight-bg-color-gray">
                <div className="specials-heading">
                  <h2 className="specials-title">{card.title}</h2>
                  <p className="specials-price primary-color-yellow">${' '}{card.price}</p>
                </div>
                <p className="specials-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Specials;

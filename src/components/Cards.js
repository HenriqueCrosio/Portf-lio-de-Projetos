import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Surpreenda-se</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='Explore o mundo das NFTs aqui'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='images/img-2.png'
              text='Conheça o mundo gerado por inteligência artificial'
              label='Arte'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.gif'
              text='Adquira um exemplar da coleção Baby Crypto Dog'
              label='Mistério'
              path='/services'
            />
            <CardItem
              src='images/img-4.png'
              text='Ajude o Baby Dog'
              label='Game'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Conheça o melhor site de Lentes de Contato'
              label='Comercial'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

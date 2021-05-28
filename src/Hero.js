import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  const closeSubmenuBar = (e) => {
    closeSubmenu();
  };

  return (
    <section className='hero' onMouseOver={closeSubmenuBar}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infastructure for internet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda quo suscipit fuga
            ea, animi, est quasi incidunt cumque ut alias facilis blanditiis minima, ab error. Fuga, tempora
            dolor! Voluptate!
          </p>
          <button className='btn'>Start now</button>
        </article>

        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='Phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;

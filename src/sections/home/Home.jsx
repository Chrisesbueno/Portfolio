import React from 'react'
import { base, buttons } from '../../constants'
import { Hand } from '../../assets';
import { Social, ScrollDown, Button } from '../../components';
import './home.css';

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social page='home' />
                <div className="home__content-img"></div>
                <div className="home__content-data">
                    <div className="data__title">
                        <h1>{base.name}</h1>
                        <img src={Hand} alt="hand" />
                    </div>
                    <h3 className="data__job">{base.job}</h3>
                    <p className="data__description">{base.description}</p>
                    <Button link={buttons[0].link} title={buttons[0].title} icon={buttons[0].icon} />
                </div>

            </div>
            
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home
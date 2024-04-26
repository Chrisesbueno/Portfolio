import React from 'react'
import { Button, Slider } from '../../components'
import { basePortfolio, buttons, projectsPortfolio } from '../../constants'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className="work container section" id="portfolio">
        <h2 className="section__title">{basePortfolio.title}</h2>
        <p className="section__subtitle">{basePortfolio.subtitle}</p>

        <Slider origin={projectsPortfolio} base='portfolio' />
        <Button link={buttons[3].link} title={buttons[3].title} icon={buttons[3].icon} target={`_blank`} />
    </section>
  )
}

export default Portfolio
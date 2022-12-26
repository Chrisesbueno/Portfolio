import React from 'react';
import { baseQualification, certifications } from '../../constants';
import { Slider, Tabs } from '../../components'
import './qualification.css';

const Qualification = () => {
    return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">
            {baseQualification.title}
        </h2>
        <p className="section__subtitle">
            {baseQualification.subtitle}
        </p>
        <Tabs />

        <Slider origin={certifications} direction={true} delay={1000} perview={4} base='slider' />
    </section>
  )
}

export default Qualification
import React, { useState } from 'react'
import { baseQualification } from '../constants';
import { Tab } from './index'

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className=
            {
            toggleState === 1 
            ? "qualification__button button--flex qualification__active" 
            : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
            >
                <i className={`${baseQualification.education.icon} qualification__icon`}></i>
                {baseQualification.education.title}
            </div>

            <div className=
            {
            toggleState === 2 
            ? "qualification__button button--flex qualification__active" 
            : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
            >
                <i className={`${baseQualification.experience.icon} qualification__icon`}></i>
                {baseQualification.experience.title}
            </div>
        </div>
        {toggleState === 1 ?
        (
            <div className="qualification__sections">
                <Tab toggle={toggleState} />
            </div>
        ) : (
            <div className="qualification__sections">
                <Tab toggle={toggleState} title={baseQualification} />
            </div>
        ) }
    </div>
  )
}

export default Tabs
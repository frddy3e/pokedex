import React from "react";
import Style from './slider.module.css';

/**
 * This componet allows to render a slider to pick a value between a min and a max value.
 * @param {*} props 
 * @returns 
 */
const Slider = (props) => {
    const {id, label, value, onChange, type, error, minValue, maxValue} = props;
    return <div data-testid="slider" className={Style.sliderAll}>
        <label htmlFor={id}>{label}</label>
        <p>{minValue}</p>
        <input id={id} type={type} value={value} onChange={onChange} min={minValue} max={maxValue} className={Style.slider} data-testid="slider-input"/>
        {error && <span data-testid="slider-error">{error}</span>}
        <p>{maxValue}</p>
    </div>
}

Slider.defaultProps = {
    type: "range"
}

export default Slider;
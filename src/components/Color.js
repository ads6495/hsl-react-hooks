import React, { useState } from 'react';

const Color = () => {
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360));
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100));
  const [lightness, setLightness] = useState(Math.ceil(Math.random() * 100));

  const RandomColor = () => {
    setHue(Math.ceil(Math.random() * 360))
    setSaturation(Math.ceil(Math.random() * 100))
    setLightness(Math.ceil(Math.random() * 100))
  }

  return (
    <main className="body-bg"
      style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)` }}>
      <h1>HSL Color Picker</h1>
      <input
        className="hue"
        type="range"
        min="0"
        max="100"
        value={hue}
        onChange={e => { setHue(e.target.value) }}
      />{' '}
      <p>Hue: {hue}</p>
      <input
        className="saturation"
        type="range"
        min="0"
        max="100"
        value={saturation}
        onChange={e => { setSaturation(e.target.value) }}
      />{' '}
      <p>Saturation: {saturation}</p>
      <input
        className="lightness"
        type="range"
        min="0"
        max="100"
        value={lightness}
        onChange={e => { setLightness(e.target.value) }}
      />{' '}
      <p>Lightness: {lightness}</p>
      <button onClick={() => { RandomColor() }}>
        Random color!
      </button>
    </main>

  );
}

export default Color;


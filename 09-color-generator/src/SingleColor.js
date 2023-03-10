import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState('');
  let rgbColor = rgb.join(',');
  let hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    }
  }, [alert])

  return <article onClick={() => {
    navigator.clipboard.writeText(hexValue);
    setAlert(true)
  }} className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${rgbColor})` }}>
    <p className="percent-value" >{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {
      alert && (
        <p className="alert">Copied To Clipboard</p>
      )
    }
  </article>
}

export default SingleColor

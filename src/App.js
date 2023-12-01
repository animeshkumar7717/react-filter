import { useState } from "react";
import img from './flower.jpg'
import Anoucement from "./anoucement";
import Navbar from "./navbar";

const App = () => {
  const[brightness, setBrightness] = useState({
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })
  const[contrast, setContrast] = useState({
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })
  const[hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  })
  const[saturation, setSaturation] = useState({
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })
  const[grayscale, setGrayscale] = useState({
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  })
  const[sepia, setSepia] = useState({
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: '%'
  })
  const[blur, setBlur] = useState({
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  })

  const[background, setBackground] = useState(img)
  return (
    <div>
      <Anoucement />
      <Navbar background={setBackground} />
      <div className="wrapper">
        <div className="image-wrapper">
          <div className="image">
            <img src={background} alt='name' style={{filter: `${brightness.property}(${brightness.value}${brightness.unit})
            ${blur.property}(${blur.value}${blur.unit})
            ${saturation.property}(${saturation.value}${saturation.unit})
            ${grayscale.property}(${grayscale.value}${grayscale.unit})
            ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})
            ${sepia.property}(${sepia.value}${sepia.unit})
            ${contrast.property}(${contrast.value}${contrast.unit})
            `}} 
            />
          </div>
        </div>
        <div className="options">
          <div className="mode">
            <span>Brightness</span>
            <input type="range" max={brightness.range.max} min={brightness.range.min} onChange={(e)=>{setBrightness({...brightness, value: `${e.target.value}`})}} />
            <span>Blur</span>
            <input type="range" max={blur.range.max} min={blur.range.min} onChange={(e)=>{setBlur({...blur, value: `${e.target.value}`})}} />
          </div>
          <div className="mode">
            <span>saturation</span>
            <input type="range" max={saturation.range.max} min={saturation.range.min} onChange={(e)=>{setSaturation({...saturation, value: `${e.target.value}`})}} />
            <span>grayscale</span>
            <input type="range" max={grayscale.range.max} min={grayscale.range.min} onChange={(e)=>{setGrayscale({...grayscale, value: `${e.target.value}`})}} />
          </div>
          <div className="mode">
            <span>sepia</span>
            <input type="range" max={sepia.range.max} min={sepia.range.min} onChange={(e)=>{setSepia({...sepia, value: `${e.target.value}`})}} />
            <span>hueRotate</span>
            <input type="range" max={hueRotate.range.max} min={hueRotate.range.min} onChange={(e)=>{setHueRotate({...hueRotate, value: `${e.target.value}`})}} />
          </div>
          <div className="mode contrast">
            <span>contrast</span>
            <input type="range" max={contrast.range.max} min={contrast.range.min} onChange={(e)=>{setContrast({...contrast, value: `${e.target.value}`})}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

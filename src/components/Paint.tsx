import './Paint.css'
import { PaintDbItem } from './PaintDb';
import { CSSProperties } from 'react';
import { getTextColorForPaint } from '../utils/get-text-color-for-paint';


const paintType = {
  'contrast': '#F3901C',
  'base': '#e00000',
  'shade': '#8dba63',
  'layer': '#79ade3',
  'technical': '#777777',
  'dry': '#d000a0',
  'basing': '#b75d10',
  'auxilliary': '#e3e3e3',
  'air': '#a9c5fa',
}

export function Paint({paint} : {paint: PaintDbItem}) {

  const sectionName = paint.type;

  let spanStyle: CSSProperties = {
    color: getTextColorForPaint(paint.hex2 ?? paint.hex),
    backgroundColor: paint.hex,
  }

  if (paint.hex2) {
    spanStyle['backgroundImage'] = `radial-gradient(${paint.hex2}, ${paint.hex})`
  }


  if (paint.image) {
    spanStyle = {
      ...spanStyle,
      backgroundColor: paint.hex,
      backgroundImage: `url("http://citadel.onemaggie.com/img/${paint.image}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '200px 200px',
      backgroundPosition: '35%',
    }
  }

  const paintTypeSpanStyle: CSSProperties = {
    backgroundColor: paintType[sectionName],
  }


  return <div className={'print paintTypeLi'}>
    <span style={spanStyle} className={`print paintLabel ${paint.gloss ? 'gloss' : ''}`}>{paint.name.toUpperCase()}</span>
    <span style={paintTypeSpanStyle} className={'paintTypeLabel'}>{sectionName.toUpperCase()}</span>
  </div>
}

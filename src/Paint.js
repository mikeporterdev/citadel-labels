import './Paint.css'

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.399) + (g * 0.487) + (b * 0.114)) > 160) ?
        darkColor : lightColor;
}

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

export function Paint(props) {

    let liStyle = {
        position: 'relative',
        margin: '0',
        border: '1px solid black'
    }

    let paint = props.paint;
    let sectionName = props.sectionName;

    let spanStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: paint.hex,
        display: 'flex',
        width: '32mm',
        height: '7mm',
        fontSize: '11px',
        padding: '0 18%',
        lineHeight: '.9',
        fontFamily: 'Paint',
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        color: pickTextColorBasedOnBgColorSimple(paint.hex2 ?? paint.hex, '#ffffff', '#000000')
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

    let span2Style = {
        height: '3mm',
        fontSize: '10px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: paintType[sectionName],
        display: 'flex',
        width: '32mm',
        padding: '0 18%',
        lineHeight: '.9',
        fontFamily: 'Paint',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
    }


    return (<div className={'print'} style={liStyle}><span style={spanStyle} className={`print ${paint.gloss ? 'gloss' : ''}`}>{paint.name.toUpperCase()}</span><span style={span2Style}>{sectionName.toUpperCase()}</span></div>)
}

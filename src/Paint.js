function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
        darkColor : lightColor;
}

const paintType = {
    'contrast': '#F3901C',
    'base': '#e00000',
    'shade': '#5fb310',
    'layer': '#1d73c8',
    'technical': '#777777',
    'dry': '#482301',
    'air': '#fff',
}

export function Paint(props) {

    const divStyle = {
        position: 'relative',
        margin: '1px'
    }

    let spanStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.paint.hex,
        display: 'flex',
        width: '32mm',
        height: '10mm',
        fontSize: '15px',
        padding: '0 18%',
        lineHeight: '.9',
        fontFamily: 'Paint',
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        color: pickTextColorBasedOnBgColorSimple(props.paint.hex, '#ffffff', '#000000')
    }

    if (props.paint.hex2) {
        spanStyle['backgroundImage'] = `radial-gradient(${props.paint.hex2}, ${props.paint.hex})`
    }


    if (props.paint.image) {
        console.log(props.paint.image)
        spanStyle = {
            ...spanStyle,
            backgroundColor: props.paint.hex,
            backgroundImage: `url("http://citadel.onemaggie.com/img/${props.paint.image}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100px 100px',
            backgroundPosition: '50%',
        }
    }

    let span2Style = {
        height: '3mm',
        fontSize: '10px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: paintType[props.sectionName],
        display: 'flex',
        width: '32mm',
        padding: '0 18%',
        lineHeight: '.9',
        fontFamily: 'Paint',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
    }


    return (<li style={divStyle}><span style={spanStyle}>{props.paint.name.toUpperCase()}</span><span style={span2Style}>{props.sectionName.toUpperCase()}</span></li>)
}

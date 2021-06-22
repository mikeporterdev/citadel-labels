import {Paint} from "./Paint";
import './Section.css'
export function Section(props) {

    let paints = props.paints;

    const sortedPaints = paints.map((paint, i) => {
        // Convert to HSL and keep track of original indices
        let c = hexToRgb(paint.hex);
        return {color: rgbToHsl(c), index: i};
    }).sort(function (c1, c2) {
        if (paints[c1.index].metallic && !paints[c2.index].metallic) {
            return 1;
        }
        if (!paints[c1.index].metallic && paints[c2.index].metallic) {
            return -1;
        }

        // Sort by hue
        return c1.color[0] - c2.color[0];
    }).map(function (data) {
        // Retrieve original RGB color
        return paints[data.index];
    });

    return (
        <div>
            <h2>{props.sectionName} [{props.paints.length}]</h2>
            <ul className={'section' }>
                {
                    sortedPaints.map(paint => {
                        return (<Paint key={paint.name} paint={paint} sectionName={props.sectionName}/>)
                    })
                }
            </ul>
        </div>
    )
}

function rgbToHsl(c) {
    console.log(c[0])
    let r = c[0] / 255, g = c[1] / 255, b = c[2] / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h * 360, s * 100, l * 100];
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] :
        null;
}

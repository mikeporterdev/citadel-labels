export function getTextColorForPaint(bgColor: string, lightColor = '#ffffff', darkColor = '#000000') {
  const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;

  const [r, g, b] = splitStringIntoRgbValues(color)

  // Magic formula copy pasted from Stack Overflow. I do not know how it works but I like the results.
  return (((r * 0.399) + (g * 0.487) + (b * 0.114)) > 160) ?
    darkColor : lightColor;
}

function splitStringIntoRgbValues(color: string): [number, number, number] {
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return [r, g, b]
}
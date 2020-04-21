export const setCanvasText = (canvas, text, theme) => {
  const ctx = canvas.getContext('2d')
  const x = canvas.width/2
  const y = canvas.height/2
  const {family, size, color} = theme
  ctx.font = `${size}px ${family}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, x, y)
}

export const fontFamilyList = [
  'Arial, sans-serif',
  'Courier, serif',
  'Times New Roman, serif',
  'Impact, sans-serif',
  '궁서, serif',
  '돋움, sans-serif',
  '바탕, sans-serif'
]
export const fontSizeList = [20, 30, 40, 50, 60, 70, 80, 90, 100, 120]

// 16777215 === ffffff
export const randomHexColor = () => `${Math.floor(Math.random() * 16777215).toString(16)}`

export const getContrast = (color) => {
  const r = parseInt(color.substr(0, 2), 16)
  const g = parseInt(color.substr(2, 2), 16)
  const b = parseInt(color.substr(4, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 220 ? '#000000' : '#ffffff'
}
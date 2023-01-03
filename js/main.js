const imageInput = document.getElementById('inputGroupFile02')
const brightnessInput = document.getElementById('brightness')
const saturationInput = document.getElementById('saturation')
const blurInput = document.getElementById('blur')
const inversionInput = document.getElementById('inversion')
const contrastInput = document.getElementById('contrast')
const grayscaleInput = document.getElementById('grayscale')
const hueRotateInput = document.getElementById('hue-rotate')
const sepiaInput = document.getElementById('sepia')
const rotateInput = document.getElementById('rotate')

const resetBtn = document.getElementById('reset')
const deleteBtn = document.getElementById('delete')
const downloadBtn = document.getElementById('download')

const link = document.querySelector('#link')
const imgSrc = document.querySelector('.imgSrc')

const spinner = document.querySelector('.text-center')

const canvas = document.getElementById('canvas')
const canvasCtx = canvas.getContext('2d')

const settings = {}
let image = null

resetBtn.addEventListener('click', resetCanvas)
deleteBtn.addEventListener('click', clearCanvas)
downloadBtn.addEventListener('click', downloadCanvas)

resetSettings()

// Canvas drawImage 
image = new Image();
image.addEventListener("load", function () {
  resetSettings()
  spinner.hidden = true
  canvas.width = image.width
  canvas.height = image.height
  renderImage()
}, false)
image.src = 'https://picsum.photos/1200/600'
image.crossOrigin = "anonymous"

function changeSettings(key, value) {
  if (!image) return

  settings[key] = value;
  renderImage()
}

brightnessInput.addEventListener("change", () => changeSettings('brightness', brightnessInput.value))
saturationInput.addEventListener("change", () => changeSettings('saturation', saturationInput.value))
blurInput.addEventListener("change", () => changeSettings('blur', blurInput.value))
inversionInput.addEventListener("change", () => changeSettings('inversion', inversionInput.value))
contrastInput.addEventListener("change", () => changeSettings('contrast', contrastInput.value))
grayscaleInput.addEventListener("change", () => changeSettings('grayscale', grayscaleInput.value))
hueRotateInput.addEventListener("change", () => changeSettings('hueRotate', hueRotateInput.value))
sepiaInput.addEventListener("change", () => changeSettings('sepia', sepiaInput.value))
rotateInput.addEventListener("click", rotateImg)

imageInput.addEventListener("change", () => {
  image = new Image()

  image.src = URL.createObjectURL(imageInput.files[0])

  image.addEventListener("load", () => {
    resetSettings()
    canvas.width = image.width
    canvas.height = image.height
    renderImage()
  });
})

function renderImage() {
  // canvas.width = image.width
  // canvas.height = image.height

  canvasCtx.filter = generateFilter()
  canvasCtx.drawImage(image, 0, 0)
}

function resetSettings() {
  settings.brightness = "100"
  settings.saturation = "100"
  settings.blur = "0"
  settings.inversion = "0"
  settings.contrast = "100"
  settings.grayscale = "0"
  settings.hueRotate = "0"
  settings.sepia = "0"

  brightnessInput.value = settings.brightness
  saturationInput.value = settings.saturation
  blurInput.value = settings.blur
  inversionInput.value = settings.inversion
  contrastInput.value = settings.contrast
  grayscaleInput.value = settings.grayscale
  hueRotateInput.value = settings.hueRotate
  sepiaInput.value = settings.sepia

}

function generateFilter() {
  const { brightness, saturation, blur, inversion, contrast, grayscale, hueRotate, sepia } = settings

  return `brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) sepia(${sepia}%)`
}

function resetCanvas() {
  canvas.width = image.width
  canvas.height = image.height
  canvasCtx.drawImage(image, 0, 0)
  resetSettings()
}

function clearCanvas() {
  const canvasCtx = canvas.getContext("2d");
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  resetSettings()
}

function downloadCanvas() {
  let filename = 'newImg'
  let e
  const link = document.createElement("a")
  link.download = filename
  link.href = canvas.toDataURL("image/png", 1.0)
  e = new MouseEvent("click")
  link.dispatchEvent(e)
}

//presets

const effects = document.querySelector('#effects')
const presets = document.querySelector('#presets')
const settingsTb = document.querySelector('#settings')

const effectsToolbar = document.querySelector('#effects-toolbar')
const presetsToolbar = document.querySelector('#presets-toolbar')
const settingsToolbar = document.querySelector('#settings-toolbar')

effectsToolbar.hidden = false
presetsToolbar.hidden = true
settingsToolbar.hidden = true

effects.onclick = () => {
  effectsToolbar.hidden = false
  presetsToolbar.hidden = true
  settingsToolbar.hidden = true
}

presets.onclick = () => {
  effectsToolbar.hidden = true
  presetsToolbar.hidden = false
  settingsToolbar.hidden = true
}

settingsTb.onclick = () => {
  effectsToolbar.hidden = true
  presetsToolbar.hidden = true
  settingsToolbar.hidden = false
}

const grayscale01 = document.querySelector('#grayscale01')
const smoke = document.querySelector('#smoke')
const brightNoon = document.querySelector('#bright-noon')
const modern = document.querySelector('#modern')
const vintage01 = document.querySelector('#vintage01')
const vintage02 = document.querySelector('#vintage02')
const vintage03 = document.querySelector('#vintage03')
const movie = document.querySelector('#movie')

grayscale01.addEventListener("click", () => doGrayscale01())
smoke.addEventListener("click", () => doSmoke())
brightNoon.addEventListener("click", () => doBrightNoon())
modern.addEventListener("click", () => doModern())
vintage01.addEventListener("click", () => doVintage01())
vintage02.addEventListener("click", () => doVintage02())
vintage03.addEventListener("click", () => doVintage03())
movie.addEventListener("click", () => doMovie())

function doGrayscale01() {
  resetSettings()
  settings.grayscale = 90;
  settings.contrast = 200;
  renderImage()
}

function doSmoke() {
  resetSettings()
  settings.brightness = 70;
  settings.saturation = 80;
  settings.grayscale = 30;
  settings.contrast = 70;
  renderImage()
}

function doBrightNoon() {
  resetSettings()
  settings.brightness = 120;
  settings.saturation = 150;
  settings.contrast = 160;
  renderImage()
}

function doModern() {
  resetSettings()
  settings.brightness = 80;
  settings.saturation = 150;
  settings.hueRotate = 35;
  renderImage()
}

function doVintage01() {
  resetSettings()
  settings.saturation = 190;
  settings.inversion = 20;
  renderImage()
}

function doVintage02() {
  resetSettings()
  settings.inversion = 15;
  settings.hueRotate = 25;
  renderImage()
}

function doVintage03() {
  resetSettings()
  settings.saturation = 30;
  settings.contrast = 190;
  settings.grayscale = 40;
  renderImage()
}

function doMovie() {
  resetSettings()
  settings.brightness = 70;
  settings.saturation = 55;
  settings.grayscale = 20;
  // settings.hueRotate = 80;
  renderImage()
}

//Rotate

function rotateImg() {

  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

  let e = (0.5 * canvas.width)
  let d = (0.5 * canvas.height)

  canvasCtx.translate(e, d)
  canvasCtx.rotate(Math.PI / 2)
  canvasCtx.translate(-e, -d)
  canvasCtx.filter = generateFilter();
  // [e, d] = [d, e]
  canvasCtx.drawImage(image, 0, 0)
}

//flip

const applyflip = document.querySelector('#applyHflip')
applyflip.addEventListener("click", () => applyflipH())

const applyflipV = document.querySelector('#applyVflip')
applyflipV.addEventListener("click", () => applyVflip())

function applyflipH() {
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  canvasCtx.translate(image.width, 0);
  canvasCtx.scale(-1, 1);
  generateFilter()
  canvasCtx.drawImage(image, 0, 0);
}

function applyVflip() {

  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  canvasCtx.translate(0, image.height);
  canvasCtx.scale(1, -1);

  generateFilter()
  canvasCtx.drawImage(image, 0, 0);
}

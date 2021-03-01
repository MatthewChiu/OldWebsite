'use strict'
function pushInput() {
    let pitchArrayInput = []
    let input = document.getElementById("pitch_input").value;
    pitchArrayInput.push(input)
    // console.log(pitchArrayInput)
    return pitchArrayInput
}


function retrieveLabels (someArray) {
    let dftComponents = [];
    for (let i=0; i<someArray.length; i++) {
        dftComponents.push(String(i));
    }
    return dftComponents
}

function dftCalculator(signal) {
    if (typeof signal != "undefined") {
      let N = signal.length
      let cardinality = signal.reduce((a,b) => a+b, 0)
      let mags = new Array(N)
      let phase = new Array(N)
      for (let k = 0; k < N/2; k++ ) {
        let scaled_sin = signal.map(function(x, n) { return x*Math.sin(2*Math.PI*n*k/N) })
        let imag = scaled_sin.reduce(function(corr, x) { return corr + x })
        phase[k] = imag
        let scaled_cos = signal.map(function(x, n) { return x*Math.cos(2*Math.PI*n*k/N) })
        let real = scaled_cos.reduce(function(corr, x) { return corr + x })
        mags[k] = Math.sqrt(real*real + imag*imag)/cardinality
        }
      return [mags, phase]    
      }
    else {
      let mags = [0]
      let phase = [0]
      return [mags, phase]
    }
  }

function updateDFTChartAfterInitialized (chart) {
  chart.clear();
  let tempData = dftCalculator(pushIntoArray(pushInput()));
  // chart.data.labels = retrieveLabels(tempData[0]);
  chart.data.datasets.forEach((dataset) => {
      dataset.data = tempData[0];
  });
  chart.update();
}




// ——————————————

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

function pushIntoArray (inputString) {
  if (typeof inputString == "undefined" || String(inputString).length < 1) {
    console.log("Not valid");
  }
  else if (String(inputString).length > 0) {
    let newInput = String(inputString);
    let pitchArray = newInput.split(" ").join("").split(",");
    let midiArray = [];
    for (let pitch of pitchArray) {
      if (isNumeric(pitch) == true) {
        midiArray.push(Number(pitch));
      } 
      else {
        let midiValue = parse(pitch);
        midiArray.push(Number(midiValue.midi)) }
      }

    let gridArray = new Array(256).fill(0);
    for (midi of midiArray) {
      gridArray[midi] += 1
    }
    // console.log(gridArray)
    
    return gridArray
    }
}


// let tempData = dftCalculator(pushIntoArray(pushInput()))



// ———————————————————————————————
// Parsing utilities
function fillStr (s, num) { return Array(num + 1).join(s) }
function isNum (x) { return typeof x === 'number' }
function isStr (x) { return typeof x === 'string' }
function isDef (x) { return typeof x !== 'undefined' }
function midiToFreq (midi, tuning) {
  return Math.pow(2, (midi - 69) / 12) * (tuning || 440)
}

function regex () { return REGEX }

function parse (str, isTonic, tuning) {
    let REGEX = /^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/  
    let SEMITONES = [0, 2, 4, 5, 7, 9, 11]
    if (typeof str !== 'string') return null

    let m = REGEX.exec(str)
    if (!m || (!isTonic && m[4])) return null
  
    let p = { letter: m[1].toUpperCase(), acc: m[2].replace(/x/g, '##') }
    p.pc = p.letter + p.acc
    p.step = (p.letter.charCodeAt(0) + 3) % 7
    p.alt = p.acc[0] === 'b' ? -p.acc.length : p.acc.length

    let pos = SEMITONES[p.step] + p.alt
    p.chroma = pos < 0 ? 12 + pos : pos % 12
    if (m[3]) { // has octave
      p.oct = +m[3]
      p.midi = pos + 12 * (p.oct + 1)
      p.freq = midiToFreq(p.midi, tuning)
    }
    if (isTonic) p.tonicOf = m[4]
    return p
  }

function accStr (n) { return !isNum(n) ? '' : n < 0 ? fillStr('b', -n) : fillStr('#', n) }
function octStr (n) { return !isNum(n) ? '' : '' + n }

function build (s, a, o) {
  let LETTERS = 'CDEFGAB'
  if (s === null || typeof s === 'undefined') return null
  if (s.step) return build(s.step, s.alt, s.oct)
  if (s < 0 || s > 6) return null
  return LETTERS.charAt(s) + accStr(a) + octStr(o)
  }

function midi (note) {
  if ((isNum(note) || isStr(note)) && note >= 0 && note < 128) return +note
  var p = parse(note)
  return p && isDef(p.midi) ? p.midi : null
}

function freq (note, tuning) {
    let m = midi(note)
    return m === null ? null : midiToFreq(m, tuning)
  }
  
function letter (src) { return (parse(src) || {}).letter }
function acc (src) { return (parse(src) || {}).acc }
function pc (src) { return (parse(src) || {}).pc }
function step (src) { return (parse(src) || {}).step }
function alt (src) { return (parse(src) || {}).alt }
function chroma (src) { return (parse(src) || {}).chroma }
function oct (src) { return (parse(src) || {}).oct }

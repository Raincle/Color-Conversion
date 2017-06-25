//删除数组指定元素
Array.prototype.remove = function (idx) {
  if (isNaN(idx) || idx > this.length) {
    return false;
  }
  　　for (var i = 0, n = 0; i < this.length; i++) {
    　　　　if (this[i] != this[idx]) {
      　　　　　　this[n++] = this[i]
    　　　　}
  　　}
  　　this.length -= 1;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, l];
}
function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToSixteen(r, g, b, a) {
  function formatSixteen(s) {
    if (s.length == 1) {
      s = "0" + s
    }
    return s
  }
  var rString = formatSixteen(parseInt(r).toString(16))
  var gString = formatSixteen(parseInt(g).toString(16))
  var bString = formatSixteen(parseInt(b).toString(16))
  var aString = formatSixteen(parseInt(a / 100 * 255).toString(16))
  
  return {color: rString + gString + bString ,a: aString }
}

function colorGenerator() {
  var time = new Date()
  var r = Math.floor(time.getMinutes() / 60 * 255)
  var g = Math.floor(time.getSeconds() / 60 * 255)
  var b = Math.floor(time.getMilliseconds() / 1000 * 255)
  return {r:r, g:g, b:b}
}

function sixteenToRgba(sixteen, a) {
  var r = parseInt(sixteen[0] + sixteen[1], 16)
  var g = parseInt(sixteen[2] + sixteen[3], 16)
  var b = parseInt(sixteen[4] + sixteen[5], 16)
  var a = Math.floor(parseInt(a, 16) / 255 * 100)
    return {r: r, g: g, b: b, a: a}
}

module.exports = {
  shuffleArray: shuffleArray,
  sixteenToRgba: sixteenToRgba,
  rgbToSixteen: rgbToSixteen,
  rgbToHsl: rgbToHsl,
  hslToRgb: hslToRgb,
  colorGenerator: colorGenerator
}

inlets  = 3;
outlets = 2;

// ––––––––––––––––––––––––––––––––– \\

var DELTA   = 1.45;          // percent of change per unit
var MAX_KPH = 100;           // range of the "speedometer"
var STEP    = 127 / MAX_KPH; // the number of MIDI "ticks" per unit


// "parse" the input
function msg_float (num) {

  inlet === 0
    ? modulate(num)
    : inlet === 1
      ? this.DELTA   = num
      : this.MAX_KPH = num;

  // samesame but different
  // if (inlet === 0) {
  //   modulate(num);
  // }
  //
  // if (inlet === 1) {
  //   this.DELTA = num;
  // }
  //
  // if (inlet === 3) {
  //   this.MAX_KPH = num;
  // }
}

// modulate the input number
function modulate (num) {

  var _normToMaxKPH = num / this.STEP;

  // round the float to nearest integer
  var normToMaxKPH = (_normToMaxKPH % 1 > 0.5)
    ? _normToMaxKPH - (_normToMaxKPH % 1)
    : _normToMaxKPH + (1 - _normToMaxKPH % 1):

  outlet(0, deltaSpeedPercentage); // output to pitch-bend module
  outlet(1, normToMaxKPH);         // output to "speedometer"
}

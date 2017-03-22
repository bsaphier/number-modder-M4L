inlets  = 3;
outlets = 2;

// ––––––––––––––––––––––––––––––––– \\

var DELTA   = 1.45 / 100;    // percent of change per unit
var MAX_KPH = 30;            // range of the "speedometer"
var STEP    = 128 / MAX_KPH; // the number of MIDI "ticks" per unit

var prevNormToMaxKPH;


// "parse" the input
function msg_float (num) {

  if (inlet === 0) {
    modulate(num);
  }

  if (inlet === 1) {
    this.DELTA = num / 100;
  }

  if (inlet === 2) {
    this.MAX_KPH = num;
  }
}


// modulate the input number
function modulate (num) {

  var _normalToMaxKPH = num / this.STEP;

  // round the float to nearest integer
  var normalToMaxKPH = _normalToMaxKPH % 1 === 0
                        ? _normalToMaxKPH
                        : _normalToMaxKPH % 1 > 0.5
                          ? _normalToMaxKPH + (1 - _normalToMaxKPH % 1)
                          : _normalToMaxKPH - (_normalToMaxKPH % 1);

  var deltaSpeedPercentage = normalToMaxKPH * DELTA;

  outlet(0, deltaSpeedPercentage);    // output to pitch-bend module

  // check if the unit has changed
  if (this.prevNormToMaxKPH !== normalToMaxKPH) {
    this.prevNormToMaxKPH = normalToMaxKPH;
    outlet(1, normalToMaxKPH);        // output to "speedometer"
  }
}

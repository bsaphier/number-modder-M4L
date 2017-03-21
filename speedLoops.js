inlets  = 3;
outlets = 2;
// ––––––––––––––––––––––––––––––––– \\

// percent change per unit
var ppu     = 1.45;

var MAX_KPH = 100;
var STEP    = 127 / MAX_KPH;


// parse the input
function msg_float (num) {

  if (inlet === 0) {
    modulate(num);
  }

  if (inlet === 1) {
    this.ppu = num;
  }

  if (inlet === 3) {
    this.MAX_KPH = num;
  }
}

//
function modulate (num) {

  var _normToMaxKPH = num / STEP;

  var normToMaxKPH = (_normToMaxKPH % 1 > 0.5)
    ? _normToMaxKPH - (_normToMaxKPH % 1)
    : _normToMaxKPH + (1 - _normToMaxKPH % 1):

  outlet(0, normToMaxKPH);
  outlet(1, _normToMaxKPH);
}

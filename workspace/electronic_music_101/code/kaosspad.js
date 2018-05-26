inlets = 2;
outlets = 2;

var state_x = 0;
var state_y = 0;

function msg_int(x) {
	if (inlet == 0) {
		if (x < 0) state_x = 0;
		else if (x > 640) state_x = 640;
		else state_x = x;
	}
	else if (inlet == 1) {
		if (x < 0) state_y = 0;
		else if (x > 320) state_y = 320;
		else state_y = x;
	}
	outlet(0, state_x);
	outlet(1, 320 - state_y);
}
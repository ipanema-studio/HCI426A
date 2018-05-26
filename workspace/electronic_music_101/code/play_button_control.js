inlets = 2;
outlets = 2;

/*
 * inlet #0 = screen control
 * inlet #1 = toggle
 * outlet #0 = play button control
 * outlet #1 = stop button control
*/

var state = 1;

function msg_int(x) {
	if (inlet == 0) {
		if (state == 1 && x == 0) {
			outlet(0, 0);
		}
		state = x;
	}
	if (state == 0) {
		if (inlet == 1) {
			if (x == 0) {
				outlet(0, 0);
				outlet(1, 1);
			}
			else {
				outlet(0, 1);
				outlet(1, 0);
			}
		}
	}
	else {
		outlet(0, 1);
		outlet(1, 1);
	}
}
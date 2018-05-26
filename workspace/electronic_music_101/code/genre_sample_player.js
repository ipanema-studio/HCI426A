inlets = 5;
outlets = 3;

/*
 * inlet #0 = screen control
 * inlet #1 = stop button
 * inlet #2 = play button 1
 * inlet #3 = play button 2
 * inlet #4 = play button 3
 * outlet #0 = player 1
 * outlet #1 = player 2
 * outlet #2 = player 3
**/

var state = 1;

function msg_int(x) {
	if (inlet == 0) {
		state = x;
	}
	if (state == 0) {
		if (inlet == 1 && x == 1) {
			outlet(0, 0);
			outlet(1, 0);
			outlet(2, 0);
		}
		if (inlet == 2 && x == 1) {
			outlet(0, 1);
			outlet(1, 0);
			outlet(2, 0);
		}
		if (inlet == 3 && x == 1) {
			outlet(0, 0);
			outlet(1, 1);
			outlet(2, 0);
		}
		if (inlet == 4 && x == 1) {
			outlet(0, 0);
			outlet(1, 0);
			outlet(2, 1);
		}
	}
}
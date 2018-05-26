inlets = 1;
outlets = 2;

function msg_int(x) {
	if (x == 0) {
		outlet(0, 0);
		outlet(1, 0);
	}
	else {
		outlet(1, 1);
		outlet(0, 1);
	}
}
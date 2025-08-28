autowatch = 1;

function msg_float(x) {
	outlet(0, ((x % 1) + 1) % 1);
}
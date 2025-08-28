autowatch=1

// FOLD
//function msg_float(origVal) {
//	var val = origVal % 1;
//	if (origVal !== 0 && val === 0) {
//		post('here\n');
//		val = 1.0;
//	} else if (origVal > 1) {
//		val = 1 - val;
//	} else if (origVal < 0) {
//		val = -1 * val;
//	}
//	outlet(0, val);
//}

function msg_float(x) {
  // Take the positive modulus with 2
  var mod = ((x % 2) + 2) % 2;
  // Reflect if greater than 1
  outlet(0, mod <= 1 ? mod : 2 - mod);
}
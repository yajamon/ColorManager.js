/**
 * Using Gists
 *   isDefined.js
 *     https://gist.github.com/yajamon/7761362
 */
function zeroFill (value, range) {
	if (!isDefined(value)){
		throw new Error('arg1:value is undefined');
	}
	if (!isDefined(range)){
		throw new Error('arg2:range is undefined');
	}

	range = parseInt(range,10);
	if (isNaN(range)) {
		throw new TypeError('arg2:range is not number');
	}
	if (0 > range) {
		throw new RangeError('arg2:range accepts an integer of 0 or more');
	}

	var part = "";
	for(var count=0; count<range; ++count){
		part += "0";
	}

	return (part+value).slice(-range);
}
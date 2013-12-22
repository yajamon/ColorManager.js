var ColorManager = function () {
	this._red   = 0;
	this._green = 0;
	this._blue  = 0;
};
ColorManager.prototype = {
	validationColorValue: function (value){
		if (!isDefined(value)) {throw new Error('value is undefined');}

		value = parseInt(value,10);
		if (isNaN(value)) {
			throw new TypeError('value is NaN');
		}
		if (value < 0 || 255 < value) {
			throw new RangeError('value is invalid');
		}
		return true;
	},
	get red(){
		return this._red;
	},
	set red(value){
		if (this.validationColorValue(value)) {
			this._red = parseInt(value, 10);
		}
	},

	get green(){
		return this._green;
	},
	set green(value){
		if (this.validationColorValue(value)) {
			this._green = parseInt(value, 10);
		}
	},

	get blue(){
		return this._blue;
	},
	set blue(value){
		if (this.validationColorValue(value)) {
			this._blue = parseInt(value, 10);
		}
	},

	get colorCode() {
		var r,g,b;
		r = zeroFill(this.red.toString(16),   2);
		g = zeroFill(this.green.toString(16), 2);
		b = zeroFill(this.blue.toString(16),  2);
		return '#'+r+g+b;
	},
	set colorCode(ColorCode) {
		if (!isDefined(ColorCode)) {throw new Error('value is undefined');}

		var r,g,b;

		// check
		if (ColorCode.search(/^#[0-9a-fA-F]{6}$/) != -1) {
			// match #xxxxxx
			r = ColorCode.slice(1, 3);
			g = ColorCode.slice(3, 5);
			b = ColorCode.slice(5, 7);

		}else if(ColorCode.search(/^#[0-9a-fA-F]{3}$/) != -1) {
			// match #xxx
			r = ColorCode.slice(1, 2);
			g = ColorCode.slice(2, 3);
			b = ColorCode.slice(3, 4);
			r += r;
			g += g;
			b += b;

		}else{
			// no match
			throw new Error('value is not ColorCode');
		}

		this.setColor(
			parseInt(r, 16),
			parseInt(g, 16),
			parseInt(b, 16)
		);
	},
	setColor: function(r, g, b){
		if (!isDefined(r)) {throw new Error('r:value is undefined');}
		if (!isDefined(g)) {throw new Error('g:value is undefined');}
		if (!isDefined(b)) {throw new Error('b:value is undefined');}

		this.red   = r;
		this.green = g;
		this.blue  = b;
	},

	getRandomColorValue: function(){
		return Math.floor(Math.random()*256);
	},

	setRandomColor: function(){
		var r,g,b;
		r = this.getRandomColorValue();
		g = this.getRandomColorValue();
		b = this.getRandomColorValue();

		this.setColor(r, g, b);
	},
};
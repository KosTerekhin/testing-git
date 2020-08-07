class MathFnc {
	constructor() {}

	add(a, b) {
		return a + b;
	}

	deduct(a, b) {
		return a - b;
	}
	multiply(a, b) {
		return a * b;
	}
}

const calc = new MathFnc();

console.log(calc.add(5, 10));
console.log(calc.deduct(20, 13.5));
console.log(calc.multiply(5, 10));

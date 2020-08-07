class MathFnc {
	constructor() {}

	add(a, b) {
		return a + b;
	}

	multiply(a, b) {
		return a * b;
	}
}

const calc = new MathFnc();

console.log(calc.add(5, 10));
console.log(calc.multiply(5, 10));

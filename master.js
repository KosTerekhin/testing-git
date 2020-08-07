class MathFnc {
	constructor() {}

	add(a, b) {
		return a + b;
	}

	deduct(a, b) {
		return b - a;
	}
}

const calc = new MathFnc();

console.log(calc.add(5, 10));
console.log(calc.deduct(10, 5));

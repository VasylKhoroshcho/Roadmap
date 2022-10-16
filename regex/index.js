// на вході: "1+2+3"
// на виході: 6

const yourShortFunction = params => (h=p=>p.split('+').reduce((i,s)=>+s+i,0),r=(w)=>w.replace(/sqrt\(((\d*[.]?\d+\s?\+?\s?)+)\)/g,(a,b)=>Math.sqrt(/\+/.test(b)?h(b):b)),/\+$|a|\d-|{/.test(x=params)?0:h(r(r(x))).toFixed(2))

/*
простий приклад =>

  якщо на вході:
      "1+2+3+sqrt(4)"
      тобто потрібно додати 4 числа

  очікується на виході:
      8

  у випадку некоректного виразу очікується "0" на виході.
  можливо операції лише "+" (додавання) та "sqrt" (квадратний корінь).
  можливі від'ємні числа.
  виводити тільки 2 числа після коми.


*/

const test = () => {
  random = (min, max) => Math.floor(Math.random() * (max - min) + min)
  tests = [
    {input: "1+2+3"},
    {input: "1+"},
    {input: "1+a"},
    {input: "1 + 2 + -3"},
    {input: "-1  +  -10"},
    {input: "-01 + 0-10"}, // an "0-10" is incorrect statement
    {input: "10000000000+1"},
    {input: "1+sqrt(2)"},
    {input: "sqrt(sqrt(2 + 1))"},
    {input: "sqrt(sqrt(3) + sqrt(3 + 1))"},
    {input: random(-9,9) + "+" + random(-9,9) + "+" + random(-9,9)},
    {input: random(-9,9) + "+sqrt(" + random(0,9) + ")+" + random(-9,9)},
    {input: "0 || for(;;){}"},
    {input: "white(true){} || 0"},
  ];

  for (let i = 0; i < tests.length; i++) {
    const test = tests[i].input;

    const expected = longCorrectSolutionFunction(test);
    const actual = yourShortFunction(test);

    // console.log(expected,actual)

    if (expected !== actual) {
      console.log([
        `test #${i+1} not passed: input '${test}', `,
        `expected '${expected}', actual '${actual}'`
      ].join(''));
      break;
    }
  }

}

test();

//

function longCorrectSolutionFunction(input) {
  const inputWithoutSqrt = input.replace(/sqrt/g, '').replace(/[\(\)\s]/g, '');

  const parts = inputWithoutSqrt.split('+');
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!/^[\-]?[0-9]+$/.test(part)) {
       return 0;
    }
  }

  let sum = 0;
  let formula = input;

  const calculateAddition = (s) => {
    let addSum = 0;
    const parts = s.split('+');

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      addSum += parseFloat(part);
    }

    return addSum;
  }

  while (formula.indexOf('sqrt') !== -1) {
    const numRegExp = /sqrt\(([\d\.\s\+\-]*)\)/;

    formula = formula.replace(numRegExp, (a,p) => {
      const add = calculateAddition(p);
      return add > 0 ? Math.sqrt(add) : 0;
    });
  }

  formula = calculateAddition(formula);

  return parseFloat(formula).toFixed(2);
}

// 1
function add(num1 = 0, num2 = 0, num3 = 0) {
  const result = num1 + num2 + num3;
  return result;
}

// const sum = add(10, 10, 10);
// console.log(sum);

// const sum1 = add(10, 10);
// console.log(sum1);

// const sum2 = add(10);
// console.log(sum2);

// const sum3 = add();
// console.log(sum3);

// 2
function TkJoma(tk = 50) {
  return tk;
}

// const joma = TkJoma(100000);
// console.log(joma);

// const joma1 = TkJoma();
// console.log(joma1);

// 3
function info(name = "anonymous", salary = 0) {
  return `My name is ${name} and i earn ${salary}.`;
}

x = info("shiam", 1000);
console.log(x);
console.log(info());

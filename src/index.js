module.exports = function zeros(expression) {
  let factorials = expression.split('*');
  let twoMultiply = 0;
  let fiveMultiply = 0;
  for (let i = 0; i < factorials.length; i++) {
    if (factorials[i].includes('!!')) {
      let item = factorials[i].slice(0,-2);
      for (let f = 5; f <= item; f *= 5) {
        if (item % 2 != 0) {
          fiveMultiply += Math.ceil(Math.trunc(item / f) / 2);
        } else {
          fiveMultiply += Math.trunc(Math.trunc(item / f) / 2);
        }
      }
      for (let f = 2; f <= item; f *= 2) {
        if (item % 2 == 0) {
          twoMultiply += Math.trunc(item / 2);
        }
      }
    } else {
      let item = factorials[i].slice(0,-1);
      for (let f = 2; f <= item; f *= 2) {
        twoMultiply += Math.trunc(item / f);
      }
      for (let f = 5; f <= item; f *= 5) {
        fiveMultiply += Math.trunc(item / f);
      }
    }
  }
  return fiveMultiply > twoMultiply ? twoMultiply : fiveMultiply;
}

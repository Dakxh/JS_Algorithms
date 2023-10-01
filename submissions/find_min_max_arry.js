//How To find max/min in a given array in javascript
const arrNumber = [2, 5, 8, 99, 6];
const maxFucntion = (arr) => {
  return arr.reduce(function (pre, cur) {
    return pre < cur ? pre : cur;
  });
};
console.log(maxFucntion(arrNumber));

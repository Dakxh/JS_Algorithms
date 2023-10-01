//How To find duplicate elements in array

const arrNumber = [1, 2, 5, 6, 2, 5];
const duplicate = arrNumber.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
console.log(duplicate);

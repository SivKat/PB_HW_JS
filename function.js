/* 1. Реализовать методы массива:
map*/
function map (arr, fn) {
   fn = arr.map(function (elem) {
   return elem * 2;
});
   console.log(fn);
}
// вызов для примера
map([1,2,3,4,5]); 


// 2. filter
function filter (arr, fn) {
   fn = arr.filter(function (elem) {
      return elem % 2;
   });
   console.log(fn);
}
//вызов для примера
filter([1,2,3,4,6]); 


// 3. some
function some (arr, fn) {
   fn = arr.some(function (elem) {
      return elem > 0;
   });
   console.log(fn);
}
//вызов для примера
some([-1,-2,-3,-4,5]); // будет true если хотя бы одно значение положительное

// 4. every
function every (arr, fn) {
   fn = arr.every(function (elem) {
      return elem > 0;
   });
   console.log(fn);
}
//вызов для примера
every([-1,2,3,4,5]);// будет false, т.к не все положительные

// 5. Reduce
function reduce (arr, fn) {
   fn = arr.reduce(function(multiply, elem) {
      return multiply * elem; // произведение всех элементов
   });
   console.log(fn);
}
//вызов для примера
reduce([1,2,3,4,5]);
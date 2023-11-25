// У всіх завданнях користуватися методами обходу масивів

// 1. Дан наступний масив ['test', false, 2345, null]
// Зробити масив, елементи якого будуть рядками, зробленими за наступним шаблоном : Item with index X has value Y
// де X - індекс елемента у масиві, Y - значення елементу

// 2. Дан масив, який складається з наступних об'єктів
// {firstName: "Test’, lastName: ’Testovich’, age: 27, gender: "male’,}
// {firstName: "User’, lastName: ’Userenko’, age: 12, gender: ‘male’,}
// {firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,}
// {firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}
// {firstName: ‘Undefined’, lastName: ’Undefined’, age: 99}
// {firstName: ‘Null’, lastName: ’Nullochyk’, gender: ‘male’} 

// Отримати на його основі масив повнолітніх користувачів

// 3. Дан масив, який складається з наступних об'єктів
// {firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}
// {firstName: ‘User’, lastName: ’Userenko’, age: 12, gender: ‘male’,}
// {firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,}
// {firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}
// {firstName: ‘Undefined’, lastName: ’Undefined’, age: 99}
// {firstName: ‘Null’, lastName: ’Nullochyk’, gender: ‘male’} 

// Знайти індекс першої жінки у массиві


// 1.
const arr = ['test', false, 2345, null];

const mapResult = arr.map(function(element, ind){
  return("Item with index " + ind + " has value " + element);
})
console.log(mapResult);

// 2.
const arr2 = [{firstName: "Test", lastName: "Testovich", age: 27, gender: "male",},
  {firstName: "User", lastName: "Userenko", age: 12, gender: "male",},
  {firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female",},
  {firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female",},
  {firstName: "Undefined", lastName: "Undefined", age: 99},
  {firstName: "Null", lastName: "Nullochyk", gender: "male"} ]



const filterResult = arr2.filter(function(user){
  return user.age >= 18
})
console.log(filterResult);

// 3.
const someResult = arr2.findIndex(function(user){
  return user.gender === "female"
})

console.log(someResult);
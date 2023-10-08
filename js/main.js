const students = [
  { name: 'Ivan', age: 20 },
  { name: 'Petro', age: 30 },
  { name: 'Yulia', age: 25 },
  { name: 'Tanya', age: 27 },
  { name: 'Tanya', age: 30 },
  { name: 'Vasya', age: 20 },
];

console.log('students', students);

let students2 = students;
console.log('students2', students2);

const res2 = delItem(
  students2,
  function(student2) {
      console.log(`Функція 3 - массив без елементів`);
    return student2.age === 30;
  }
);

console.log(res2);

function delItem(arr, callback) {

  let arrRes2 = arr;
  console.log(`arrRes2`,arrRes2);

  for (let i = 0; i < arr.length; i++) {
    let student2 = arr[i];
    if (callback(student2, i)) {
      arrRes2.splice(i,1);

    }
  }
  return arrRes2;
}







let students=[{name:"Ali",grade:75},{name:"Sara",grade:92},{name:"Mona",grade:88}]
console.log(students)
const over80Students= students.filter(student => student.grade>80);
console.log(over80Students);
let users=[{ name: "Malak", role: "Student" }, { name: 
"Omar", role: "Mentor" }];
const names=users.map(s=>s.name);
const roles=users.map(s=>s.role);
console.log(names);
console.log(roles);
const products=[{ id: 1, name: "Mouse" }, { id: 2, name: "Keyboard" 
}, { id: 3, name: "Screen" }];
const idEquals3 = products.find(product=>product.id===3);
console.log(idEquals3);
const person={ name: "Laila", age: 21, city: "Cairo" } ;
console.log(person.name);
console.log(person.age);
const mergedArr=[...users,...products];
console.log(mergedArr);
const student= {name: "Hana", grade: 84, level: 2 };
const copyStudent={...student};
copyStudent[1]=90;
console.log(student,copyStudent);
const numbers=[1, 2, 3, 4, 5, 6] ;
const doubledNumers= numbers.map(num=>num*2);
console.log(doubledNumers);
const evenNumbers= numbers.filter(num=>num%2==0);
console.log(evenNumbers);
const employees=[{ name: "Nour", department: "HR" }, { name: 
"Youssef", department: "IT" }];
const ITdep=employees.find(employee=>employee.department==="IT");
console.log(ITdep);


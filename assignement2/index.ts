interface User{
  id:number;
  name:string;
  age:number;
  isActive:Boolean;
}
const users:User[]= [ 
  { id: 1, name: "Malak", age: 21, isActive: true }, 
  { id: 2, name: "Omar", age: 24, isActive: false }, 
  { id: 3, name: "Lina", age: 20, isActive: true } 
]; 
interface product{
  id:number;
  name:string;
  price:number;
  inStock:Boolean;
}
 
const products = [ 
  { id: 101, name: "Laptop", price: 25000, inStock: true }, 
  { id: 102, name: "Headphones", price: 1800, inStock: false }, 
  { id: 103, name: "Mouse", price: 650, inStock: true } 
]; 
 
function getUserById(id:number) { 
  return users.find(user => user.id === id); 
} 
 
function getActiveUsers(list) { 
  return list.filter(user => user.isActive); 
} 
 
function getProductNames(items) { 
  return items.map(item => item.name); 
} 
 
function calculateTotal(price:number, quantity:number) { 
  return price * quantity; 
} 
 
function printUser(user) { 
  return `${user.name} is ${user.age} years old`; 
} 
 
let selectedUser = getUserById(1); 
let activeUsers = getActiveUsers(users); 
let productNames = getProductNames(products); 
let total = calculateTotal(650, 3); 
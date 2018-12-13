import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';
import Headers from './Headers';
import Registationform from './Registrationform';

//import withStyles from './button';



const menu = [
  {
    link:'/articles',
    label:'Articles'
  },
  {
    link:'/contacts',
    label:'Contacts'
  },
  {
    link:'/posts',
    label:'Posts'
  }
];

//let - обычная переменная
//const - переменная является константой - фактически постоянна и неизменяема
//var - устарело

if(true){
 var a = "ES5";
}
console.log(a);

const num1 = [1,2,3,4];
const num2 = [5,6,7,8];
//const res = [num1,num2];
//Array.prototype.push.apply(num1,num2);
console.log([...num1,...num2]);
const A ={
  a:"default",
  b:"just_test"
};
const B ={
  a:"value_from_b"
};
let c ={
  ...A,
  ...B
};
console.log(c);

const arr = [1,2,3];
function sum(a,b,c){
  return a+b+c;
}
console.log(sum(...arr));

function res(arg,arg2,...REST){
  console.log(arg,arg2,REST);
}
res (1,2,3,4,5,6,7);

//шаблонная строка(?Template string)

function greet(name){
//  console.log('Hello'+name+'!');
console.log('Hello${name}!');
}
greet('Max');
const URL = '/api';
let path1='test';
let path2='test2';
let path3='test3';

//const API_URL = URL+'/'+path1+'/'+path2+'/'+path3;
const API_URL = '${URL}/${path1}/${path2}/${path3}';
console.log(API_URL);
//чтото тут неработает

//   Стрелочная функция

//function greed(name,age){
//  return'Hello ${name}, your age is ${age}!';
//};
//console.log(greed('Max',20));

//()=>{}
const greed = (name,age) =>'Hello ${name},your name is ${age}!'

const FUNC = () => {};

(a,b)=>{
  let sun = a+b;
  return sum;
};

(a)=>{
  let sum=a+1;
  return sum;
};

a=>a*2;
(a,b)=>a*b;

//самовызыв.функция
(()=>{nul})();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
       <Headers items={menu}/>
        <Registationform/>
        <Dropdown />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Установка газового счётчика в Одессе!
          </p>
        <input id="as"></input>
        </header>
        </div>
    );
  }
}

export default App;

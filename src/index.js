import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import Projects from './components/Projects';
import './index.css';
import'bootstrap/dist/css/bootstrap.min.css';
const history = createBrowserHistory();
ReactDOM.render(
   <Router history={history}>
       <Switch>
           <Route exact path='/my-portfolio' component={App}/>
           <Route path='/project' component={Projects}/>
           <Route path='/jokes' component={Jokes}/>
       </Switch>
   </Router> ,
   document.getElementById('root')
    );

// new Promise(resolve => {
//     return reject(new Error('No bears'));
//     setTimeout(()=>{
//         resolve('Bears','Beets','Battle');

//     },2000);
// })
// .then(quote => {
//     console.log(quote);
// })
// .catch(error=>console.log('error',error));

// class RegularClass{}
// class ComponentClass extends Component{}
// const regularclassinstance = new RegularClass();
// const componentclassinstance = new ComponentClass();
// console.log('regularclassinstance',regularclassinstance);
// console.log('componentclassinstance',componentclassinstance);

// class Animal{
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
//     speak(){
//         console.log('I am',this.name,'and I am',this.age,'years old');
//     }
// }

// const animal1 = new Animal('SImba',3);
// animal1.speak();
// console.log(animal1);

// class Lion extends Animal{
//     constructor(name,age,furcolor,speed){
//         super(name,age);
//         this.furcolor = furcolor;
//         this.speed = speed;
//     }
//     roar(){
//         console.log('RooAr! I have ',this.furcolor,'fur, and I can ran ',this.speed,'miles an hour')
//     }
// }
// const lion1 = new Lion('Mufasa',20,'golden',100)
// lion1.speak()
// lion1.roar()
// console.log(lion1);
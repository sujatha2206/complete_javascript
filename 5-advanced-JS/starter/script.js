//FUNCTION CONSTRUCTOR

// var Person=function(name,yearOfBirth){
//     this.name=na;me;
//     this.yearOfBirth=yearOfBirth;
//     // this.calculateAge=function(){
//     //     console.log(2020-yearOfBirth);
//     // }
// }
// Person.prototype.calculateAge=function(){
//     console.log(2020-this.yearOfBirth);
// }
// var suji = new Person("sujatha",1990);
// var suresh = new Person("suresh",1985);
// suji.calculateAge();
// suresh.calculateAge();

//Object.create

// var personProto ={
//     calculateAge:function(){
//         console.log(2020-this.yearOfBirth);
//     }
// }
// var suji = Object.create(personProto);
// suji.name ="sujatha";
// suji.yearOfBirth = 1990;
// suji.calculateAge();

// var suresh =Object.create(personProto,{
//     name:{value:'suresh jinka'},
//     yearOfBirth:{value:1985}
// });
// suresh.calculateAge();

//primitives vs object

    //primitives

    // var a = 2;
    // var b =a;
    // a=10;
    // console.log(" a "+a+" b "+b);
    //even if b= a b value  won;t chnage becuase it is copy,it has own
    //in primitives it points to value associated

    //objects

    // var s1={
    //     name:'suji',
    //     age:30
    // };
    // var s2=s1;
    // s2.age=29;
    // console.log(" s1  "+s1.age+" s2 "+s2.age);
    //in object it was diff both point to same ref

    // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }


// change(age, obj);

// console.log(age);
// console.log(obj.city);


//Afunction is instance of object type

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() { 
//         console.log(i); 
//      }, i * 1000 );
  
//   }
//   let arr = [];
// // let's create 3 functions
// for (var i = 0; i < 3; i++) {
//   // and store them in funcs
//   arr.push(i);
  
// }
// // console.log(arr.map(x => x)); 
// function test(){
//    var foo = 33;
//    if(foo) {
//      let i=0;
//      i=1;
//      i=2;

//    }
// }
//test()

// (function () {
//  {
//        var x=1,y=2;
//        console.log(x);
//    }
   
//    console.log(x);
//     console.log(y);
// })();
['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function() { console.log(i); });
    document.body.appendChild(btn);
  });
  for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
  }
let person={
    'name':'sujatha',
    'age':29,
    29:'suji',
    true:'is correct answer'
}
let arr=[1,2,3];
for(prop in person){
    //console.log(person[prop]);
    if(typeof person[prop] === "number"){
        console.log("true is:"+person[prop]);
    }
}
for(prop in arr){
    console.log(arr[prop]);
}
for(let [key,val] of Object.entries(person)){
    console.log(`${key} and ${val}`);
}
for(let val of arr){
    console.log(`${val}`);
}
for(let val of Object.keys(person)){
    console.log(` ${val}`);
}
for(let val of Object.keys(arr)){
    console.log(` ${val}`);
}
let tech = new Map();
tech.set('name','suresh');
tech.set(true,'is anything wrong');
tech.forEach((value,key)=>{
    if(key === true){
    console.log(`${key} and ${value}`);
    }
})
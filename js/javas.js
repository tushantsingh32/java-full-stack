let a=5;
console.log(a,typeof a);
let b=null;
let c;
console.log(b,typeof b);
console.log(c,typeof c);
console.log("a"*5);

let fname = prompt("enter your first name");
let sname = prompt("enter your sur name");
let age = Number(prompt("enter your age"));
if(age>18)
{
          let check=confirm("are you interested in games");
          if(check)
          {
            alert(`Hello! ${fname}  ${sname} welcome to our gamezone`);
          }
          else{
            alert("go please");
          }
}
else{

      alert("getout");
   }

let a=[45,67,98,23,89,90,56];
a.shift();

console.log(a);
let part=a.slice(0,3);
console.log(part);
console.log(a);

let part1=a.splice(1,3);
console.log(part1);
console.log(a);


let ar="apnacollege";
console.log(ar.indexOf("col"));



let data = {
    name : "tushant",
    age : 18,
    status : function()
    {
        console.log(data.name+" "+"is intelligent");
    }
};
console.log(data);
data.status();

data.height=6;
data.age=22;
delete data.name;

console.log(data);
console.log(data["age"]);

for(let key in data)
{
    console.log(key,data[key]);
}




function solve()
{
   return ()=>{console.log("hello")};
 
}

let fn = solve();
fn();


setTimeout(()=>{console.log("world");},90000);
let id=setInterval(()=>{console.log("world");},2000);
clearInterval(id);


console.log("a");
setTimeout(()=>{console.log("b");},0);
console.log("c");

setTimeout(function () {
  console.log("Order placed");

  setTimeout(function () {
    console.log("Preparing food");

    setTimeout(function () {
      console.log("Delivered");
    }, 2000);

  }, 2000);

}, 2000);



let array=[2,3,4,5,6,7];


array.forEach((a)=>{console.log(a*2)});

let array2=array.map((a)=>(a*2));
for(val of array2)
{
    console.log(val);
}




let array3=array.filter((a)=>(a%2==0));
for(val of array3)
{
    console.log(val);
}

let array4=array.reduce((curr ,a)=>(curr+a),0);
console.log(array4);


let user={
    name:"tushant",
    age:12
};
let user1 ={...user};

for(const [key,value] of Object.entries(user1))
{
    console.log(`${key}:${value}`);
}

let {name,age} = user;
console.log(name);


console.log(document);
let h = document.getElementsByClassName("box");

let h1=document.getElementById("box1");

let p=document.getElementsByTagName("h1");



let r=document.querySelectorAll(".box");

// console.log(h,h1,p,q,r);
// console.log(typeof h,typeof h1,typeof p,typeof q,typeof r);


// p[0].innerText="bye";
// let h1=document.getElementById("box1");
// h1.innerText="now";
// h[0].innerText="school";
// q.innerText="paper";
let q=document.querySelector("#box1");
 let img=document.querySelector(".img img");
console.log(img.getAttribute("src"));
img.setAttribute("src","assets/slide4.png");

document.querySelector(".child").addEventListener("click",(event)=>{event.stopPropagation();console.log("child clicked")});
document.querySelector(".parent").addEventListener("click",(event)=>{console.log("parent clicked")},true);


document.querySelector(".form").addEventListener("keydown",(e)=>{ e.preventDefault(); console.log(e.key);});


let bt=document.querySelector(".btn");
bt.addEventListener("click",function(e){

    let h=document.querySelector(".txt");
    let r=ran();
    h.innerText=r;
    let bx=document.querySelector(".box");
    bx.style.backgroundColor=r;
    
});

function ran()
{
    let a=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let c=Math.floor(Math.random()*255);
    return `rgb(${a},${b},${c})`;
}


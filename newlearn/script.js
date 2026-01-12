// function datasaved(data) {
//     return new Promise((resolve, reject) => {
//          let net = Math.floor(Math.random() * 10);
//     if (net > 4) {
//         resolve("success was done");
//     }
//     else reject("fail eas done");
//     });
   
// }
// datasaved("hello")
// .then((result)=>{
//     console.log("success");
//     console.log(result);
//     return datasaved("hello1");
// })
// .then((result)=>{
//     console.log("success1");
//      console.log(result);
//     return datasaved("hello2");
// })
// .then((result)=>{
//     console.log("success3");
//      console.log(result);
// })
// .catch((error)=>{
//     console.log("fail");
//      console.log(error);
// });
// let data = "dtat";
// console.log(datasaved("hello"));

let h=document.querySelector("h1");

function changeclr(colour,delay)
{  return new Promise((resolve,reject) => {
    setTimeout(()=>{
            h.style.color=colour;
            resolve("success is done");
        },delay);
});
        
}

// changeclr("red",1000)
// .then((result)=>{
//     console.log(result);
//     return changeclr("blue",1000)
// })
// .then((result)=>{
//     console.log(result);
//     return changeclr("green",1000);
// })
// .then((result)=>{
//     console.log(result);
// });


// async function demo()
// {
//     try{
//          await changeclr("red",1000);
//     await changeclr("blue",1000);
//     }
//     catch(er)
//     {
//         console.log(er);
//     }
   
//     changeclr("green",1000);   
// }

// demo();



// let p=`{"fact":"Cats and kittens should be acquired in pairs whenever possible as cat families interact best in pairs.","length":102}`;
// let ans=JSON.parse(p)
// console.log(ans.fact);

let url="https://api.potterdb.com/";

fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("data1",data.message);
    return fetch(url);
})
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("data2",data.message);
})
.catch((err)=>{
    console.log("fail",err);
});

const p1 = new Promise((resovle, reject) => {
    setTimeout(() => {
        console.log("Async Function 1...");
        resovle(1);
    },5000)
})


const p2 = new Promise((resovle, reject) => {
    setTimeout(() => {
        console.log("Async Function 2...");
        resovle(2);
    },2000)
})

Promise.race([p1,p2]).then((result) => console.log(result));
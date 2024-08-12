const p1 = new Promise((resovle, reject) => {
    setTimeout(() => {
        console.log("Async Function 1...");
        resovle(1);
    },2000)
})


const p2 = new Promise((resovle, reject) => {
    setTimeout(() => {
        console.log("Async Function 2...");
        resovle(1);
    },2000)
})


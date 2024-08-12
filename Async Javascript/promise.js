const p = new Promise((resolve, reject) => {
  //some async work...

  setTimeout(() => {
    // resolve({id: 1, gitHubUsername: 'Rohit'});
    reject(new Error("Not Found!"));
  }, 3000);
});

p.then((user) => console.log(user)).catch((err) => console.log(err.message));

console.log("Before");
getUser(1, (user) => {
  console.log(user);
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Fetching users from the database");
    callback({ id: id, gitHubUserName: "Rohit" });
  }, 3000);
}

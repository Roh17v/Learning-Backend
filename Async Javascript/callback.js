console.log("Before");
getUser(1, (user) => {
  console.log(user);
  getRepos(user.name, (repos) => {
    console.log('Repos: ',repos)
  })
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Fetching users from the database");
    callback({ id: id, gitHubUserName: "Rohit" });
  }, 3000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

console.log("Before");
getUser(1)
  .then((user) => {
    console.log(user);
    return getRepos(user.username);
  })
  .then((repos) => {console.log(repos)})
  .catch(err => console.log(err))
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching users from the database...");
      resolve({ id: id, username: "Rohit" });
    }, 3000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching all repos from GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 3000);
  });
}

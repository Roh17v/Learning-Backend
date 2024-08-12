console.log("Before");
const user = getUser(2).then((user) => console.log(user));
const repos = getRepos("Rohit").then((username) => console.log(username));
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching users from the database");
      resolve({ id: id, gitHubUserName: "Rohit" });
    }, 3000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 3000);
  });
}

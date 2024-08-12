async function getData() {
  console.log("Before");
  const user = await getUser(1);
  console.log("Between");
  const repos = await getRepos(user);
  console.log("After");
  console.log(user);
  console.log(repos);
}

getData();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching users from the database...");
      resolve({ id: id, username: "Rohit" });
    }, 5000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching all repos from GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

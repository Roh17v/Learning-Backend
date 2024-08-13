async function sendTopMovies() {
  const customer = await getCustomer(1);
  console.log(customer);
  if (customer.isGold) {
    const topMovies = await getTopMovies();
    console.log("Top movies: ", topMovies);
    await sendEmail(customer.email);
  }
}

sendTopMovies();

// getCustomer(1, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email Sent...");
      resolve();
    }, 4000);
  });
}

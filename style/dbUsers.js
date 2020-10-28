const dbUsers = [
   {
      id: "003498",
      email: "martin@gmail.com",
      password: "D9729FEB74992CC3482B350163A1A010",
      createdAt: 1601323030959,
      isActive: true,
   },
   {
      id: "112076",
      email: "abigail@gmail.com",
      password: "D58E3582AFA99040E27B92B13C8F2280",
      createdAt: 1601323566304,
      isActive: true,
   },
   {
      id: "003498",
      email: "martin@gmail.com",
      password: "D9729FEB74992CC3482B350163A1A010",
      createdAt: 1601323030959,
      isActive: true,
   },
   {
      id: "099001",
      email: "dani@gmail.com",
      password: "73A90ACAAE2B1CCC0E969709665BC62F",
      createdAt: 1601323616825,
      isActive: true,
   },
];
let mostRecentSignUpDate = 0;
dbUsers.forEach((user) => {
   if (user.createdAt > mostRecentSignUpDate) {
      mostRecentSignUpDate = user.createdAt;
   }
   return mostRecentSignUpDate;
});
// console.log(mostRecentSignUpDate);

const mostRecentSignUp = dbUsers
   .map((user) => {
      return user;
   })
   .find((user) => {
      return (user.createdAt = mostRecentSignUpDate);
   });
// console.log(mostRecentSignUp);

const dupeUserIndex = dbUsers
   .map((user) => {
      return user.email;
   })
   .findIndex((email, i, arr) => {
      return arr.indexOf(email) !== i;
   });
// console.log(dupeUserIndex);
// console.log("The entry", dbUsers[dupeUserIndex], "is a in the database twice");

const uniqDbUsers = dbUsers.filter((user, i, arr) => {
   return arr.indexOf(user) !== dupeUserIndex;
});
console.log(uniqDbUsers);

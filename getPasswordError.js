function getPasswordError(password, email) {
   const splitEmail = email.split("@");
   const localEmail = splitEmail[0];

   const unacceptablePasswords = getUnacceptablePasswords();
   // console.log(unacceptablePasswords);

   if (password.length === 0) {
      return "Please create a password.";
   } else if (password.length < 9) {
      return "Your password must be at least 9 characters.";
   } else if (
      password.toLowerCase().includes(localEmail) &&
      localEmail.length >= 4
   ) {
      return "All or part of your email address cannot be used in your password.";
   } else if (unacceptablePasswords.includes(password.toLowerCase())) {
      return `Your password contains a commonly used password, ${password} can be easily discovered by attackers. Please use something else.`;
   } else {
      return "";
   }
}

function getUnacceptablePasswords() {
   //    const lowerCasedPassword = password.toLowerCase();
   const allPasswords = [
      ...mostInsecurePasswords,
      ...secondMostInsecurePasswords,
   ].flat();
   // const allUniqPasswords = [...new Set(allPasswords)];
   const firstPasswords = allPasswords.slice(
      0,
      allPasswords.indexOf("skywalker")
   );
   const secondPasswords = allPasswords.slice(
      allPasswords.indexOf("skywalker") + 1,
      allPasswords.indexOf("obama2016")
   );
   const thirdPasswords = allPasswords.slice(
      allPasswords.indexOf("obama2016") + 1
   );
   const firstAndSecondPassowords = firstPasswords.concat(secondPasswords);
   const nonBooleanPasswords = firstAndSecondPassowords.concat(thirdPasswords);
   //    const password = [];
   let stringsAndNumbersPasswords = [];

   // for (let i = 0; i < nonBooleanPasswords.length; i++) {
   //    const password = nonBooleanPasswords[i];
   //    if (typeof password === "boolean") {
   //       // console.log("Yes");
   //    } else {
   //       stringsAndNumbersPasswords = stringsAndNumbersPasswords.concat(
   //          password
   //       );
   //    }
   // }
   // nonBooleanPasswords.forEach(function (password) {
   //    if (typeof password === "boolean") {
   //       //  console.log("Yes");
   //    } else {
   //       stringsAndNumbersPasswords = stringsAndNumbersPasswords.concat(
   //          password
   //       );
   //    }
   // });
   nonBooleanPasswords.forEach((password) => {
      if (typeof password === "boolean") {
         //  console.log("Yes");
      } else {
         stringsAndNumbersPasswords = stringsAndNumbersPasswords.concat(
            password
         );
      }
   });

   let stringPasswords = [];

   stringsAndNumbersPasswords.forEach((password) => {
      const passwordAsString = String(password);
      stringPasswords = stringPasswords.concat(passwordAsString);
   });
   // console.log("These are the string passwords:", stringPasswords);
   let reversePasswords = [];

   stringPasswords.forEach((password) => {
      const passwordChars = password.split("");
      const copyOfPasswordChars = [...passwordChars]; // reverses an array
      const reversePasswordChars = copyOfPasswordChars.reverse(); // turns an array into a string
      const reversePassword = reversePasswordChars.join(""); // combines each string into an array of strings as it passes through the for loop
      reversePasswords = reversePasswords.concat(reversePassword);
   });
   // combines the new list of reversed passwords with the old list
   const reverseAndForwardPasswords = stringPasswords.concat(reversePasswords);

   let normalizedPasswords = [];
   reverseAndForwardPasswords.forEach((password) => {
      const normalizedPassword = password.toLowerCase();
      normalizedPasswords = normalizedPasswords.concat(normalizedPassword);
   });
   const revFowardAndNormalizedPasswords = [...new Set(normalizedPasswords)];
   // console.log(revFowardAndNormalizedPasswords);

   const stringInsecurePasswords = allInsecurePasswords.map(
      (allInsecurePassword) => allInsecurePassword.text
   );

   // console.log(stringInsecurePasswords);

   const combinedStringPasswords = stringInsecurePasswords.concat(
      reverseAndForwardPasswords
   );
   //  {console.log(combinedStringPasswords);

   const longPasswords = combinedStringPasswords.filter((password) => {
      return password.length >= 9;
   });

   // console.log(longPasswords);

   const unacceptablePasswords = [...new Set(longPasswords)];

   const isEveryPWLong = unacceptablePasswords.every((password) => {
      return password.length >= 9;
   });

   const isPWQwerty = unacceptablePasswords.some((password) => {
      return password === "qwerty";
   });

   // console.log(
   //    "Is the password qwerty on the unacceptable password list?",
   //    isPWQwerty
   // );
   // console.log(
   //    "Are all the passwords on the unacceptable password list at least 9 characters long?",
   //    isEveryPWLong
   // );
   // console.log(unacceptablePasswords);

   return unacceptablePasswords;
}

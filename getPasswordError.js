function getPasswordError(password, email) {
   const splitEmail = email.split("@");
   const localEmail = splitEmail[0];

   const unacceptablePasswords = getUnacceptablePasswords();
   console.log(unacceptablePasswords);

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
   const allUniqPasswords = [...new Set(allPasswords)];
   const firstPasswords = allUniqPasswords.slice(
      0,
      allUniqPasswords.indexOf("skywalker")
   );
   const secondPasswords = allUniqPasswords.slice(
      allUniqPasswords.indexOf("skywalker") + 1,
      allUniqPasswords.indexOf("obama2016")
   );
   const thirdPasswords = allUniqPasswords.slice(
      allUniqPasswords.indexOf("obama2016") + 1
   );
   const firstAndSecondPassowords = firstPasswords.concat(secondPasswords);
   const nonBooleanPasswords = firstAndSecondPassowords.concat(thirdPasswords);
   //    const password = [];
   let stringsAndNumbersPasswords = [];

   for (let i = 0; i < nonBooleanPasswords.length; i++) {
      const password = nonBooleanPasswords[i];
      if (typeof password === "boolean") {
         // console.log("Yes");
      } else {
         stringsAndNumbersPasswords = stringsAndNumbersPasswords.concat(
            password
         );
      }
   }

   let stringPasswords = [];

   for (let i = 0; i < stringsAndNumbersPasswords.length; i++) {
      const password = stringsAndNumbersPasswords[i];
      const passwordAsString = String(password);
      stringPasswords = stringPasswords.concat(passwordAsString);
   }
   // console.log("These are the string passwords:", stringPasswords);
   let reversePasswords = [];
   // make a list of passwords with characters reversed
   for (let i = 0; i < stringPasswords.length; i++) {
      const password = stringPasswords[i];
      // turns a string into an array of characters
      const passwordChars = password.split("");
      const copyOfPasswordChars = [...passwordChars];
      // reverses an array
      const reversePasswordChars = copyOfPasswordChars.reverse();
      // turns an array into a string
      const reversePassword = reversePasswordChars.join("");
      // combines each string into an array of strings as it passes through the for loop
      reversePasswords = reversePasswords.concat(reversePassword);
   }
   // combines the new list of reversed passwords with the old list
   const reverseAndForwardPasswords = stringPasswords.concat(reversePasswords);

   let normalizedPasswords = [];

   for (let i = 0; i < reverseAndForwardPasswords.length; i++) {
      const normalizedPassword = reverseAndForwardPasswords[i].toLowerCase();
      normalizedPasswords = normalizedPasswords.concat(normalizedPassword);
   }
   const unacceptablePasswords = [...new Set(normalizedPasswords)];

   //    console.log(allUnacceptablePasswords);

   return unacceptablePasswords;
}

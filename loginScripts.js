const dbUserDetails = ["mike@gmail.com", "javascriptiscool"];

$("#login-button").click(function () {
   const emailInput = $("#email-input").val();
   const passwordInput = $("#password-input").val();
   //    const userInputDetails = [emailInput, passwordInput];

   const isUserInDb = checkIsUserInDb(dbUserDetails, emailInput, passwordInput);
   // get a ture or false return
   if (isUserInDb === true) {
      console.log("Let's continue.");
      disableElement("#login-button");
      disableElement("#email-input");
      disableElement("#password-input");
   } else {
      console.log("This user is not found.");
   }
});

function disableElement(id) {
   $(id).attr("disabled", "disabled");
}

function checkIsUserInDb(dbUserDetails, emailInput, passwordInput) {
   console.log(dbUserDetails);
   console.log(emailInput);
   console.log(passwordInput);

   if (dbUserDetails[0] === emailInput && dbUserDetails[1] === passwordInput) {
      return true;
   } else return false;
}

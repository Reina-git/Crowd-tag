$("#show-delete").click(function () {
   $("#delete-button").toggleClass("d-flex d-none");
});

$("#sign-up-button").click(function () {
   $("#sign-up-card").toggle();
   $("#sign-up-button").toggleClass("d-flex d-none");
});

$("#add-photo-btn").click(function () {
   // $("#sign-up-card").toggle();
   $("#photo-url").toggleClass("d-none");
});

let tagInputChar = 0;

$("#tag-input").keypress(function () {
   console.log("let's add 1");
   tagInputChar += 1;

   console.log("Total inputted chars: ", tagInputChar);
   $("#tag-char-count").html(tagInputChar);
});

$("#letsGoButton").click(function () {
   const emailInput = $("#email-sign-up").val();
   const passwordInput = $("#password-sign-up").val();
   const lowerCasedPassword = passwordInput.toLowerCase();
   const trimmedEmail = emailInput.trim();
   const lowerCasedEmail = trimmedEmail.toLowerCase();
   const delimiter = `@`;
   const indexOfEmail = lowerCasedEmail.indexOf(delimiter);
   const localEmail = emailInput.slice(0, indexOfEmail);
   // console.log(`the local part of ${emailInput} is ${localEmail}.`);

   if (emailInput.length < 1) {
      $("#enterEmail").removeClass("d-none");
      $("#email-sign-up").addClass("is-invalid");
   } else {
      $("#enterEmail").addClass("d-none");
      $("#email-sign-up").removeClass("is-invalid");
      // console.log(`The trimmed and normalized email is ${localEmail}.`);
   }
   // If there is no password then error message and red input box
   if (passwordInput.length === 0) {
      $("#enterPassword").removeClass("d-none");
      $("#password-sign-up").addClass("is-invalid");

      // If the password is too short, then error message and red box but not other error messages
   } else if (passwordInput.length < 9 && passwordInput.length > 0) {
      $("#passwordLenth").removeClass("d-none");
      $("#password-sign-up").addClass("is-invalid");
      $("#enterPassword").addClass("d-none");
      $("#differentPassword").addClass("d-none");

      // if the password is the same as the first part/ local of the email address and the local part
      // is longer than 4 characters then error message and red box but not all other errors
   } else if (
      lowerCasedPassword.includes(localEmail) &&
      localEmail.length >= 4
   ) {
      $("#differentPassword").removeClass("d-none");
      $("#password-sign-up").addClass("is-invalid");
      $("#passwordLenth").addClass("d-none");
   } else {
      $("#enterPassword").addClass("d-none");
      $("#passwordLenth").addClass("d-none");
      $("#differentPassword").addClass("d-none");
      $("#password-sign-up").removeClass("is-invalid");
   }
});

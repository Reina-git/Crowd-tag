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

$("#tag-input").keyup(function (e) {
   // get the text from the textarea
   const tag = e.target.value;
   // check the length of the text
   const tagLength = tag.length;

   if (tagLength > 100) {
      $("#tag-char-count").addClass("text-danger");
      $("#tag-char-count").removeClass("text-muted");
   } else {
      $("#tag-char-count").addClass("text-muted");
   }

   // update the character counter on the page
   $("#tag-char-count").html(tagLength);
});

$("#letsGoButton").click(function () {
   const emailInput = $("#sign-up-email-input").val();
   const email = emailInput.trim().toLowerCase();
   const password = $("#sign-up-password-input").val();
   const passwordError = getPasswordError(password, email);

   if (passwordError !== "") {
      showError("#sign-up-password", passwordError);
   } else {
      hideError("#sign-up-password", passwordError);
   }

   const emailError = getEmailError(emailInput);
   if (emailError !== "") {
      showError("#sign-up-email", emailError);
   } else {
      hideError("#sign-up-email", emailError);
   }

   let whenButtonClicked = new Date(Date.now());
   whenButtonClicked = new Date(2020, 3, 1); //uncomment to test that the date is working.
   const year = whenButtonClicked.getFullYear();
   const month = whenButtonClicked.getMonth() + 1;
   const day = whenButtonClicked.getDate();

   const yyyy = String(year);
   const unpaddedMonth = String(month);
   const unpaddedDay = String(day);

   function padLeft(str) {
      // let str = "";
      if (str.length < 2) {
         str = 0 + str;
      } else {
         str = str;
      }
      return str;
   }
   const dd = padLeft(unpaddedDay);
   const mm = padLeft(unpaddedMonth);

   const results = yyyy + mm + dd;
   const createdAt = Number(results);
   console.log(createdAt);
});

function getEmailError(emailInput) {
   if (emailInput.length === 0) {
      return "Please enter your email address.";
   } else {
      return "";
   }
}

function showError(element, message) {
   // showError("#sign-up-password", passwordError);
   $(`${element}-error`).html(message);
   $(`${element}-input`).addClass("is-invalid");

   console.log(element);
}

function hideError(element, message) {
   $(`${element}-error`).html(message);
   $(`${element}-input`).removeClass("is-invalid");

   // console.log(message);
}

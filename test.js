// create-imagery charachter counter
$("#create-imagery-input").keyup(function (e) {
   // get the text from the textarea
   const text = e.target.value;
   // check the length of the text
   const textLength = text.length;
   if (textLength > 240 || textLength === 0) {
      $("#save-card").disabled = true;
      $("#char-count").addClass("text-danger");
      $("#char-count").removeClass("text-muted");
   } else {
      $("#save-card").disabled = false;
      $("#char-count").addClass("text-muted");
   }
   //update the character counter on the page
   $("#imagery-char-count").html(textLength);
});

// create-answer charachter counter
$("#create-answer-input").keyup(function (e) {
   // get the text from the textarea
   const text = e.target.value;

   // check the length of the text
   const textLength = text.length;
   if (textLength > 240 || textLength === 0) {
      $("#save-card").addClass("disabled");
      $("#char-count").addClass("text-danger");
      $("#char-count").removeClass("text-muted");
   } else {
      $("#save-card").disabled = false;
      $("#char-count").addClass("text-muted");
   }

   $("#answer-char-count").html(textLength);
});

$("#edit-imagery-input, #edit-answer-input").keyup(function () {
   const imageryInput = $("#edit-imagery-input").val();
   const answerInput = $("#edit-answer-input").val();
   if (imageryInput.length > 240) {
      $("#edit-imagery-char-count").addClass("text-danger");
   } else {
      $("#edit-imagery-char-count").removeClass("text-danger");
   }
   if (answerInput.length > 240) {
      $("#edit-answer-char-count").addClass("text-danger");
   } else {
      $("#edit-answer-char-count").removeClass("text-danger");
   }
   if (
      imageryInput.length > 0 &&
      imageryInput.length <= 240 &&
      answerInput.length > 0 &&
      answerInput.length <= 240
   ) {
      $("#edit-save-card").removeClass("disabled");
   } else {
      $("#edit-save-card").addClass("disabled");
   }
   $("#edit-imagery-char-count").html(imageryInput.length);
   $("#edit-answer-char-count").html(answerInput.length);
});

$("#letsGoButton").click(function () {
   const emailInput = $("#sign-up-email-input").val();
   const email = emailInput.trim().toLowerCase();
   const password = $("#sign-up-password-input").val();
   console.log(email);
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

   // console.log(buttonClicked);
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

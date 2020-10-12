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

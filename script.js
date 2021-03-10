// Redirect to HTTPS site always
if (window.location.href.startsWith("http://loveaboutfood.com")) {
  window.location.href = "https://loveaboutfood.com";
}

// Display photo after input[file] change
// Adapted from: https://stackoverflow.com/a/4459419/319952
const message = document.getElementById("message");
const userPhoto = document.getElementById("user-photo");
const photoPreview = document.getElementById("photo-preview");
const uploadPrompt = document.getElementById("upload-prompt");
const submitButton = document.getElementById("submit");
const reader = new FileReader();

message.value = "";

userPhoto.addEventListener("change", (e) => {
  console.log("File selected.");
  swapImage(e.target);
});

function swapImage(input) {
  reader.addEventListener(
    "load",
    function (e) {
      console.log(reader.result);
      photoPreview.src = reader.result;
      uploadPrompt.style.display = "none";
    },
    false
  );
  if (input.files && input.files[0]) {
    reader.readAsDataURL(input.files[0]);
  }
}

// If the user didn't supply a photo, don't attempt to upload
// as that will trigger an error response.
submitButton.addEventListener("click", () => {
  if (!userPhoto.files || !userPhoto.files[0]) {
    userPhoto.removeAttribute("name");
  }
});

function onResize() {
  document.documentElement.style.setProperty(
    "--windowWidth",
    `${window.innerWidth}px`
  );
  document.documentElement.style.setProperty(
    "--windowHeight",
    `${window.innerHeight}px`
  );
}

window.addEventListener("resize", onResize);
onResize();

submitButton.addEventListener("click", () => {
  if (message.checkValidity()) {
    submitButton.value = "Sending message ...";
    submitButton.classList.add("submitted");
  }
});
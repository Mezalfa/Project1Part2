// Smooth scroll to upload section
function scrollToUpload() {
  document.getElementById("upload").scrollIntoView({ behavior: "smooth" });
}

// Show fake analysis result
function showResult() {
  const resultBox = document.getElementById("resultBox");
  resultBox.classList.remove("d-none");
  document.getElementById("resultText").textContent =
    "Your outfit resembles 1970s Bohemian Chic style!";
}

// Contact form interaction
function showThankYou(event) {
  event.preventDefault();
  document.querySelector("form").classList.add("d-none");
  document.getElementById("thankYou").classList.remove("d-none");
}


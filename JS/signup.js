function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    document.querySelector(".password-toggle").textContent = "Hide";
  } else {
    passwordInput.type = "password";
    document.querySelector(".password-toggle").textContent = "Show";
  }
}

document.getElementById("password").addEventListener("input", function() {
  var toggleButton = document.querySelector(".password-toggle");
  if (this.value.trim() !== "") {
    toggleButton.style.display = "inline-block";
  } else {
    toggleButton.style.display = "none";
  }
});
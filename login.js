window.onload = function() {
  if (localStorage.getItem("email")) {
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("rememberMe").checked = true;
  }
};

function checkCredentials() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "admin" && password == "password") {
    document.getElementById("message").innerHTML = "Login Successful!";
    if (document.getElementById("rememberMe").checked) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }
  } else {
    document.getElementById("message").innerHTML = "Login Failed. Please try again.";
  }
}

function forgotPassword() {
  alert("Please contact the administrator to reset your password.");
}

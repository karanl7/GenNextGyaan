document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  console.log(username, email, password);

  let phone = document.querySelector("#phone").value;
  let phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phone)) {
    alert("Invalid phone number");
    return;
  }


  // Add your code to submit the form data to the server here...
});
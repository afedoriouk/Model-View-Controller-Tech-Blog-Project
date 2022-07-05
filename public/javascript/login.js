const loginFormHandler = async (event)=> {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-login").value.trim();
  const passwordEl = document.querySelector("#password-login").value.trim();
  
  
  if (username && password){
    const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({ username, password}),
    headers: { "Content-Type": "application/json" }
  })

    .then(function() {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
  }
  };

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

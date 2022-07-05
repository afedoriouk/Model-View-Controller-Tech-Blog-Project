


const logout = async() =>{
  const response = await fetch ("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/");
    })
    .catch(err => console.log(err));
}

document.querySelector("#logout").addEventListener("click", logout);

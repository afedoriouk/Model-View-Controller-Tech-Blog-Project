const newFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("blog-title").value.trim();
  const description = document.querySelector("#blog-description").value.trim();

  if (title && description) {
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        document.location.replace("/dashboard");
      })
      .catch((err) => console.log("Failed to create blog"));
  }
};

const delButtonHandler = async (event) => {
  if (event.target.getAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    })
      .then(function () {
        document.location.replace("/dashboard");
      })
      .catch((err) => console.log("Failed to delete blog"));
  }
};
document.querySelector(".new-blog-form");
document.addEventListener("SUBMIT", newFormHandler);
document.querySelector(".blog-list");
document.addEventListener("click", delButtonHandler);

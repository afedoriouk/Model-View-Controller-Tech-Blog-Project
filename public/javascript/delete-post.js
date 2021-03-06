const deleteFormHandler = async function (event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").lenght - 1
  ];
  //delete post
  const response = await fetch(`api/post/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      post_id: id,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".delete-post-button")
  .addEventListener("click", deleteFormHandler);

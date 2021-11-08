const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-address").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    document.location.replace("/home");
  }
};

document.querySelector(".signup").addEventListener("submit", signupFormHandler);

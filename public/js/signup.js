const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-address").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#signUp").addEventListener("submit", signupFormHandler);

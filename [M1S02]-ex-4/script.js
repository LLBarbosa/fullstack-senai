function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (localStorage.getItem("user") === null) {
        let user = JSON.stringify({username: username, password: password, profileImage: "", email: "", name: ""})
        localStorage.setItem("user", user);
    }
    location.href = "index2.html";
}

window.onload = function checkLocalStorage() {
    if (localStorage.getItem("user") != null) {
        location.href = "index2.html";
    }
  }

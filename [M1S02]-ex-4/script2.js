function showUserData() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let profileImage = document.getElementById("profileImage");
    let name = document.getElementById("name");
    let imgSrc = document.getElementById("img-src");

    let user = JSON.parse(localStorage.getItem("user"));
    username.value = user.username;
    email.value = user.email;
    profileImage.value = user.profileImage;
    name.value = user.name;

    imgSrc.src = user.profileImage;
}

function updateUserData() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let profileImage = document.getElementById("profileImage").value;
    let name = document.getElementById("name").value;
    let imgSrc = document.getElementById("img-src");
    
    let user = JSON.parse(localStorage.getItem("user"));
    user.username = username;
    user.email = email;
    user.profileImage = profileImage;
    user.name = name;
    user.profileImage = profileImage;

    localStorage.setItem("user", JSON.stringify(user));

    imgSrc.src = user.profileImage;
}

function logout() {
    localStorage.clear();
    location.href = "index.html";
}

window.onload = function checkLocalStorage() {
    if (localStorage.getItem("user") == null) {
        location.href = "index.html";
    }
    showUserData();
}

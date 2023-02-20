const apiUrl = 'https://api.github.com/users/LLBarbosa';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const profileCard = document.querySelector('.card');
    const avatar = profileCard.querySelector('.avatar_url');
    const name = profileCard.querySelector('.name');
    const login = profileCard.querySelector('.login');
    const bio = profileCard.querySelector('.bio');
    const location = profileCard.querySelector('.location');
    const followers = profileCard.querySelector('.followers');
    const following = profileCard.querySelector('.following');
    const repos = profileCard.querySelector('.public_repos');

    avatar.src = data.avatar_url;
    name.textContent = data.name;
    bio.textContent = data.bio;
    login.textContent = "@" + data.login;
    location.textContent = data.location;
    followers.textContent = data.followers;
    following.textContent = data.following;
    repos.textContent = data.public_repos;
  });
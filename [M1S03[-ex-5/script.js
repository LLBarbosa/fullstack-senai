fetch('https://api.github.com/users/LLBarbosa')
        .then(response => response.json())
        .then(data => {
          // Preenche os elementos HTML com as informações obtidas
          document.querySelector('.name').textContent = data.name;
          document.querySelector('.location').textContent = data.location;
          document.querySelector('.bio').textContent = data.bio;
          document.querySelector('.followers').textContent = data.followers;
          document.querySelector('.following').textContent = data.following;
          document.querySelector('.public-repos').textContent = data.public_repos;
          document.querySelector('img').src = data.avatar_url;
        })
        .catch(error => console.error(error));
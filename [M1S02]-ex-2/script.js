const login = {
    username: 'laercio',
    password: 'floripa72'
  };
  
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === login.username && password === login.password) {
      document.getElementById('result').innerText = 'Logado!!';
    } else {
      document.getElementById('result').innerText = 'Credenciais incorretas!!';
    }
  });
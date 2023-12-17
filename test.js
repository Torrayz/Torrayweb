const loginElement = document.querySelector('#login');

function showPopUp() {
  loginElement.classList.add('display');

  setTimeout(function () {
    loginElement.classList.remove('display');
  }, 3000);
}

function goToHome() {
  location.href = './home.html';
}

function goToLogin() {
  location.href = './index.html';
}

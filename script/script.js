const showModalSignIn = () => {
  const modal = document.querySelector('.modal');
  const pillsLogin = document.querySelector('#pills-login');
  const pillsRegister = document.querySelector('#pills-register');
  const tabLogin = document.querySelector('#tab-login');
  const tabRegister = document.querySelector('#tab-register');

  modal.style.display = 'block';
  tabLogin.classList.add('active');
  tabRegister.classList.remove('active');
  pillsLogin.classList.add('active', 'show');
  pillsRegister.classList.remove('active', 'show');
};

const showModalSignUp = () => {
  const modal = document.querySelector('.modal');
  const pillsLogin = document.querySelector('#pills-login');
  const pillsRegister = document.querySelector('#pills-register');
  const tabLogin = document.querySelector('#tab-login');
  const tabRegister = document.querySelector('#tab-register');

  modal.style.display = 'block';
  tabLogin.classList.remove('active');
  tabRegister.classList.add('active');
  pillsLogin.classList.remove('active', 'show');
  pillsRegister.classList.add('active', 'show');
};

const btnClose = document.querySelector('#btn-close');

btnClose.addEventListener('click', () => {
  const modal = document.querySelector('.modal');

  modal.style.display = 'none';
});

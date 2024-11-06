const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});







// Get the form elements
const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');

// Function to store form data in session storage
function storeFormDataInSessionStorage(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  sessionStorage.setItem('formData', JSON.stringify(data));
  console.log('Form data stored in session storage:', data);
}

// Add event listeners to the forms
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  storeFormDataInSessionStorage(signUpForm);
});

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  storeFormDataInSessionStorage(signInForm);
});
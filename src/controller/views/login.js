import view from "./../../views/login.html";
import { toggleModal, togglePasswordVisibility } from './../util'
import { router, routes } from "./../../router";

// Page
const page = document.createElement('div');
page.innerHTML = view;

// Wrappers
const loginWrapper = page.querySelector('#loginWrapper');
const signupWrapper = page.querySelector('#signupWrapper');

// Event listeners
page.querySelector('#goToSignup').addEventListener('click', () => {
  toggleModal(loginWrapper, signupWrapper);
});

page.querySelector('#goToLogin').addEventListener('click', () => {
  toggleModal(loginWrapper, signupWrapper);
});

const signupEye = page.querySelector('#signupVisibility');
signupEye.addEventListener('click', (e) => {
  e.preventDefault();
  togglePasswordVisibility(page.querySelector('#signupPassword'), signupEye);
});

const loginEye = page.querySelector('#loginVisibility');
loginEye.addEventListener('click', (e) => {
  e.preventDefault();
  togglePasswordVisibility(page.querySelector('#loginPassword'), loginEye);
});

// Export
export function login() {
  return page;
}
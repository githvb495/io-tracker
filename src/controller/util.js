export function toggleModal(hide, show = null) {
  hide.classList.toggle('flex');
  hide.classList.toggle('hidden');

  if (show) {
    show.classList.toggle('hidden');
    show.classList.toggle('flex');
  }
};

export function togglePasswordVisibility(input, eye) {
  if (input.type === 'password') {
    input.setAttribute('type', 'text');
    eye.innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';
  }
  else {
    input.setAttribute('type', 'password');
    eye.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
  }
};

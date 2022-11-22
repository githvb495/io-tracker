import { pages } from '../controller';

const root = document.querySelector('body div#root');

const routes = {
  login: 'login',
};

function router(route) {
  root.innerHTML = '';
  
  switch (route) {
    case routes.login:
      return root.appendChild(pages.login());
  }
}

export { router, routes };
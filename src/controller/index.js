// Project setup (initApp)
import { authStateListener } from './../model/auth';
import { router, routes } from '../router';
// Pages
import { login } from './views/login';
import { dashboard } from './views/dashboard';

export const pages = {
  login,
  dashboard
};

export const initApp = () => {
  router(routes.login);
};

import view from "./../../views/dashboard.html";
import { router, routes } from "./../../router";

// Page
const page = document.createElement('div');
page.innerHTML = view;

export function dashboard() {
  return page;
}
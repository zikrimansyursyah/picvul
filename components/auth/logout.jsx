export default function Logout() {
  sessionStorage.removeItem("logged");
  sessionStorage.removeItem("email");
  window.location = "/";
}

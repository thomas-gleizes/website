import Home from "pages/Home";
import Error404 from "pages/Error404";

export const routes: route[] = [
  { path: "/", component: Home },
  { path: "/", component: Error404 },
];

export const projects: item[] = [{ label: "Kanime", url: "https://kanime.thomasgleizes.fr" }];

export const links: item[] = [
  { label: "Github", url: "https://github.com/thomas-gleizes" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/thomas-gleizes-a259bb170" },
  { label: "Instagram", url: "https://www.instagram.com/thomasglzs" },
];

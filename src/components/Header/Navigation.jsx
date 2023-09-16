import { NavLink } from "react-router-dom";

import css from "./Header.module.css"

export const Navigation = () => {
  
    return (
      <nav className={css.navContainer}>
        <NavLink className={css.navLink} to="/">Home</NavLink>
        < NavLink className={css.navLink} to="/catalog">Catalog</NavLink>
        < NavLink className={css.navLink} to="/favorites">Favorites</NavLink>
      </nav>
    );
  };
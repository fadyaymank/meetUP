import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup"> Add new Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              {" "}
              My Favourites
              <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;

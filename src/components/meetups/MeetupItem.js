import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classses from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavourte = favoritesCtx.itemFavorite(props.id);
  function toggleFavoriteHandler() {
    if (itemIsFavourte) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        descrition: props.descrition,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classses.item}>
      <Card>
        <div className={classses.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classses.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classses.actions}>
          <button onClick={toggleFavoriteHandler}>
            {itemIsFavourte ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;

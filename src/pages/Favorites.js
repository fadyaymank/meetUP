import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites == 0) {
    content = <p>You have no favorites yes ! Start adding some ?</p>;
  } else {
   content= <MeetupList meetups={favoritesCtx.favorites}></MeetupList>;
  }
  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}
export default Favorites;

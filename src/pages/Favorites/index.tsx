import { useContext, useEffect } from "react";
import { NewsProps } from "../../types";
import Card from "../../components/Card";
import NewsContext from "../../context/NewsContext";
import styles from './favorites.module.css';

function Favorites () {
    const { favorites, setFavorites } = useContext(NewsContext);

    useEffect(() => {
        const getFavorites = () => {
            const existingFavorites = localStorage.getItem('favorites');
            const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
            return favorites;
        }
        setFavorites(getFavorites());
    }, [setFavorites]);
    return (
        <div className={ styles.favoritesContainer }>
         {favorites?.length !== 0  ? favorites?.map((favorite: NewsProps) => ( 
            <Card 
                key={favorite.idCurr}
                title={favorite.title} 
                description={favorite.description} 
                url={favorite.url} 
                date={favorite.date} 
                idCurr={favorite.idCurr} 
            />
         ))
         : <h2 className={ styles.messageFavorites }>Você ainda não adicionou nenhum favorito</h2>
         }
        </div>
    )
}

export default Favorites;
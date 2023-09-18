import { useEffect, useState } from "react";
import { NewsProps } from "../../types";
import Card from "../../components/Card";
import styles from './favorites.module.css';

function Favorites () {
    const [favorites, setFavorites] = useState<NewsProps[]>([]);

    useEffect(() => {
        const getFavorites = () => {
            const existingFavorites = localStorage.getItem('favorites');
            const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
            return favorites;
        }
        setFavorites(getFavorites());
    }, []);
    return (
        <div className={ styles.favoritesContainer }>
         {favorites.map((favorite: NewsProps) => ( 
            <Card 
                key={favorite.idCurr}
                title={favorite.title} 
                description={favorite.description} 
                url={favorite.url} 
                date={favorite.date} 
                idCurr={favorite.idCurr} 
            />
         ))}
        </div>
    )
}

export default Favorites;
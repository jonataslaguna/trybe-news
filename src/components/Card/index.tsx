import { useContext, useEffect, useState } from "react";
import { NewsProps } from "../../types";
import NewsContext from "../../context/NewsContext";


import styles from './card.module.css';

function Card({ title, description, url, date, idCurr }: NewsProps){
  const[ isLocalFavorite, setIsLocalFavorite ] = useState<boolean>(false);
  const { dateFormat, setFavorites } = useContext(NewsContext);


  useEffect(() => {
    const isCardInFavorites = () => {
      const existingFavorites = localStorage.getItem('favorites');
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
      return favorites.some((favorite: NewsProps) => favorite.idCurr === idCurr);
    };
    setIsLocalFavorite(isCardInFavorites());
  }, [idCurr]);

  const handleClickFavorite = () => {
    setIsLocalFavorite(!isLocalFavorite);
    const existingFavorites = localStorage.getItem('favorites');
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    
    const newFavorite = { title, description, url, date, idCurr };

    const upDateFavorites = favorites.filter((favorite: NewsProps) => favorite.idCurr !== idCurr);

    if(!isLocalFavorite) {
      upDateFavorites.push(newFavorite);
    }

    localStorage.setItem('favorites', JSON.stringify(upDateFavorites));
    setFavorites(upDateFavorites);

  };


  const timeAgo = dateFormat(date);

 
  return (
    <div className={ styles.card }>
      <h3>{title}</h3>
      <p className={ styles.description }>{description}</p>
        <div className={ styles.cardInfos }>
          <p>{ timeAgo }</p>
          <a href={url} target="_blank">Leia a notícia aqui</a>
        </div>
          <button 
            className={ styles.favorite }
            onClick={ handleClickFavorite }
         >
          <img src={isLocalFavorite ? '/images/favorite-true.png' : '/images/favorite_false.png'} alt="favotite" />
        </button>
    </div>
  )
}

export default Card;
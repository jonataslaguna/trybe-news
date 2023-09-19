import { NewsProps } from "../../types";
import NewsContext from "../../context/NewsContext";
import { useContext, useEffect, useState } from "react";
import styles from './latestNews.module.css';

function LatestNews ({ title, description, image, url, date }: NewsProps) {
  const { dateFormat } = useContext(NewsContext);
  const [ timeAgo, setTimeAgo ] = useState<string | undefined>('');

  useEffect(() => {
    const getTimeAgo = dateFormat(date);
    setTimeAgo(getTimeAgo);
  }, [date, dateFormat])

 
    return (
      <div className={ styles.cardContainer }>
      <img src={`https://agenciadenoticias.ibge.gov.br/${image}`} alt={title} /> 
        <div className={ styles.cardInfos }>
          <p className={ styles.lastestNew }>Noticia mais recente</p>
            <h2>{title}</h2>
            <p>{description}</p>
          <div className={ styles.cardLinkAndDate }>
            <p>{ timeAgo }</p>
            <a href={url} target="_blank">Leia a notícia aqui</a>
          </div>
        </div>
      </div>
    )
}

export default LatestNews; 
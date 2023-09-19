import NewsContext from "../../context/NewsContext";
import { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import { NewsData } from "../../types";

import styles from './typeNews.module.css';

function TypeNews() {
    const { news } = useContext(NewsContext);
    const [typeNews, setTypeNews] = useState<NewsData[]>([]);

    useEffect(() => {
        const newsFilter = news.filter((item) => item.tipo === 'Notícia');
        setTypeNews(newsFilter);
    }, [news]);

  return (
    <div className={ styles.typeNewsContainer }>
      {
        typeNews?.map((item) => (
          <Card 
            key={item.id}
            title={item.titulo} 
            description={item.introducao} 
            url={item.link} 
            date={item.data_publicacao} 
            idCurr={item.id} 
          />
        ))
      }
    </div>
    );
}

export default TypeNews
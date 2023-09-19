import { useContext, useEffect, useState } from "react";
import NewsContext from "../../context/NewsContext";
import Card from "../../components/Card";
import { NewsData } from "../../types";

import styles from './release.module.css';

function Release() {
    const { news } = useContext(NewsContext);
    const [releaseNews, setReleaseNews] = useState<NewsData[]>([]);

    useEffect(() => {
        const newsFilter = news.filter((item) => item.tipo === 'Release');
        setReleaseNews(newsFilter);
    }, [news]);

  return (
    <div className={ styles.releaseContainer }>
      {
        releaseNews?.map((item) => (
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

export default Release;
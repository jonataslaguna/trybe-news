import Card from "../../components/Card";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";
import styles from './news.module.css';

function News() {
    const { news } = useContext(NewsContext);
    return (
        <div className={ styles.cardsContainer }>
          {news?.slice(1, 11).map((item) => (
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
    )
}

export default News;
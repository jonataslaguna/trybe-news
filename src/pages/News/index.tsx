import Card from "../../components/Card";
import NewsContext from "../../context/NewsContext";
import { useContext, useState } from "react";
import styles from './news.module.css';

function News() {
    const { news } = useContext(NewsContext);
    const [numToShow, setNumToShow] = useState(13);

    const toggleShowAll = () => {
      setNumToShow((prev) => prev + 13);
    };

    return (
      <>
        <div className={ styles.cardsContainer }>
          {news?.slice(1, numToShow).map((item) => (
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
        {numToShow < news?.length && (
            <button onClick={toggleShowAll} className={ styles.buttonMoreNews }>
              Mais Notícias
            </button>
          )}
      </>
    )
}

export default News;
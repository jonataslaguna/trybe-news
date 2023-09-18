import { useContext, useEffect, useState} from "react";
import LatestNews from "../../components/LatestNews";
import News from "../News";
import NewsContext from "../../context/NewsContext";
import Favorites from "../Favorites";

function Home() {
    const { news } = useContext(NewsContext);
    const [btn, setBtn] = useState<string>('latestNews');
    const [imageNews, setImageNews] = useState<string>('');

    const handleClick = (page: string) => {
      if(page === 'favorites') {
        setBtn('favorites');
      }else {
        setBtn('latestNews');
      }
    }

    useEffect(() => {
        if(news && news[0]?.imagens) {
          const getImageLink = async () => {
            const imageNewsLink = await JSON.parse(news[0]?.imagens)?.image_fulltext || "";
          setImageNews(imageNewsLink);
          };
          getImageLink();
        }
    }, [news]);
   
    return (
    <div>
       {news && 
          <LatestNews 
            title={news[0]?.titulo} 
            description={news[0]?.introducao} 
            url={news[0]?.link} 
            image={imageNews}
            date={news[0]?.data_publicacao}
            idCurr={news[0]?.id}
          />
        } 
         <nav>
          <button onClick={() => handleClick('latestNews') }>Mais recentes</button>
          <button onClick={ () => handleClick('favorites') }>Favoritas</button>
        </nav>
        {btn === 'latestNews' ? <News /> : <Favorites />}
       
    </div>
    )
}

export default Home;
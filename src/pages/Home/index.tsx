import { useContext, useState} from "react";
import MostRecentNew from "../../components/MostRecentNew";
import MostRecents from "../MostRecent";
import NewsContext from "../../context/NewsContext";
import Favorites from "../Favorites";

function Home() {
    const { news } = useContext(NewsContext);
    const [btn, setBtn] = useState<string>('mostRecent');

    const handleClick = (page: string) => {
      if(page === 'favorites') {
        setBtn('favorites');
      }else {
        setBtn('mostRecent');
      }
    }
    return (
    <div>
       {news && 
          <MostRecentNew 
            title={news[0]?.titulo} 
            description={news[0]?.introducao} 
            url={news[0]?.link} 
            image={news[0]?.imagens}
            date={news[0]?.data_publicacao}
            idCurr={news[0]?.id}
          />
        } 
         <nav>
          <button onClick={() => handleClick('mostRecent') }>Mais recentes</button>
          <button onClick={ () => handleClick('favorites') }>Favoritas</button>
        </nav>
        {btn === 'mostRecent' ? <MostRecents /> : <Favorites />}
       
    </div>
    )
}

export default Home;
import Card from "../Card";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";

function MostRecents() {
    const { news } = useContext(NewsContext);
    return (
        <div>
          {news?.slice(1, 9).map((item) => (
            <Card 
              key={item.id}
              title={item.titulo}
              description={item.introducao}
              url={item.link}
              date={item.data_publicacao}
            />
             ))
            }
        </div>
    )
}

export default MostRecents;
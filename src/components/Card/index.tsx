function Card({ title, description, url, date}: {title: string, description: string, url: string, date: string}){

  const dateParts = date?.split(/[\s/:-]+/);
  const newsDate = dateParts ? new Date(
    Number(dateParts[2]), 
    Number(dateParts[1]) - 1, 
    Number(dateParts[0]), 
    Number(dateParts[3]),  
    Number(dateParts[4]), 
    Number(dateParts[5])   
  ): new Date();
  const currentDate = new Date();
  const timeDifference = Math.round((currentDate.getTime() - newsDate.getTime()) / (1000 * 60 * 60 * 24));

  const formatTimeAgo = (timeAgo: number) => {
    const seconds = timeAgo * 24 * 60 * 60;
    const minutes = timeAgo * 24 * 60;
    const hours = timeAgo * 24;
    const days = timeAgo;

    if (seconds < 60) {
      return `${seconds} segundos atrás`;
    }else if (minutes < 60) {
      return `${minutes} minutos atrás`;
    }else if (hours < 24) {
      return `${hours} horas atrás`;
    }else {
      return `${days} dias atrás`;
    }
  };

  const timeAgo = formatTimeAgo(timeDifference);
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
        <div>
          <p>{ timeAgo }</p>
          <a href={url} target="_blank">Leia a notícia aqui</a>
        </div>
    </div>
  )
}

export default Card;
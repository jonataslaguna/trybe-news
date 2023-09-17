export const getNews = async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
    const data = await response.json();
    return data
};
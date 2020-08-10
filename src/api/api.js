const URLS = {
    episodes: "https://rickandmortyapi.com/api/episode/?"
  };
  
  const getData = async url => {
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    return response.json();
  };
  
  const createLinkForRequest = (objAttributes, url) => {
    const searchParams = new URLSearchParams(objAttributes);
  
    return url + searchParams.toString();
  };
  
  export const getEpisodes = (objAttributes, url = URLS.episodes) => {
    const createdUrl = createLinkForRequest(objAttributes, url);
    const data = getData(createdUrl);
  
    return data;
  };
  
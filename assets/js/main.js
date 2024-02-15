document.addEventListener('DOMContentLoaded', async () => { 
  const penasPath = 'assets/data/penas.json';

  const getData = async (path) => {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  }

  const penas = await getData(penasPath);
  console.log(penas);
});
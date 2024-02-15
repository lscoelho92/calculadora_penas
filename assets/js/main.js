document.addEventListener('DOMContentLoaded', async () => { 
  const penasPath = 'assets/data/penas.json';
  const buttonChoiceAtq = document.getElementById('btn-choice-atq');


  const selectAtq1 = document.getElementById('labelPenasAtq1');

  const containerAtaque = document.getElementById('container-choice-ataque');
  const containerDefesa = document.getElementById('container-choice-defesa');

  const getData = async (path) => {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  }

  const showContainer = () => {
    console.log('test');
  }

  const penas = await getData(penasPath);

  buttonChoiceAtq.addEventListener('click', () => {
    showContainer();
  })

  selectAtq1.addEventListener('change', () => {
    showContainer();
  })

  showContainer();
});
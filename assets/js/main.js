document.addEventListener('DOMContentLoaded', async () => {
  const penasPath = 'assets/data/penas.json';
  const buttonChoiceAtq = document.getElementById('btn-choice-atq');
  const buttonChoiceDef = document.getElementById('btn-choice-def');

  const containerAtaque = document.getElementById('container-choice-ataque');
  const containerDefesa = document.getElementById('container-choice-defesa');

  const getData = async (path) => {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  };

  const showAtaqueContainer = () => {
    containerAtaque.classList.remove('hidden');
    containerDefesa.classList.add('hidden');
      };

  const showDefesaContainer = () => {
    containerAtaque.classList.add('hidden');
    containerDefesa.classList.remove('hidden');
      };

  const penas = await getData(penasPath);

  buttonChoiceAtq.addEventListener('click', showAtaqueContainer);
  buttonChoiceDef.addEventListener('click', showDefesaContainer);


  hideContainers();
});
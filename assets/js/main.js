document.addEventListener('DOMContentLoaded', async () => { 
  const penasPath = 'assets/data/penas.json';
  const buttonChoiceAtq = document.getElementById('btn-choice-atq');
  const buttonChoiceDef = document.getElementById('btn-choice-def');

  const containerAtaque = document.getElementById('container-choice-ataque1');
    const containerValk1 = document.getElementById('valk1');  
    const containerValk2 = document.getElementById('valk2');
    const containerValk3 = document.getElementById('valk3');
    const containerValk4 = document.getElementById('valk4');
    const containerValk5 = document.getElementById('valk5');

  
    
  const containerDefesa = document.getElementById('container-choice-defesa');
    const containerValk6 = document.getElementById('valk6');  
    const containerValk7 = document.getElementById('valk7');
    const containerValk8 = document.getElementById('valk8');
    const containerValk9 = document.getElementById('valk9');
    const containerValk10 = document.getElementById('valk10');




  const getData = async (path) => {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  }

  const showAtaqueContainer = () => {
    containerAtaque.classList.remove('hidden');
    containerDefesa.classList.add('hidden');
    containerValk1.classList.remove('hidden');
    containerValk2.classList.remove('hidden');
    containerValk3.classList.remove('hidden');
    containerValk4.classList.remove('hidden');
    containerValk5.classList.remove('hidden');
    containerValk6.classList.add('hidden');
    containerValk7.classList.add('hidden');
    containerValk8.classList.add('hidden');
    containerValk9.classList.add('hidden');
    containerValk10.classList.add('hidden');
  }

  const showDefesaContainer = () => {
    containerAtaque.classList.add('hidden');
    containerDefesa.classList.remove('hidden');
    containerValk1.classList.add('hidden');
    containerValk2.classList.add('hidden');
    containerValk3.classList.add('hidden');
    containerValk4.classList.add('hidden');
    containerValk5.classList.add('hidden');
    containerValk6.classList.remove('hidden');
    containerValk7.classList.remove('hidden');
    containerValk8.classList.remove('hidden');
    containerValk9.classList.remove('hidden');
    containerValk10.classList.remove('hidden');
    
  }

  const hideContainers = () => {
    containerAtaque.classList.add('hidden');
    containerDefesa.classList.add('hidden');
    containerValk1.classList.add('hidden');
    containerValk2.classList.add('hidden');
    containerValk3.classList.add('hidden');
    containerValk4.classList.add('hidden');
    containerValk5.classList.add('hidden');
    containerValk6.classList.add('hidden');
    containerValk7.classList.add('hidden');
    containerValk8.classList.add('hidden');
    containerValk9.classList.add('hidden');
    containerValk10.classList.add('hidden');
      }

  const penas = await getData(penasPath);

  buttonChoiceAtq.addEventListener('click', () => {
    showAtaqueContainer();
  });

  buttonChoiceDef.addEventListener('click', () => {
    showDefesaContainer();
  });

  hideContainers();
});
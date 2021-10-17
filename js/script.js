console.log ('test');

let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

// let wrp = document.getElementById('wrp');

button.addEventListener('click', function(){ 
  navigation.classList.toggle('show');
//   wrp.classList.toggle('display-block');
});
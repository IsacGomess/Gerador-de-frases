// variables //
let openBtn = document.getElementById("open-btn");
let modal = document.getElementById("modal-container");
let closeBtn = document.querySelector("#close-btn");
let containerInput = document.querySelector(".input");
let buttonName = document.querySelector(".name");
let inputName = document.querySelector(".input-Name");
let buttonOption = document.querySelector(".container");
let divFrase = document.querySelector(".frase");
// events listeners

openBtn.addEventListener("click", function () {
  modal.style.display = "block";
  containerInput.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  containerInput.style.display = "none";
});

function Keycode(event) {
  if (event.keyCode === 13 && inputName.value.length > 0) {
    saveName();
  }
} 

/*saving name and chose prase*/
const saveName = () => {
  let liName = document.createElement("li");
  liName.innerText = `${inputName.value} Choose above, which type of phrase do you want... `;
  divFrase.append(liName);
  inputName.value = "";
  modal.style.display = "none";
  containerInput.style.display = "none";
  buttonOption.style.display = "flex";
};

inputName.addEventListener("keypress", Keycode);
buttonName.addEventListener("click", saveName);

// frases   //

/*Intellect*/
const phrases3 = [
  {
    "id" : 1,
    "autor" : "Stephen Hawking",
    "frase" : "Inteligência é a capacidade de se adaptar à mudança"
  },
  {
    "id" : 2,
    "autor" : "Henry Ford",
    "frase" : "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência."
  },
  {
    "id" : 3,
    "autor" : "Aristóteles",
    "frase" : "Nunca existiu uma grande inteligência sem uma veia de loucura."
  },
  {
    "id" : 4,
    "autor" : "Johann Goethe",
    "frase" : "O homem que sabe reconhecer os limites da sua própria inteligência está mais perto da perfeição."
  },
  {
    "id" : 5,
    "autor" : "Honoré de Balzac",
    "frase" : "O tempo é o único capital das pessoas que têm como fortuna apenas a sua inteligência"
  }];

/*Knowledge*/

const phrases2 = [
  {
    "id" : 1,
    "autor" : "Sun Tzu",
    "frase" : "A evolução do Homem passa, necessariamente, pela busca do conhecimento"
  },
  {
    "id" : 2,
    "autor" : "Thomas Jefferson",
    "frase" : "Quando o mundo estiver unido na busca do conhecimento, e não mais lutando por dinheiro e poder, então nossa sociedade poderá enfim evoluir a um novo nível."
  },
  {
    "id" : 3,
    "autor" : "Nietzsche",
    "frase" : "Desce a contragosto em suas águas aquele que busca o conhecimento."
  },
  {
    "id" : 4,
    "autor" : "Textos Islâmicos",
    "frase" : "Quem busca o conhecimento e o acha, obterá dois prémios: um por procurá-lo, e outro por achá-lo. Se não o encontrar, ainda restará o primeiro prémio."
  },
  {
    "id" : 5,
    "autor" : "Lourenço António Mendonça",
    "frase" : "Na busca do conhecimento, somos meros pioneiros e ingénuos, basta uma dose de paciência e humildade, para levantarmos a bandeira do triunfo."
  },
  {
    "id" : 6,
    "autor" : "bemestarbemblog",
    "frase" : "Mais importante que o conhecimento, é o ato de ir buscá-lo."
  },
  {
    "id" : 7,
    "autor" : "Cristiano Ricardo",
    "frase" : "Enquanto muitos buscam dinheiro e fama a qualquer custo,poucos buscam conhecimento e sabedoria sem custo algum"
  },
  {
    "id" : 8,
    "autor" : "Rafael Mesquita",
    "frase" : "A ignorância é o comodismo que nos cega e a busca pelo conhecimento é a dor que nos liberta."
  },
  {
    "id" : 9,
    "autor" : "Andre Saut",
    "frase" : "Duvida não é ignorância, é motivação para a busca do conhecimentos"
  },
  {
    "id" : 10,
    "autor" : "Jean Paul Sartre",
    "frase" : "A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz"
  }];

/*Motivation*/
const phrases = [
  {
    "id" : 1,
    "autor" : "Duke Ellington",
    "frase" : "Os problemas são oportunidades para se mostrar o que sabe."
  },
  {
    "id" : 2,
    "autor" : "Henry Ford",
    "frase" : "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos."
  },
  {
    "id" : 3,
    "autor" : "Samuel Beckett",
    "frase" : "Tente de novo. Fracasse de novo. Mas fracasse melhor"
  },
  {
    "id" : 4,
    "autor" : "Sócrates",
    "frase" : "É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo"
  },
  {
    "id" : 5,
    "autor" : "W. F. Grenfel",
    "frase" : "O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido"
  },
  {
    "id" : 6,
    "autor" : "Norman Bawes",
    "frase" : "Cada cliente é como se fosse primeiro e único"
  },
  {
    "id" : 7,
    "autor" : "Santo Agostinho",
    "frase" : "Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer"
  },
  {
    "id" : 8,
    "autor" : "Ciclo dos Profissionais de Venda",
    "frase" : "Vender é construir uma ponte entre você e seu cliente e fazê-lo atravessar para o seu lado"
  },
  {
    "id" : 9,
    "autor" : "Churton Collins",
    "frase" : "Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos"
  },
  {
    "id" : 10,
    "autor" : "Jean Paul Sartre",
    "frase" : "A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz"
  }];

/*variables of prases */

let Motivation = document.getElementById("button-prase");
let Knowledge = document.getElementById("button-prase2");
let Intellect = document.getElementById("button-prase3");

/*Events for show prase*/
Motivation.addEventListener('click',function(){
  let random = Math.floor(Math.random() * phrases.length)
 
  divFrase.textContent = `${phrases[random].frase} - ${phrases[random].autor}`
  openBtn.style.display = 'none'
});

Knowledge.addEventListener('click',function(){
  let random = Math.floor(Math.random() * phrases2.length)
 
  divFrase.textContent = `${phrases2[random].frase} - ${phrases2[random].autor}`
  openBtn.style.display = 'none'
});

Intellect.addEventListener('click',function(){
  let random = Math.floor(Math.random() * phrases3.length)
 
  divFrase.textContent = `${phrases3[random].frase} - ${phrases3[random].autor}`
  openBtn.style.display = 'none'
});

/* adicionando Bg color no no li */

document.querySelector('.container').addEventListener('click',function(e){
  let target = e.target
  if(target.matches('.btn')){
    divFrase.style.background = "rgba(211,211,211,0.5)";
  }
});

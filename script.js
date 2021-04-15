const cardWrapperEl = document.querySelector(".cards__wrapper");
let index = 1;

const colorsType = [
  {
    type: "grass",
    color: "#DEFDE0",
  },
  {
    type: "fire",
    color: "#FDDFDF",
  },
  {
    type: "water",
    color: "#DEF3FD",
  },
  {
    type: "bug",
    color: "#F8D5A3",
  },
  {
    type: "poison",
    color: "#98D7A5",
  },
  {
    type: "flying",
    color: "#98D7A5",
  },
  {
    type: "electric",
    color: "#FCF7DE",
  },
  {
    type: "normal",
    color: "#F5F5F5",
  },
  {
    type: "ground",
    color: "#D7D7BD",
  },
  {
    type: "fairy",
    color: "#FCEAFF",
  },
];

const fetchPokemons = async (i) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  const pokemon = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  displayPokemon(pokemon, i);
};

const displayPokemon = (pokemon, i) => {
  const urlImg = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;
  const id = pokemon.id;
  const name = pokemon.name;
  const type = pokemon.types[0].type.name;
  const colorType = colorsType.filter((el) => el.type === type);
  const color = colorType[0] ? colorType[0].color : "#defde0;";

  const formatedId =
    "#" +
    id.toLocaleString("en-US", {
      minimumIntegerDigits: 3,
      useGrouping: false,
    });

  const pokEl = document.createElement("div");
  pokEl.classList.add("card");
  pokEl.style.background = color;

  pokEl.innerHTML = `
        <div class="img__wrapper">
            <img src="${urlImg}" alt="" />
            </div>
            <div class="index">${formatedId}</div>
            <h3 class="name">${name}</h3>
            <p class="type">Type: ${type}</p>
        </div>
    `;
  cardWrapperEl.appendChild(pokEl);

  if (index === 150) return;
  index++;
  fetchPokemons(index);
};

fetchPokemons(index);

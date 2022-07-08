// fetch('https://github.com/fanzeyi/pokemon.json/blob/master/pokedex.json')
// .then(response => response.json())
// .then(data => console.log(data))

// fetch("https://github.com/fanzeyi/pokemon.json")
// .then(function(resp) {
//     return resp.json();

// })

// .then(function(data) {
//     console.log(data[1])
// })

// const poke_container = document.getElementById('poke_container');
// const poke_number = 150;

// const getPoke = () => {
//     const file = 

// }

// getPoke();

// fetch("./")

// const getPoke = async id => {
//     const url = 'https://github.com/fanzeyi/pokemon.json/${id}';
//     const res = await fetch(url);
//     const pokemon = pokedex.json();
//     console.log(pokemon);
//     const cors = require("cors")
//     res.use(cors({
//         origin: 'http://127.0.0.1:5500',
//     }))
// }
// getPoke(1);

const pokedex = document.getElementById("pokedex")

console.log(pokedex)

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
promises.push(fetch(url).then(( res) => res.json()));

}

Promise.all(promises).then( results => {
const pokemon = results.map(data => ({

    name: data.name,
    id: data.id,
    image: data.sprites['front_default'],
    type: data.types
        .map((type) => type.type.name).join(', ')


    }))
    displayPokemon(pokemon)
})

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTML = pokemon.map (pokeman => ` 
    <li class = "card">
    <img class = "card-image" src ="${pokeman.image}"/> 
    <h2 class = "card-title"> ${pokeman.id}. ${pokeman.name}</h2> 
    <p class = "card-subtitle">Type: ${pokeman.type}</p>
    </li>
    `
    
    )
    .join('')

    pokedex.innerHTML = pokemonHTML;
}

// .then( data => {
//     console.log(data)
    
//     const pokemon = {
//         name: data.name,
//         id: data.id,
//         image: data.sprites['front_default'],
//         type: data.types
//             .map((type) => type.type.name).join(', ')

//     };
//         console.log(pokemon)
        

// })


// pokemon['name'] = data.name
    // pokemon['id'] = data.id
    // pokemon['image'] = data.sprites['front_default']
    // pokemon['type'] = ''
    // data.types.forEach((type) =>{
    //     pokemon['type'] = pokemon['type'] + ', ' +
    //     type.type.name
    // })

//pokemon['type'] = data.types.map(type => type.type.name).join(", ")
    
}

//DROPDOWN!!

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }



fetchPokemon();



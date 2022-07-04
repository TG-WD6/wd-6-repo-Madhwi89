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

const poke_container = document.getElementById('poke_container');
const poke_number = 150;

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

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
promises.push(fetch(url).then(( res) => res.json()));

}

Promises.all(promises).then( results => {
    
} )

.then( data => {
    console.log(data)
    
    const pokemon = {
        name: data.name,
        id: data.id,
        image: data.sprites['front_default'],
        type: data.types
            .map((type) => type.type.name).join(', ')

    };
        console.log(pokemon)
        

})
    
}

fetchPokemon();


// pokemon['name'] = data.name
    // pokemon['id'] = data.id
    // pokemon['image'] = data.sprites['front_default']
    // pokemon['type'] = ''
    // data.types.forEach((type) =>{
    //     pokemon['type'] = pokemon['type'] + ', ' +
    //     type.type.name
    // })

//pokemon['type'] = data.types.map(type => type.type.name).join(", ")
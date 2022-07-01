// fetch('https://github.com/fanzeyi/pokemon.json/blob/master/pokedex.json')
// .then(response => response.json())
// .then(data => console.log(data))

fetch("https://github.com/fanzeyi/pokemon.json")
.then(function(resp) {
    return resp.json();

})

.then(function(data) {
    console.log(data[1])
})
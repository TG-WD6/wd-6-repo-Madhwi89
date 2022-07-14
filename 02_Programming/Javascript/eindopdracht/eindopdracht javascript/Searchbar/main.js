const input = "Madhwi"

search.addEventListener("keyup", (e) => {

    const searchInput = document.getElementsByClassName('.search_results')
    console.log(input)
})




// // Write a local item..
// window.localStorage.setItem("myKey", "myValue");

// // Read a local item..
// var theItemValue = window.localStorage.getItem("myKey");

// // Check for changes in the local item and log them..
// window.addEventListener('storage', function(event) {
//     console.log('The value for ' + event.key + ' was changed from' + event.oldValue + ' to ' + event.newValue);
// }, false);

// // Check for HTML5 Storage..
// function supports_html5_storage() {
//     try {
//         return 'localStorage' in window && window['localStorage'] !== null;
//     } catch (e) {
//         return false;
//     }
// }

// const searchOptions = [
//     {'Techgrounds'},
//     {'Webdeveloper'},
//     {'HTML'},
//     {'CSS'},
//     {'Javascript'}
// ]














// const searchInput = document.getElementById('search')

// const results = document.getElementById('search_results')

// searchInput.addEventListener('keyup', (event) => {
//     const { value } = event.target
    


// const searchQuery = value.toLowerCase();

// for (const nameElement of results) {
//     // store name text and convert to lowercase
//     let name = nameElement.textContent.toLowerCase();

//     // compare current name to search input
//     if (name.includes(searchQuery)) {
//         // found name matching search, display it
//         nameElement.style.display = "block";
//     } else {
//         // no match, don't display name
//         nameElement.style.display = "none";
//     }
// }
// });



// searchInput.addEventListener('input', () => {
    
//     console.log(searchTopics)
// })

// let searchButton = document.querySelector(".search_icon")

// searchButton.addEventListener("click", function(){
//     alert("adsf")
// })


// const input = [] 

// search.addEventListener("event type", () => {

//     const searchInput = document.getElementsByClassName('.search_results')
// })


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

const searchOptions = [
    {'Techgrounds'},
    {'Webdeveloper'},
    {'HTML'},
    {'CSS'},
    {'Javascript'}
]

const searchInput = document.getElementById('search')

searchInput.addEventListener('input', () => {
    console.log('input event worked')
})
let searchResults = document.getElementsByClassName(".search_results");

let searchButton = document.querySelector(".search_icon");

searchButton.addEventListener("click", function () {
  const clickButton = document.getElementById("search");
  toevoegenStorage(clickButton.value);
});

const search = document.getElementById("search");

//vergelijking tussen input en storage
search.oninput = handleInput;

function handleInput(e) {
  console.log(e);

  let search = e.target.value;

  const searchTerms = Object.values(localStorage);
  const showResults = document.createElement("div");
  showResults.classList.add("search_results");
  const searchContainer = document.querySelector(".search_container");
  searchContainer.lastElementChild.remove()
  if (search =="") {
    showResults.style.visibility = "hidden"
  }
  else if (search > 0) {
    search.style.borderBottom = "0px"
  }

  for (let x = 0; x < searchTerms.length; x++) {
    if (searchTerms[x].includes(search) == true) {
      console.log(searchTerms[x]);

      const spanResult = document.createElement("span");
      spanResult.textContent = searchTerms[x];
      showResults.appendChild(spanResult);
      console.log(showResults);
    }
  }
  
  searchContainer.appendChild(showResults);
  console.log(searchContainer);
}

function toevoegenStorage(input) {
  
  const key = localStorage.length+1
  if (localStorage.length ==0) {
    
  localStorage.setItem(key, input); 
}
else {
    for (const index in localStorage) {
        if (localStorage[index] ===input){
            return
        }
        else {
            localStorage.setItem(key, input)
        }
    }
}

}

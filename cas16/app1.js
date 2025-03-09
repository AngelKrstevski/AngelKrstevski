const API = `./api.json`;
const API_FROM_INTERNET = `https://jsonplaceholder.typicode.com/todos`;

let getDataBtn = document.querySelector(`#getDataBtn`);

getDataBtn.addEventListener(`click`, function() {
    getData(API_FROM_INTERNET);
})

function getData(data) {
    fetch(data)
    .then(result => result.json())
    .then(dataResult => console.log(dataResult))
}
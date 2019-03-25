window.onload = function() {
    document.getElementById("art").addEventListener('click',fetchArt);
    document.getElementById("funny").addEventListener('click',fetchFunny);
    document.getElementById("inspiration").addEventListener('click',fetchInspiration);
    document.getElementById("life").addEventListener('click',fetchLife);
    document.getElementById("love").addEventListener('click',fetchLove);
    document.getElementById("management").addEventListener('click',fetchManagement);
    document.getElementById("sports").addEventListener('click',fetchSports);
    document.getElementById("students").addEventListener('click',fetchStudents);
};

function fetchArt(){
    fetch("http://quotes.rest/qod.json?category=art", {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
    .catch((error) => {
        alert('Failed to load Art quote of the day');
        console.log(error);
       });
}

function fetchFunny(){
    fetch("http://quotes.rest/qod.json?category=funny", {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
    .catch((error) => {
        alert('Failed to load Funny quote of the day');
        console.log(error);
       });
}
function fetchInspiration(){
    fetch("http://quotes.rest/qod.json?category=inspire", {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
    .catch((error) => {
        alert('Failed to load Inspiration quote of the day');
        console.log(error);
       });
}
function fetchLife(){
    fetch("http://quotes.rest/qod.json?category=life", {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
    .catch((error) => {
        alert('Failed to load Life quote of the day');
        console.log(error);
       });
}
function fetchLove(){
    fetch("http://quotes.rest/qod.json?category=love", {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
    .catch((error) => {
        alert('Failed to load Love quote of the day');
        console.log(error);
       });
}
function fetchManagement(){
    fetch("http://quotes.rest/qod.json?category=management", {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
    .catch((error) => {
        alert('Failed to load Management quote of the day');
        console.log(error);
       });
}
function fetchSports(){
    fetch("http://quotes.rest/qod.json?category=sports", {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
    .catch((error) => {
        alert('Failed to load Sports quote of the day');
        console.log(error);
       });
}
function fetchStudents(){
    fetch("http://quotes.rest/qod.json?category=students", {method:"GET", headers:{"Accept":"application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        atStart(data);
    })
    .catch((error) => {
        alert('Failed to load Students quote of the day');
        console.log(error);
       });
}

    function atStart(data){
        // let quoteCategory = document.getElementById("quoteCategory");
        // quoteCategory.innerHTML = data.contents.quotes[0].category;

        let quoteTitle = document.getElementById("quoteTitle");
        quoteTitle.innerHTML = data.contents.quotes[0].title;

        let quote = document.getElementById("quote");
        quote.innerHTML = data.contents.quotes[0].quote;

        let author = document.getElementById("author");
        author.innerHTML = "- " + data.contents.quotes[0].author;

        let date = document.getElementById("date");
        date.innerHTML = data.contents.quotes[0].date;
        
    }
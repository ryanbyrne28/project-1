
const $newJoke = $('#joke')

$('#btn').on('click', handleGetData);

// const joke = document.createElement('joke')
// const joke = document.querySelector('.joke')


function handleGetData(event) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://jokeapi-v2.p.rapidapi.com/joke/Any?blacklistFlags=nsfw%2Cracist&type=single",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "78f9dcd84fmsh836e568ab0d4b60p1bd88ajsne18b90695b64",
            "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response); 
        $newJoke.text(response.joke)



        // $("p").append($newJoke) ----> didnt need to do this, all i needed was intertion of text.


               // display data here in "joke class, "joke here" "
    });

// creat dom emelent with response and append to "p tag joke here."

// function render() {

// }


    // $.ajax({
    //     url: 'https://jokeapi-v2.p.rapidapi.com',
    //     type: "GET",
    //     dataType: "json",
    //     success: function (data) {
    //         console.log(data);
    //     },
    //     error: function (error) {
    //         console.log(`Error ${error}`);
    //     }
    // });
}

// function handleGetData(event) {
   
      
//     $.ajax({
//         url: 'https://jokeapi-v2.p.rapidapi.com'
//       }).then(
//         (data) => {
//          $joke = data;
//          render();
//         } 
//     );    
// }












// const $btn = $('btn')
// const $joke = $('joke')
// const url = 'https://jokeapi-v2.p.rapidapi.com'

// $btn.click(getData);

// function getData () {
//     $.getJSON(url, jsonData);
// }


// function jsonData (data) {
// let random = math.floor(math.random()*data.lenth);

//     $joke.html('<span>"</span>'+data[random].joke + '<span>"</span>');
// }


// $(function ()) {

// $.ajax({
//     method: 'GET'
//     url: 'jokeapi-v2.p.rapidapi.com'
//     Headers: {'X-Api-Key': '78f9dcd84fmsh836e568ab0d4b60p1bd88ajsne18b90695b64'},
//     contentType: 'application/json',
//     success: function(data)
// })
// }



// document.querySelector('.joke');









// const btnEl = document.getElementById("btn")

// const apiKey = "78f9dcd84fmsh836e568ab0d4b60p1bd88ajsne18b90695b64";
// const options = {
//     method: "GET",
//     Headers: {
//         "X-Api-Key": apiKey,
//     },
// };

// const apiUrl = 'jokeapi-v2.p.rapidapi.com'

// function getJoke(){
//     const response = fetch(apiUrl, options)
//     const data = response.json()
// }

// btnEl.addEventListener("click", getJoke)
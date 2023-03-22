
const $newJoke = $('#joke')

$('#btn').on('click', handleGetData);




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
    });

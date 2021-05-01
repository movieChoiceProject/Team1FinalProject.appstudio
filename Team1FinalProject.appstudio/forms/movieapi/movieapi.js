let movie_enter = ''
let requestapi = "http://www.omdbapi.com/?t=" + movie_enter + "&apikey=7c82f582"

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    

    message = message + "Release Date: "+ apiData.Released + "\n"
    message = message + "\nRuntime: " + apiData.Runtime + "\n"
    message = message + "\nGenre: " + apiData.Genre + "\n"
    message = message + "\nDirector: " + apiData.Director + "\n"
    message = message + "\nActors: " + apiData.Actors + "\n"
    message = message + "\nPlot: " + apiData.Plot
    
    txtview.value = message
    imgPost.src = apiData.Poster
    }

btn.onclick=function() {
  movie_enter = inpt.value
  requestURL = "http://www.omdbapi.com/?t=" + movie_enter + "&apikey=7c82f582"
  callAPI(requestURL)
  }
  
function callAPI(requestURL) {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://cors.bridged.cc/' + requestURL)
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
    
}

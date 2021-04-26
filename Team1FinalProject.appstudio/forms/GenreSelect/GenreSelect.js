let elbNetID = "elb22116"
let elbPw = "cozmox-5jibsI-sethyg"
let genres = ["Science Fiction", "Fantasy", "Documentary", "Action"]
let movies = ""

GenreSelect.onshow = function() {
      selGenre.clear()
      for (let y = 0; y < genres.length; y++) {
            selGenre.addItem(genres[y])
      }
}

selGenre.onclick = function() {
      let chosenGenre = selGenre.text
      movies = "SELECT `title`, `yearProduced` FROM movies WHERE genre='" + chosenGenre + "';"
      sHost = "host=ormond.creighton.edu&user=" + elbNetID + "&pass=" + elbPw + "&database=375groupb1&query=" + movies
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", sHost)
      if (req1.status == 200) {
            console.log(req1.responseText)
            lblMovies.value = req1.responseText
      } else {
            NSB.MsgBox(`Error: ${req.status}`)
      }
}

btnLoginPage.onclick = function() {
      ChangeForm(Login)
}
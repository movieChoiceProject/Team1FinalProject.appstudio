let req = ""
let query = ""
let results = ""
let pw = ""
let allUsers = []
let netID = ""
let allPasswords = []
let cjfNetid = "cjf07630"
let cjfPass = "gorams21"

Login.onshow = function() {}

btnLogin.onclick = function() {
    netID = txtUsername.value
    pw = txtPassword.value
    //username and password are not blank
    if (netID == "") {
        NSB.MsgBox("Username cannot be blank.")
    } else if (pw == "") {
        NSB.MsgBox("Password cannot be blank.")
    } else {
        //Runs query to find user based on NetID
        query = "SELECT * FROM user WHERE net_id = '" + netID + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + cjfNetid + "&pass=" + cjfPass + "&database=375groupb1&query=" + query)
        if (req.status == 200) {//successful connection to database
            results = JSON.parse(req.responseText)
            if (results.length == 0) {//query did not return result
                NSB.MsgBox("User cannot be found.")
            } else {
                //successfully returned username 
                //runs query to find password based upon user entered password
                query = "SELECT password FROM user WHERE net_id = '" + netID + "'"
                req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + cjfNetid + "&pass=" + cjfPass + "&database=375groupb1&query=" + query)
                if (req.status == 200) {//successful connection to database
                    results = JSON.parse(req.responseText)
                    // Compare the password that got returned from the query to the user entered password.
                     if (pw == results) {
                       ChangeForm(Home)
                    }
                    else {
                     NSB.MsgBox("Passwords do not match.")
                     }
                } else {
                    NSB.MsgBox(`Error: ${req.status}`)
                }
            }
        }
    }
}
btnHome1.onclick = function() {
    ChangeForm(HomePage)
}
req = ""
query = ""
results = ""
pw = ""
let pw2 = ""
netID = ""
cjfNetid = "cjf07630"
cjfPass = "gorams21"

btnCreateUser.onclick = function() {
    netID = inptNetID.value
    pw = inptPass.value
    pw2 = inptPass2.value
    //username and password are not blank
    if (netID == "") {
        NSB.MsgBox("Username cannot be blank.")
    } else if (pw == "") {
        NSB.MsgBox("Password cannot be blank.")
    } else if (pw != pw2) { //Dual verification for password
        NSB.MsgBox("Passwords do not match.")
    } else {
        //Runs query to find user based on NetID
        query = "SELECT * FROM user WHERE net_id = '" + netID + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + cjfNetid + "&pass=" + cjfPass + "&database=375groupb1&query=" + query)
        if (req.status == 200) { //successful connection to database
            results = JSON.parse(req.responseText)
            if (results.length == 0) { //query did not return result
                //Inserts username and password
                query = "INSERT INTO user (net_id, password) VALUES ('" + netID + "', '" + pw + "')"
                req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + cjfNetid + "&pass=" + cjfPass + "&database=375groupb1&query=" + query)

                if (req.status == 200) { //successful connection to database
                    NSB.MsgBox(`You have sucessfully been added, please login.`)
                    ChangeForm(Login)
                } else {
                    NSB.MsgBox(`Error: ${req.status}`)
                }
            } else {
                NSB.MsgBox(`This username already exists.`)
            }
        }
    }
}
btnGoLogin.onclick = function() {
    ChangeForm(Login)
}
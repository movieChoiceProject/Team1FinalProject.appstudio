< plugin name = "cordova-plugin-email-composer" source = "npm" spec = "~0.8.15" / >

function eMail(first, last, whole, email, text) {
      cordova.plugins.email.open({
               isHtml: true,
               to: email,
               subject: 'Test Email',
               body: text
      });
}

Button2.onclick=function(){
      let firstName=inptFirst.text
      let lastName=inptLast.text
      let fullName=firstName + " " + lastName
      
      eMail(firstName, lastName, fullName,"myemail@gmail.com”,“hi this is a test”)

}
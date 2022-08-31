function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "lenar.toledo@gmail.com",
        // Password : "1DBC4EBBDE91687B7BA69AFD064C279E2F14",
        Password:"foylwjvreyemxlyq",
        To : 'lenar.toledo@gmail.com',
        From : document.getElementById("useremail").value,
        Subject : document.getElementById("usersubject").value,
        Body : "Name: " + document.getElementById("username").value
            + "<br> Email: " + + document.getElementById("useremail").value
            + "<br> Subject: " + + document.getElementById("usersubject").value
            + "<br> Message: " + + document.getElementById("usermessage").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}
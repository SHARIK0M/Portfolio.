let navbar = document.querySelector(".navbar")

function opn(){
    navbar.style.display="block"
}

function clo(){
    navbar.style.display="none"
}


function sendemail(){

    var email=document.getElementById("email").value;
    var from_name=document.getElementById("name").value;
    var message=document.getElementById("message").value;
    
    var templateParams = {
        email: email,
        to_name: name,
        message: message
      };
    
      emailjs.send('service_q9wmthv', 'template_xims95r', templateParams)
    .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
    })
    
     
    }
                
     
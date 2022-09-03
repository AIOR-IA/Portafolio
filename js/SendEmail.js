
const names = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
  
   
   const serviceID = 'default_service';
   const templateID = 'template_o6dhata';
 
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      
      
      names.value='';
      email.value='';
      subject.value='';
      message.value='';
      Swal.fire(
        {
          title:'SUCCESS',
          text:'Your message has been sent',
          icon:'success',
          background:'rgba(30,30,30,1)',
          color:'#fff',
        }
      )
    }, (err) => {
      
      email.value='';
      subject.value='';
      message.value='';
      Swal.fire(
        {
          title:'ERROR',
          text:'Error: ' + err,
          icon:'error',
          background:'rgba(30,30,30,1)',
          color:'#fff',
        }
      )
    });
});
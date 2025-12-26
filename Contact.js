let btn_send=document.querySelector('#btn-send');
let email = document.querySelector('#email');
let Name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let subject = document.querySelector('#subject');
let box_msg = document.querySelector('#box-msg');
let menu_btn=document.querySelector('.menu-btn');
let menu_close=document.querySelector('.menu-close')

btn_send.addEventListener('click', function (e) {
    e.preventDefault();

  if ( Name.value.trim() === '' || email.value.trim() === '' || subject.value.trim() === '' || box_msg.value.trim() === '' || phone.value.trim() === '' ) {
    return;
  }

  if (!/^[a-zA-Z\u0600-\u06ff\s]+$/.test(Name.value)) {
     Swal.fire({
  icon: 'error',
  title: 'Please enter your information correctly.',
  confirmButtonText: 'ok'
});

    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
  
     Swal.fire({
  icon: 'error',
  title: 'Please enter your information correctly.',
  confirmButtonText: 'ok'
});
    return;
  }

  if (!/^(010|011|012|015)[0-9]{8}$/.test(phone.value)) {
     Swal.fire({
  icon: 'error',
  title: 'Please enter your information correctly.',
  confirmButtonText: 'ok'
});
    return;
  }

  if (subject.value.length < 5) {
     Swal.fire({
  icon: 'error',
  title: 'Please enter your information correctly.',
  confirmButtonText: 'ok'
});
 
    return;
  }

  if (box_msg.value.length < 10) {
    
    return;
  }
  sendMsg()
  Name.value='';
  email.value='';
  subject.value='';
  box_msg.value='';
  phone.value='';

});
emailjs.init("rAy7Uh0AG_qz0I7c9");

function sendMsg(){
    emailjs.send("service_tq57tab","template_haulejp",{
        from_name:Name.value,
        email:email.value,
        phone:phone.value,
        subject:subject.value,
        message:box_msg.value
    })
  .then(() => {
    Swal.fire({
  icon: 'success',
  title: 'Done',
  text: 'The message was sent successfully.',
  confirmButtonText: 'ok'
});
  })

  .catch(() => {
     Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Error during transmission',
  confirmButtonText: 'ok'
});

  })
}

menu_btn.onclick=function(){
    document.querySelector('.menu-mobile').classList.add('menu-show')
}
menu_close.onclick=function(){
     document.querySelector('.menu-mobile').classList.remove('menu-show')
}


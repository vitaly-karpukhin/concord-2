
$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow +950) {
          $(this).addClass('bounceInLeft'); 
          
    
      }
    })
  });
      
  $(window).scroll(function() {
    $('.mov2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow +950) {
        $(this).addClass('bounceInRight');
           
      }
    });
  });
  $(window).scroll(function() {
    $('.mov3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow +950) {
        $(this).addClass('bounceInUp');
      }
    });
  });

  
 function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid){
        output = '';
    }else {
        output = message.style.display = "block";
    }
    return valid;
}
 
function ValidPhone() {
    //alert(545);
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    //alert(valid);
    if (valid) {
        output = '';
    }else{        
       tel.style.display = "block";
    }
    return valid;
} 
function validForm(){
    var vm=ValidMail();
    var vp=ValidPhone();

    if(vm==true && vp==true){

        return true;
    }else{

        return false;
    }
}    
  document.getElementById('phone').onclick = function() {
      document.getElementById('tel').style.display = 'none';
    }
  document.getElementById('email').onclick = function() {
      document.getElementById('message').style.display = 'none';
    }
  
  
  
  
 
  
 
  
  
  
  

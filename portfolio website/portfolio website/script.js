

$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });


});


document.addEventListener("click" ,(e)=> {
  if(e.target.classList.contains("work_btn")){
    togglePortPopup();
    portItemDetails(e.target.parentElement);
  }
})


function togglePortPopup(){
  document.querySelector(".port_popup").classList.toggle("open");
}
document.querySelector(".port_popup-close").addEventListener("click",togglePortPopup);

function portItemDetails(portfolioItem)
{
  document.querySelector(".port_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
  document.querySelector(".port_popup-body").innerHTML=portfolioItem.querySelector(".port").innerHTML;
}


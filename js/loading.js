$(function(){
  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','../img/lifeline.png');
  },
  mouseleave: function(){
    $(this).attr('src','../img/lifeline copy.png');
  }
  });
});

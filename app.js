/* jshint esversion: 6 */

var canvasLogo;
var ctx;
var myLogo;

var colors = {
  ltgrey1: 'rgba(150, 150, 150, 1)',
  ltgrey2: 'rgba(210, 210, 210, 1)',
  hotpink: 'rgb(195, 32, 104)',
  green:   'rgb(26, 159, 99)',
  yellow:  'rgb(230, 230, 38)',
  lightblue1: 'rgb(173, 216, 230)',
  lightblue2: 'rgb(173, 216, 250)',
  darkblue:   'rgb(51, 102, 255)'
};

function Logo() {
  this.color1 = colors.hotpink;
  this.color2 = colors.green;
  this.color3 = colors.yellow;

  this.draw = function() {
    ctx.fillStyle = this.color1;
    ctx.strokeStyle =  this.color1;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(10,10);
    ctx.lineTo(10,110);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(10,60,50,-(Math.PI/2),(Math.PI/2));
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = this.color2;
    ctx.fillStyle = this.color2;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(62,55);
    ctx.lineTo(62,110);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(62,75,20,-(Math.PI/2),(Math.PI/2));
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = this.color3;
    ctx.fillStyle = this.color3;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(84,72);
    ctx.lineTo(84,110);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(84,82,9,-(Math.PI/2),(Math.PI/2));
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(84,100,9,-(Math.PI/2),(Math.PI/2));
    ctx.stroke();
    ctx.fill();
  };

  this.update = function() {
    let c1 = this.color1;
    let c2 = this.color2;
    let c3 = this.color3;
    this.color1 = c3;
    this.color2 = c1;
    this.color3 = c2;
  };

}

function clearCanvas() {
  ctx.clearRect(-1, -1, canvasLogo.width+1, canvasLogo.height+1);
}

// FRONT END
$(document).ready( function() {
  canvasLogo = document.getElementById('canvas-logo');
  ctx = canvasLogo.getContext('2d');
  myLogo = new Logo();
  myLogo.draw();

  setInterval(function(){
    clearCanvas();
    myLogo.draw();
    myLogo.update();
  }, 800);

  // project mouse over events
  $('.grid-item').each( function() {
    $(this).mouseenter( function() {
      // $(this).css("background-color",colors.darkblue);
      // $(this).css("background","linear-gradient(green, lightgreen, pink)");
      // $(this).css("background","linear-gradient(blue, white, lightgreen)");
      $(this).addClass('grad1');
      $(this).find(".project").addClass('opacity-anim1');
      $(this .project).find('.grid-item-text').text("");
    });
    $(this).mouseleave( function() {
      // $(this).css("background-color",colors.ltgrey2);
      $(this).removeClass('grad1');
      $(this).find(".project").removeClass('opacity-anim1');
      $(this).find('.grid-item-text').text("");
    });
  });

  $(".btn-link").click(function(e) {
    let link = $(this).find("div").attr("href");
    console.log('link = ', link);
    if (link !== undefined) {
      window.location.href = link;
    } else {
      console.log("that's not a link");
    }
  });

  $('.scrollable').on('click', function(event) {
    console.log('scrollable clicked');
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      // console.log('target.offset().top = ', target.offset().top);
      if (target[0].getAttribute('id') === "top") {
        // window.scrollTo(0,0);  this version is instant instead of animated
        $('html, body').stop().animate({ scrollTop: (target.offset().top -120) }, 800); // 120 because of nav bar
      } else {
        $('html, body').stop().animate({ scrollTop: (target.offset().top -60) }, 800); // -53 to adjust for margin
      }
    }
  });

  // $('.menu').mouseenter( function() {
  //     $(this).addClass('opacfadeOut-anim');
  //     console.log('menu fading out');
  // });
  // $('.menu').mouseleave( function() {
  //     $(this).removeClass('opacfadeOut-anim');
  //     console.log('menu fading in');
  // });

  // opacfadeOut-anim

  $('footer').mouseenter( function() {
      $('#footer-hr').addClass('fade-black');
      console.log('footer entered');
  });
  $('footer').mouseleave( function() {
      $('#footer-hr').removeClass('fade-black');
      console.log('footer left');
  });

});

/* jshint esversion: 6 */

var canvasLogo,
    ctx,
    canvasLogo2,
    ctx2,
    myLogo,
    ctxLogoImg;

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

/* chic color 1-5
columbia blue:  #B8D8D8
weldon blue:    #7A9E9F
stormcloud:     #4F5367
beige:          #EEF5DB
sunset orange:  #FE5F55
*/


function Logo() {
  // orig scheme
  // this.color1 = colors.hotpink;
  // this.color2 = colors.green;
  // this.color3 = colors.yellow;

  this.color1 = '#4F5367'; // rgb(79,83,103)  greyish
  this.color2 = '#7A9E9F'; // rgb(122,158,159) mossy green
  this.color3 = '#FE5F55'; // rgb(254,95,85) bright brick

  this.imgSnapshot = undefined;

  this.init = function() {
    this.draw();
    this.imgSnapshot = ctx.getImageData(0,0,canvasLogo.width,canvasLogo.height);
  };

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
  canvasLogo2 = document.getElementById('canvas-logo2');
  ctx2 = canvasLogo2.getContext('2d');
  myLogo = new Logo();
  myLogo.init();
  // void ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
  // ctx2.putImageData(myLogo.imgSnapshot,0,0,0,0,60,60);
  // void ctx.drawImage(image, dx, dy, dWidth, dHeight);
  ctx2.drawImage(canvasLogo,0,0,60,60);

   // ctx.putImageData(this.lvlImage1,0,0);

  setInterval(function(){
    clearCanvas();
    myLogo.draw();
    myLogo.update();
  }, 1000);

  // project mouse over events
  $('.grid-item').each( function() {
    $(this).mouseenter( function() {
      $(this).addClass('grad1');
      $(this).find(".project").addClass('opacity-anim1');
      $(this .project).find('.grid-item-text').text("");
    });
    $(this).mouseleave( function() {
      $(this).removeClass('grad1');
      $(this).find(".project").removeClass('opacity-anim1');
      $(this).find('.grid-item-text').text("");
    });
  });

  $(".btn-link").click(function(e) {
    let myHref = $(this).find("div").attr("href");
    let isGIF = $(this).hasClass('gif-link');
    // console.log('myHref = ', myHref);
    console.log('is gif? = ', isGIF);
    if ( (isGIF === true) && (myHref !== undefined) ) {
        // console.log("trying to put gif");
        let projVal = $(this).find("div").attr("val");
        let elStr = ".p-img-"+projVal;
        // console.log("projVal: ", projVal);
        // console.log("elStr: ", elStr);
        $(elStr).css('background-image', 'url("'+myHref+'")');
    } else if ( (isGIF === false) && (myHref !== undefined) ) {
        window.location.href = myHref;
    }  else {
      console.log("that's not a href");
    }
  });


  $('.scrollable').on('click', function(event) {
    // console.log('scrollable clicked');
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

  // $('footer').mouseenter( function() {
  //     $('#footer-hr').addClass('fade-black');
  //     console.log('footer entered');
  // });
  // $('footer').mouseleave( function() {
  //     $('#footer-hr').removeClass('fade-black');
  //     console.log('footer left');
  // });

});

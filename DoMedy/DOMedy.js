var main = function () {
          "use strict";
 
          //$("h2").show();
          $("h4").hide();
          $("h3").hide();
          $("button:nth-child(1)").show("fast");
 
          $("button:nth-child(1)").on("click", function (event) {
              $("button:nth-child(1)").hide("fast");
              $("button:nth-child(2)").show("slow");
          });
 
          $("button:nth-child(2)").on("click", function (event) {
              $("button:nth-child(2)").hide("fast");
              $("button:nth-child(3)").show("slow");
          });
 
          $("button:nth-child(3)").on("click", function (event) {
              $("button:nth-child(3)").hide("fast");
              $("button:nth-child(4)").show("slow");
          });
 
          $("button:nth-child(4)").on("mouseover", function (event) {
              $("button:nth-child(4)").hide("fast");
              $("h2").hide("fast");
              $("h3").show("fast");
              $("h4").show("fast");
              function flash() {
              $('.punchline').fadeOut(450);
              $('.punchline').fadeIn(450);
            }
              setInterval(flash, 1250);
              var snd = new Audio("moo.mp3");
              snd.play();
          });
          $("h3").on("click", function (event) {
              var snd = new Audio("moo.mp3");
              snd.play();
          });
        };
 
    $(document).ready(main);
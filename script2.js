$(function() { $.scrollIt({
				  upKey: 38,             // key code to navigate to the next section
				  downKey: 40,           // key code to navigate to the previous section
				  easing: 'linear',      // the easing function for animation
				  scrollTime: 600,       // how long (in ms) the animation takes
				  activeClass: 'active', // class given to the active nav element
				  onPageChange: null,    // function(pageIndex) that is called when page is changed
				  topOffset: 0           // offste (in px) for fixed top navigation
				}); 
			});


jQuery(document).ready(function(){
	$('.nav-container').hide();
	
	$(window).on('scroll',function() {
		var scrolltop = $(this).scrollTop();
			 
		if(scrolltop >= 600) {
			$('.nav-container').fadeIn(250);
		}
			     
		else if(scrolltop <= 210) {
			$('.nav-container').fadeOut(250);
		}
	});
//jCarousel Lite
//LINKS
var x;
var uniList=new Array("#01L","#02L","#03L","#04L","#05L");
					

for (i=0;i<uniList.length;i++)
{
	$(uniList[i]).mouseover(function(){
		x=i;
		$(this).fadeTo("normal",1);
	});
}

for (i=0;i<uniList.length;i++)
{
	$(uniList[i]).mouseout(function(){
		$(this).fadeTo("normal",1);
	});
}

//CONTENT
var unis=new Array("#01","#02","#03","#04","#05");

function hideunis(){
	for (i=0;i<unis.length;i++){
		$(unis[i]).hide();
	}
}

hideunis();

$("#01").fadeIn();

$("#01L").click (function(){
			hideunis();
			$("#01").fadeIn();
			return false;
		});

$("#02L").click (function(){
			hideunis();
			$("#02").fadeIn();
			return false;
		});

$("#03L").click (function(){
			hideunis();
			$("#03").fadeIn();
			return false;
		});

$("#04L").click (function(){
			hideunis();
			$("#04").fadeIn();
			return false;
		});
$("#05L").click (function(){
			hideunis();
			$("#05").fadeIn();
			return false;
		});
				

});
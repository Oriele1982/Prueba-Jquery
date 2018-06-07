$(document).ready(function(){

	$("#twitter_btn").on("click", function(event){   // ESCRIBIR Y POSTEAR TWITTER
		event.preventDefault();
		var tweet = $('#tweet_textarea').val();
		var post = $('.tweet_col');
		post.append(	
		'<div class="tweet__post">'
		+ '<img src="assets/img/grumpy.jpg"  class="tweet_image" alt="grumpy">'
		+ '<div class="tweet_twitter">' 
		+ tweet 
		+ '</div>'
		+ '<ul class="tweet_select>'
		+ '<li class="tweet_item"><i class ="likeable fas fa-heart"></i></li>' 
		+ '<li class="tweet_item"><span class = "counter">0</span></li>'
		+ '<li class="tweet_item"><i class ="fas fa-trash"></i></li>'
		+ '</div>');
		$("#tweet_textarea").val('');
		$("#tweet_textarea").focus();


			// Icono basurero borra el post

			$(".fa-trash").on("click", function(){   
				$(this).parent().parent().parent().remove();
			});


	});
	
	// Clase likeable (corazón) cambia de color con un click y aumenta el contador en 1
		$('.tweet_col').on("click", ".likeable", function(event){
			var number = $(this).siblings('.tweet_item').children().text();
			console.log(number);
			number = parseInt(number);
			console.log(number);

			if($(this).hasClass("likeable--red")){
				number -= 1;
			} else {
				number += 1;
			};	

			$(this).toggleClass("likeable--red");
			$(this).siblings('.tweet_item').children(".counter").text(number);
				 

			
		});
	
});

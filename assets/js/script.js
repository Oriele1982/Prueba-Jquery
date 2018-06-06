$(document).ready(function(){

	$("#twitter_btn").on("click", function(event){   // ESCRIBIR Y POSTEAR TWITTER
		event.preventDefault();
		var tweet = $('#tweet_textarea').val();
		var post = $('.tweet_col');
		post.append(	
		'<div class="tweet__post">'
		+ '<div class="tweet_twitter">' 
		+ tweet 
		+ '</div>'
		+ '<ul class="tweet_select>'
		+ '<li class="tweet_item"><i class ="likeable fas fa-heart"></i></li>' 
		+ '<li class="tweet_item"><span id = "counter">0</span></li>'
		+ '<li class="tweet_item"><i class ="fas fa-trash"></i></li>'
		+ '</div>');
		$("#tweet_textarea").val('');
		$("#tweet_textarea").focus();

	
	// Clase likeable (corazón) cambia de color con un click y aumenta el contador en 1
		$(".likeable").on("click", function(event){
			event.preventDefault();
			//event.stopPropagation();
			$(this).toggleClass("likeable--red");

		});

		$("")

		// Icono basurero borra el post

			$(".fa-trash").on("click", function(){   
				$(this).parent().parent().parent().remove();
			});

	});
});
$(document).ready(function(){

	$("#twitter_btn").on("click", function(event){   // ESCRIBIR Y POSTEAR TWITTER
		//event.preventDefault();
		var tweet = $('#tweet_textarea').val();
		var post = $('.tweet__post');
		post.append(
		'<div class="tweet_twitter">' 
		+ tweet 
		+ '</div>'
		+ '<ul class="tweet_select>'
		+ '<a class="btn btn-lg" href="#" role="button"><li class="tweet_item"><i class="likeable fas fa-heart"></i></li></a>' 
		+ '<li class="tweet_item"><span>0</span></li>'
		+ '<a class="btn btn-lg" href="#" role="button"><li class="tweet_item"><i class="tweet_trash fas fa-trash"></i></li></a>');
	
		//$(".likeable").on("click", function(){
			//$("span").
		//});

		$(".fa-trash").on("click", function(){   // Icono basurero borra el post
			$(".tweet__post").remove();
		});
	});

});
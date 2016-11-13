
$(function(){
	$(".navbar-toggle").on("blur",function(){
		$("#collapsable-nav").collapse("hide");
	});
	
	console.log("ARif");
});

(function(global){
	var dc = {};

	var homeHtml = "../snippets/home-snippet.html"
	// Convenience function for inserting innerHTML for 'select'
	var insertHtml = function(selector,html){
		$(selector).html(html);
	};
	// Convenience function for inserting innerHTML for 'select'
	var showLoadingGif = function(selector){
		var loadingGif = "<div class='text-center'><img src='images/ajax-loader.gif'></div>"
		insertHtml(selector,loadingGif);
	};
	$(function(){
		// On first load, show home view
		showLoadingGif("#main-content");
		$ajaxUtils.sendGetRequest(homeHtml,responseHandler,false);
		function responseHandler(response){
			insertHtml("#main-content",response)
		}
	});//DOM loaded

	global.$dc = dc;
})(window);//IIFE

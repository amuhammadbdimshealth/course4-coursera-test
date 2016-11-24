
$(function(){
	$(".navbar-toggle").on("blur",function(){
		$("#collapsable-nav").collapse("hide");
	});
	
	console.log("ARif");
});

(function(global){
	var dc = {};

	var homeHtml = "snippets/home-snippet.html";
	var allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";
	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";

	// Convenience function for inserting innerHTML for 'select'
	var insertHtml = function(selector,html){
		$(selector).html(html);
	};
	// Convenience function for inserting innerHTML for 'select'
	var showLoadingGif = function(selector){
		var loadingGif = "<div class='text-center'><img src='images/ajax-loader.gif'></div>"
		insertHtml(selector,loadingGif);
	};

	var insertProperty = function (string, propName, propValue) {
	  var propToReplace = "{{" + propName + "}}";
	  string = string
	    .replace(new RegExp(propToReplace, "g"), propValue);
	  return string;
	};
	dc.loadMenuCategories = function(){
		showLoadingGif("#main-content");
		var finalHtml = "";
		$ajaxUtils.sendGetRequest(categoriesTitleHtml,function(categoriesTitleHtml){
			finalHtml+=categoriesTitleHtml;
			finalHtml+='<section class="row">';
			$ajaxUtils.sendGetRequest(allCategoriesUrl,function(categories){
				$ajaxUtils.sendGetRequest(categoryHtml,function(categoryHtml){
					// console.log(categoriesTitleHtml,categories,categoryHtml);
					for(var c in categories){
						// console.log(categories[c]);
						category = categories[c];

						var categoryItemHtml = "";
						categoryItemHtml = insertProperty(categoryHtml,"short_name",category.short_name);
						//relpace categoryHtml placeholders with json category property
						categoryItemHtml = insertProperty(categoryItemHtml,"name",category.name);
						console.log(categoryItemHtml);
						finalHtml+=categoryItemHtml;
					}
					finalHtml+='</section>';
					insertHtml("#main-content",finalHtml);
				},false);
			},true);
		},false);
		

		

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

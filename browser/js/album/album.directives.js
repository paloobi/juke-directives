juke.directive('albumList', function(){

	return {
		restrict: "E",
		scope: {
			albums: "="
		},
		templateUrl: "js/album/templates/listofalbums.html"


	}

})

//"&" = "behavior "will run a function
// "=" = evaluate the expression
// "@" = value
juke.directive('songList', function(PlayerFactory){

	return {
		restrict: "E",
		scope: {
			songs: "="
		},
		templateUrl: "js/song/templates/songs.html",
		link: function(scope){

			  scope.toggle = function (song) {
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.songs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			  };
			   scope.getCurrentSong = function () {
			    return PlayerFactory.getCurrentSong();
			  };

			  scope.isPlaying = function (song) {
			    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			  };
		}


	}

});

juke.directive('doubleClick', function() {

	return {
		restrict: 'A',
		scope: {
			doubleClick: '&'
		},
		link: function(scope, element, attr) {
			element.on('dblclick', function(event){
				console.log(attr);
				scope.doubleClick();
			});
		}
	}

});


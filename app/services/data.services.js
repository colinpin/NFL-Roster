app.factory('DataService', function ($http) {
    var players = [];
    var service = {
        loadPlayers: function () {
            
            $http.get('http://bcw-getter.herokuapp.com/?url=http%3A%2F%2Fapi.cbssports.com%2Ffantasy%2Fplayers%2Flist%3Fversion%3D3.0%26SPORT%3Dfootball%26response_format%3Djson')
                .success(function (data) {
                    players = data.body.players;
                    //console.log(players);
                });
        },
        getAllPlayers: function () {
            var list = [];
            for(var i = 0; i < players.length; i++) {
                if(players[i].firstname !== "") {
                    list.push(players[i]);
                }
            }
            return list;
        },
        getPlayersByTeam: function (team) {
            return team
        },
        getPlayersByPosition: function (position) {
            return position
        }
    }

    return service;
});
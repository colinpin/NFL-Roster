

app.controller('RosterController', function ($scope, DataService) {
    $scope.roster = []; //all players from the NFL API
    $scope.team = []; //players added to my team

    $scope.addPlayer = function () {
        var player = {
            firstName: $scope.newPlayer.firstname,
            lastName: $scope.newPlayer.lastname,
            position: $scope.newPlayer.position,
            team: $scope.newPlayer.pro_team
        };

        $scope.team.push(player);
        $scope.newPlayer = "";
    };

    // $scope.saveData = function (i) {
    //     localStorage.setItem("team", i);
    // }
    


    $scope.deletePlayer = function (i) {
        var x = $scope.team.indexOf(i);
        $scope.roster.push(i);
        $scope.team.splice(x, 1);
        $scope.saveData(i);
    }

    $scope.draftPlayer = function (i) {
        var x = $scope.roster.indexOf(i);
        $scope.team.push(i);
        $scope.roster.splice(x, 1);
    }

    $scope.loadPlayers = function () {
        DataService.loadPlayers();
    }

    $scope.setPlayers = function () {
        $scope.roster = DataService.getAllPlayers();
    }



})


// [x] Apply team class to object and change colors 
// [ ] Loader image  
// [ ] Sort the array alphabetically so the players push back into same spot
// [ ] search for team, search for position?

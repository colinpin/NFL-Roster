angular.module('filter', []);

function FruitCtrl($scope) {

    $scope.playerIncludes = [];
    
    $scope.includePosition = function (position) {
        var i = $.inArray(position, $scope.playerIncludes);
        if (i > -1) {
            $scope.playerIncludes.splice(i, 1);
        } else {
            $scope.playerIncludes.push(position);
        }
    }

    $scope.playerFilter = function (player) {
        if ($scope.playerIncludes.length > 0) {
            if ($.inArray(player.position, $scope.playerIncludes) < 0)
                return;
        }

        return player;
    }
} 


app.controller('topicsController',['$scope', '$http','topicFactory','$location', '$routeParams', function($scope, $http,topicFactory, $location, $routeParams){
    function updateHTML(){
        topicFactory.getTopics(function(topics){
            $scope.topics = topics;
        })
    }
    updateHTML();
    $scope.addTopic = function(topicInfo){
        topicFactory.addTopic(topicInfo, function(){
            updateHTML();
        });
    };

    $scope.logout = function(){
        topicFactory.logout(function(){
            $location.url('/login');
        })
    }

    $scope.getTopic = function(){
        topicFactory.getTopic($routeParams.id, function(topic){
            $scope.topic = topic;
            console.log($scope.topic);
        });
    };

    $scope.getTopic();

}])
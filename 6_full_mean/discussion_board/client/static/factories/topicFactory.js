app.factory("topicFactory", ["$http", function($http){
    var topics = {data:[]}
    var factory = {};
    factory.getTopics = function(callback){
        $http({
            method:"GET",
            url:'/topics'
        }).then(function(res){
            topics.data = res.data;
            callback(topics);
        })
    }
    factory.getTopic = function(id,callback){
        $http({
            method:"GET",
            url:'/topics/'+id
        }).then(function(res){
            topics.data = res.data;
            callback(topics);
        })
    }
    factory.upVote = function(topicInfo, callback){
        $http({
            method:"PUT",
            url:'/topics/up/'+topicInfo._id
        }).then(function(res){
            callback();
        })
    }
    factory.downVote = function(topicInfo, callback){
        $http({
            method:"PUT",
            url:'/topics/down'+topicInfo._id
        }).then(function(res){
            callback();
        })
    }
    factory.addTopic = function(topicInfo, callback){
        $http({
            method:"POST",
            url:"/topics",
            data: topicInfo
        }).then(function(res){
            callback();
        })
    }
    factory.logout = function(callback){
        $http({
            method:"GET",
            url:"/logout",
        }).then(function(){
            callback();
        })
    }

    return factory;
}])
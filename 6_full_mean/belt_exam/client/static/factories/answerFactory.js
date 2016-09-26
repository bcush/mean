app.factory("answerFactory", ["$http", function($http){
    var answers = {data:[]}
    var factory = {};
    factory.getAnswers = function(callback){
        $http({
            method:"GET",
            url:'/answers'
        }).then(function(res){
            answers.data = res.data;
            callback(answers);
        })
    }
    factory.getAnswer = function(id,callback){
        $http({
            method:"GET",
            url:'/answers/'+id
        }).then(function(res){
            answers.data = res.data;
            callback(answers);
        })
    }
    factory.upVote = function(answerInfo, callback){
        $http({
            method:"PUT",
            url:'/answers/up/'+answerInfo._id
        }).then(function(res){
            callback();
        })
    }
    factory.downVote = function(answerInfo, callback){
        $http({
            method:"PUT",
            url:'/answers/down'+answerInfo._id
        }).then(function(res){
            callback();
        })
    }
    factory.addAnswer = function(answerInfo, callback){
        $http({
            method:"POST",
            url:"/answers",
            data: answerInfo
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
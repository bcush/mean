// function displayName(data){
//     console.log(data);
// }
// console.log(displayName.name);

$(document).ready(function(){
    $('button').click(function(){
        $.get("https://api.github.com/users/beecushman", function(displayName) {
            $('#info').html('<p>' + displayName.name + '</p>');
        }, 'json');
    })
});

$.getJSON('food.json',function(json){
    var o = document.getElementById('output');


    for (i =0; i < json.buzzes.length; i++) {
        var newdiv =         "<div class='clearfix content xs-border-bottom'>"  +
        "<div class='title xs-text-1 xs-text-center'><h2>" + json.buzzes[i].title + "</h2></div>" +
            "<div class='col xs-col-1 xs-offset-3 thumbnail'><img src='" + json.buzzes[i].images.standard +"'></a></div>" +
            "<div class='col xs-col-5 xs-border-left description'><div>" + "<a href='https://www.buzzfeed.com/" + json.buzzes[i].bylines[0].username+ "/" + json.buzzes[i].uri + "'> " + json.buzzes[i].description + "</a></div></div></di>";
        o.innerHTML += newdiv;
    }

    // var o = document.getElementById('output');
    // o.innerHTML = json.big_stories[0].bylines[0].title;

});


// $(document).ready(function() {
//
//         // Only change code below this line.
//         $.getJSON('food.json', function(r) {
//             document.write(r.badgelist);
//         });
//
//
//
//         // Only change code above this line.
//
// });

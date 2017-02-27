//

/*
Initial page load
----------------------
After initial load of the page I call getJSON and store the
data and then adds the html it to the output div. I store the
getJSON so I can call it whenever the user reaches the bottom of the screen.

I did this because unless you zoom in to like 200% the page won't load anything because there's no bottom of
the screen detected.

*/
var x = $.getJSON('food.json',function(json){
    var contentOutput = document.getElementById('content');
    for (i =0; i < json.buzzes.length; i++) {
        var newdiv = "<div class='clearfix content xs-border-bottom'>"  +
            "<div class='title xs-text-1 xs-text-center'><h2>" + json.buzzes[i].title + "</h2></div>" +
            "<div class='col xs-col-1 xs-offset-3 thumbnail'><img src='"
            + json.buzzes[i].images.standard +"'></a></div>" +
            "<div class='col xs-col-5 xs-border-left description'><div>"
            + "<a href='https://www.buzzfeed.com/" + json.buzzes[i].bylines[0].username+ "/" +
            json.buzzes[i].uri + "'> " + json.buzzes[i].description +
            "</a></div></div></di>";
        contentOutput.innerHTML += newdiv;
    }
});

// Some infinite scroll happening down below
$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height()-$(window).height()){
        $.getJSON('food.json',function(json){
            var contentOutput = document.getElementById('content');


            for (i =0; i < json.buzzes.length; i++) {
                var newdiv = "<div class='clearfix content xs-border-bottom'>"  +
                    "<div class='title xs-text-1 xs-text-center'><h2>" + json.buzzes[i].title + "</h2></div>" +
                    "<div class='col xs-col-1 xs-offset-3 thumbnail'><img src='"
                    + json.buzzes[i].images.standard +"'></a></div>" +
                    "<div class='col xs-col-5 xs-border-left description'><div>"
                    + "<a href='https://www.buzzfeed.com/" + json.buzzes[i].bylines[0].username+ "/" +
                    json.buzzes[i].uri + "'> " + json.buzzes[i].description +
                    "</a></div></div></di>";
                contentOutput.innerHTML += newdiv;
            }
        });
    }
});


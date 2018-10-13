
/* Preferred method: Unfortunately there is a "No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access."
error set with news.com.au, so I can't just $.ajax to it... */

/*
$(document).ready(function () {

    $.support.cors = true;
    var maxEntries = 10;
    $.ajax({
        url: 'https://www.news.com.au/content-feeds/latest-news-sport',
        type: 'GET',
        dataType: "xml"
    }).done(function(xml) {
        $.each($("item", xml), function(i, e) {
            var sportsRow = i;
            if(i< maxEntries) {
                var itemURL = ($(e).find("link"));
                var itemTitle = ($(e).find("title"));
                var linkURL = itemURL.text();
                var linkText = itemTitle.text();
                $(".module-sports_news ol li:eq("+i+") a").href = linkURL;
                $(".module-sports_news ol li:eq("+i+") a").text = linkText;
            }
        });
    });
});
*/

/* So we have to go via another route... I've converted the XML to JSON...
and just added it to the script... */

$(document).ready(function () {    
    var maxEntries = 10;
    var sportsFeed = jsonSportsNews;
    var item = sportsFeed.rss.channel.item; // Access the news item's node...
    var sportsRow = 0;
    item.forEach(e => {
        if(sportsRow < maxEntries) {
            var itemURL = e.link;
            var itemTitle = e.title;
            console.log(sportsRow);
            console.log(itemURL, itemTitle);
            $(".module-sports_news ol li:eq("+sportsRow+") a").attr("href", itemURL);
            $(".module-sports_news ol li:eq("+sportsRow+") a").text(itemTitle);
            sportsRow++;
        }
    });
});

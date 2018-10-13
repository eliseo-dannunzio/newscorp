Hi Wayne,

Apologies for the delay, I 've been unwell for the last few days, and so I finally got the opportunity to dedicate a few hours to this test.

A few caveats:

1) I was unable to determine the font family for the Breaking News and Most Popular Sports News titles. I went with Arial, as it was closely matched to the one I found in the mock up and PSD file.

2) I did, however, manage to match the counter font from the Sports News section, it was Georgia.

3) The red triangle is Unicode, though I found it interesting that the two pictures provided in the ZIP file you gave were showing this triangle in red, whereas the PSD had this in black. I went with the majority and went with red, and was able to set a flag to trigger the presence of the triangle through a pointer-right class. I hope this is okay.

4) The page is responsive, though in order to properly test it, I had to remove a majority of tabs from my browser when it came to testing it... But I am quite pleased with the results...

5) The CSS is what's being used to render the styling on the page. You may note I also included an SCSS file written in SASS for your perusal of the same CSS. I hope that's okay.

6) I had trouble accessing the Sports RSS feed on news.com.au through AJAX, receiving the following error:

"No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access."

So I decided to convert the XML received in the RSS feed to JSON and extract the information that way. Given the length of some of those news articles I used an overflow ellipsis call through CSS to ensure that the articles were on the one line. I have however left the original AJAX code I wrote in comments for your perusal.

Thank you so much for the opportunity to test my skills on this. I hope I hear from you shortly...

Regards,

Eliseo

PS: news_module.html is the result from Test 1, and news_module_2.html is the result from Test 2.
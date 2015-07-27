# SimpleScrollSpy
Simple ScrollSpy example done with pure JavaScript and CS

I notices that many people strugle with scroll spy. Lots of them try to 
use some existing plugin but in the end get more problems then benefit. 

This very simple example probably could be done better, but it will fit 
its purpose.

## HTML & CSS
There are 5 div tags nested in body. Each one has full width and heght of
screen. Body has auto height with auto overflow so if the content is larger 
than screen it will get an scroll. There is also nav tag with 5 spans. One 
as a indicator for each div. They are conected by data attributes. So 
span with attribute data-scrollspy-indicator="target2" is indicator for
div with attribute data-scrollspy-target="target2". 

## JavaScript.
Since there is overflow scroll on my body I am attaching event listener on it. 
On each scroll I am looking at window height and going trough divs
that cointain data-scrollspy-target attribute. When I find one I am 
searching for span whos data-scrollspy-indicator attribute values
is same as this divs data-scrollspy-target attribute value. To that 
span I am setting class active and removing it from other.

Yes this could be easier to do with jQuery or whatever else in better way. 
Idea was to make it very simple as an example how it works.
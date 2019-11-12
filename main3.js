$(document).ready(function() {



    var event = (" <li class="events__item">"+
    "<div class="events__item--left">" +
      "<span class="events__name">NEW EVENT MADE WITH DOMz</span>"+
      "<span class="events__percent">5%</span>" +
      "<span class="events__date">Oct 7</span>"+
   " </div>" +
    "<span class="events__tag1">10  pm</span>"+
    "<span class="events__tag2">COMP 1510 </span>"+
 "</li>");

$(".events-container").append(event);
}
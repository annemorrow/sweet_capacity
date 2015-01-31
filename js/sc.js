$(document).ready(function() {
   $( ".nav li" ).hover(
     function() {
       $( this ).addClass( "highlighted" );
     }, function() {
       $( this ).removeClass( "highlighted" );
     }
   );
});
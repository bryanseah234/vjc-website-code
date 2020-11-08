
 jQuery(function() {
   jQuery(".fl-row-content-wrap .fl-button-wrap.fl-button-width-full a[href*=\\#]:not([href=\\#]) ").click(function(e) {
     e.preventDefault();
      var id = jQuery(this).attr("href");
      jQuery(id).removeClass("hidden");
      jQuery(id).fadeIn();
      return false;
   });

   if ((window.location.href.indexOf("#") > -1) && (window.location.href.indexOf("-content") > -1)) {
     var url = window.location.href;
     var hash = "#"+url.split("#")[1];
     jQuery(hash).removeClass("hidden");
     jQuery(hash).fadeIn().delay(800);
  }


 });

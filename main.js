$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });
  $(".nav-item a").on("click", function() {
    $(".nav-item a").removeClass("active");
    $(this).addClass("active");
    var placeholder_str = "Search by " + $(this).attr("id");
    $("#search-criteria").attr("placeholder", placeholder_str);
  });
});

// $('#formbutton').on('click', function(event) {
//   event.preventDefault(); // To prevent following the link (optional)
//
//   var title = $("#example-search-input").val().trim();
//   var author = $("#author").val().trim();
//   var cit_min = $("#cit_min").val().trim();
//   var cit_max = $("#cit_max").val().trim();
//   var year_min = $("#year_min").val().trim();
//   var year_max = $("#year_max").val().trim();
//   var sort_by = $("#selecter").val().trim();
//
//
//   $.post("/search", {
//     title, author, cit_min, cit_max, year_min, year_max, sort_by
//   });
//
// });


$(document).ready(function(){
  var data = ["Fake news", "Misiniformation", "Disinformation", "Hoax", "False news", "Social bot", "Fact check", "Infodemic", "Information disorder"];
  $("#example-search-input").autocomplete({
    source:function(request, response) {
      var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
      response($.grep(data, function(item) {
        return matcher.test(item);
      }));
    }}).data("ui-autocomplete")._renderItem = function( ul, item) {
      let txt = String(item.value).replace(new RegExp(this.term, "gi"),"<b>$&</b>");
      return $("<li></li>")
        .data("item.autocomplete", item)
        .append("<div>" + txt + "</div>")
        .appendTo(ul);
  };
});

document.getElementById('advancedsearch').onclick = function() {

  /*var html = document.getElementById('adv-span').innerHTML;
  html = html == '+' ?  '-' : '+';
  document.getElementById('adv-span').innerHTML = html;*/
  
  if ($('#icon-option').hasClass('fa-plus')) {
    $('#icon-option').removeClass('fa-plus');
    $('#icon-option').addClass('fa-minus');
    $("#input-search-group").css({"margin-bottom": "4%"});
  } else if ($('#icon-option').hasClass('fa-minus')) {
    $('#icon-option').removeClass('fa-minus');
    $('#icon-option').addClass('fa-plus');
    $("#input-search-group").css({"transition": "margin 470ms"});
    $("#input-search-group").css({"margin-bottom": "0%"});
    
  }

 };
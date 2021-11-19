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

document.getElementById('advancedsearch').onclick = function() {

  var html = document.getElementById('adv-span').innerHTML;
  html = html == '+' ?  '-' : '+';
  document.getElementById('adv-span').innerHTML = html;

 };

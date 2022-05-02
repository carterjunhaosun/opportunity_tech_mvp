$(function(){
 $('#selected').on('change',function(){
  var href_link = $(this).val();
  window.location.href = href_link;
 });
});
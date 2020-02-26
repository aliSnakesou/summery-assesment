$(document).ready(function(){
  $("#create").click(function(){
    if($("#c1").prop('checked')&& $("#c2").prop("checked") && $("#c3").prop("checked")){//i only add black list to the ul when the three boxes are checked ,lack of time :/
      $("#li").append("<li>black</li>")
    }
  })



})
$(function(){
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formDate = new FormDate(this);  //thisはform
    var url = $(this).attr(action);      //thisからactionのパスを取得し代入(/groups/:id番号/messages)

    $.ajax({
      url: url,
      type: 'POST',
      data: formDate,
      dataType: 'json',
      processDate: false,
      contentType: false
    })
  });
});
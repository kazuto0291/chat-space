$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__box">
            <div class="message__box__name">
              ${message.user_mame}
            </div>
            <div class="message__box__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <p class="massage__text">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__box">
            <div class="message__box__name">
              ${message.user_mame}
            </div>
          <div class="message__box__date">
            ${message.created_at}
          </div>
          </div>
          <div class="lower-message">
            <p class="massage__text">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data) {
      var html = buildHTML(data);
      $('.main-contents').append(html)
      
    })
  })
});
$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__box">
            <div class="message__box__name">
              ${message.name}
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
              ${message.name}
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

  var buildHTML = function(message) {
    if (message.content && message.image) {
      var html =
      `<div class="message" data-message-id=${message.id}>
        <div class="message__box">
          <div class="message__box__name">
            ${message.name}
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
        <img src=${message.image}>
      </div>`
  } else if (message.content) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__box">
            <div class="message__box__name">
              ${message.name}
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
} else if (message.image) {
      var html =
      `<div class="message" data-message-id=${message.id}>
        <div class="message__box">
          <div class="message__box__name">
            ${message.name}
          </div>
          <div class="message__box__date">
            ${message.created_at}
          </div>
        </div>
        <img src=${message.image}>
      </div>`
    };
  return html;
};

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
      $('.main-contents').append(html);
      $('form')[0].reset();
      $(".submit-btn").prop("disabled", false);
      $('.main-contents').animate({ scrollTop: $('.main-contents')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });

  var reloadMessages = function() {
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.main-contents').append(insertHTML);
      $('.main-contents').animate({ scrollTop: $('.main-contents')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
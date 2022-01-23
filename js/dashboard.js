$('#sidebarCollapse').on('click', function () {
  $('#sidebar').toggleClass('active');
});

$('.toggle-btn').click(function () {
  $('i', this).toggleClass(' fa-angle-right  fa-angle-left');
});

$('.chat-btn').click(function () {
  $('.chat-box').toggleClass('chat-box-open');
  $('i', this).toggleClass(' fa-envelope  fa-close');
});

$(document).ready(function(){

  console.log('im in here');

  $('.header').height($(window).height());

  $('nav').alert();

  $('#signUp').on('submit', function (event) {
    // do something...
    event.preventDefault();

    const data = {};

    data.email   = $('#emailSign').val();
    data.name    = $('#nameSign').val();
    data.message = $('#messageSign').val();

    console.log( data );

    $.ajax({
      method: "POST",
      url: "https://api.mailchimp.com/signup/some",
      data: data
    })
    .done(function( msg ) {
        alert( "Data Saved: " + msg );
    });

  });

});

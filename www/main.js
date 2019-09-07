// This is a JavaScript file
var username;
var massage;
var time;

document.addEventListener('init', function(event) {
      var page = event.target;

      //firstpageAction
      if (page.matches('#first-page')) {

        tappable('#push-button',function() {
          username = $('#username').val();
          console.log(username.length);
          if(username.length==0){

          }
          else{
            document.querySelector('#navigator').pushPage('page2.html');
          }
        });
       
      } 
      //secondpageAction
      else if (page.matches('#second-page')) {
        tappable('#send',function(){
          message = $('#message').val();
          time = now.getHours()+":"+now.getMinutes();
          console.log(time);
          if(message.length==0){

          }
          else{
            $('#chats').append(`
          <ons-list-item modifier="nodivider">
            <div class="right">
              <ons-button style="background-color: green">${message}</ons-button>
            </div>
          </ons-list-item>`);
          }
          
        })
      }
    });

    if (ons.platform.isIPhoneX()) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }

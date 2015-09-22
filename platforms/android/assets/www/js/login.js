// // JavaScript Document
// function login(){
 //  var password = document.getElementById("psswd").value;
 //  var username = document.getElementById("username").value;
 //         $.ajax({
 //            type: "GET",
 //            url: "https://testing.vle.getsmarter.co.za/webservice/rest/server.php",
 //            data: {
 //                  'wstoken': '05f016b053766accaa6b275c6487f9ce',
 //                  'moodlewsrestformat': 'json',
 //                  'wsfunction': 'core_user_get_users',
 //                  'criteria[0][key]': 'username',
 //                  'criteria[0][value]': $('#username').val(),
 //            },
 //            success: function(data, status){
 //            if (data === 'true')
			
 //                alert('Login Successful.');
 // $.mobile.changePage( "main.html#home", { transition: "flip", changeHash: false });               
 //              }
 //              else
 //              {
 //                    alert("Wrong username or password");
 //              }
 //            },
 //            beforeSend:function()
 //            {
 //              $.mobile.loading('show')
 //            },
          
 //        });
 //         return false;
 //    }); 
      // var userPass = document.getElementById('psswd');
      // var userName = document.getElementById('username');
      // alert(user.value);
      // alert(pass.value);
  // }
  $('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })
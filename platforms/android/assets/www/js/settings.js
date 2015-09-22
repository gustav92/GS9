// JavaScript Document

function cancel() {
    $('#enable').css('visibility', 'visible');
    $('#back').css('visibility', 'visible');
    $('#save').css('visibility', 'hidden');
    $('#cancel').css('visibility', 'hidden')
    document.getElementById("name").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("surname").disabled = true;
    document.getElementById("email1").disabled = true;
    document.getElementById("birth").disabled = true;
    document.getElementById("mobile").disabled = true;
    document.getElementById("work").disabled = true;
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("country2").disabled = true;
    document.getElementById("prov").disabled = true;
    document.getElementById("city1").disabled = true;
    document.getElementById("postc").disabled = true;
}

function enable() {
    $('#name').textinput('enable');
    $('#surname').textinput('enable');
    $('#work').textinput('enable');
    $('#mobile').textinput('enable');
    $('#1').textinput('enable');
    $('#2').textinput('enable');
    $('#3').textinput('enable');
    $('#postc').textinput('enable');
    $('#email1').textinput('enable');
    $('#city1').textinput('enable');
    $('#country2').textinput('enable');
    $('#prov').textinput('enable');
    $('#post').textinput('enable');
    $('#birth').textinput('enable');

  $('#enable').css('visibility', 'hidden');
  $('#back').css('visibility', 'hidden');
  $('#save').css('visibility', 'visible');
  $('#cancel').css('visibility', 'visible')
}

$('#save').click(function() {
    $('#enable').css('visibility', 'visible');
    $('#back').css('visibility', 'visible');
    $('#save').css('visibility', 'hidden');
    $('#cancel').css('visibility', 'hidden')
    document.getElementById("name").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("surname").disabled = true;
    document.getElementById("email1").disabled = true;
    document.getElementById("birth").disabled = true;
    document.getElementById("mobile").disabled = true;
    document.getElementById("work").disabled = true;
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("country2").disabled = true;
    document.getElementById("prov").disabled = true;
    document.getElementById("city1").disabled = true;
    document.getElementById("postc").disabled = true;
});

    //function to store user name and password
    function store () {
         var username= document.getElementById("username");
         var password= document.getElementById("psswd");
         localStorage.setItem("username", $('#username').val());
         localStorage.setItem("password", $('#psswd').val());
        }
        //function to sign in
        function login() {
     var inputUsername = localStorage.getItem("username");
     var inputPassword = localStorage.getItem("password");
     if (username != "undefined" || username != "null" || password != "undefined" || password !="null")
     {
        document.getElementByID('welcomeMessage').innerHTML = "Welcome " + username + "!";
        } else
         document.getElementById('welcomeMessage').innerHTML = "Hello!";
         }
/// Login
  $("#submit").click(function(){
         $("#loginform").fadeIn("normal");
         $("#username").focus();   
        username=$("#username").val();
        password=$("#password-2").val();
         $.ajax({
            type: "POST",
            url: "https://testing.vle.getsmarter.co.za/webservice/rest/server.php",
            data: {
                  'wstoken': '05f016b053766accaa6b275c6487f9ce',
                  'moodlewsrestformat': 'json',
                  'wsfunction': 'core_user_get_users_by_field',
                  'field': 'username', 				
				          'users[0][id]': '6622',
                  'users[0][email]': $('#username').val()+"&pwd="+password,
			},
            success: function(data, status){
              if(data=='true')
              {
                $("#loginform").fadeOut("normal");
				$('#loginform').load('#home');
				//$("#home").html("<a href='logout.php' id='logout'>Logout</a>");.
				alert('Login Successful.');
				
              }
              else
              {
                    alert("Wrong username or password");
              }
            },
            beforeSend:function()
            {
              $.mobile.loading('show')
            },
          
        });
         return false;
    }); 
/// Map Settings
/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
/*$( document ).on( "pagecreate", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});*/
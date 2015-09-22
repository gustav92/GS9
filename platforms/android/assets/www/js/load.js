// JavaScript Document
$(document).ready(function() {
$.ajax({
  dataType: 'json',
	//cache:true,
	crossDomain:true,
    type: "GET",
	timeout: 25000,
	jsonp: 'jsoncallback',
    url: 'https://testing.vle.getsmarter.co.za/webservice/rest/server.php',
    data: {
      'wstoken': '05f016b053766accaa6b275c6487f9ce',
      'moodlewsrestformat': 'json',
      'wsfunction': 'core_user_get_users_by_field',
      'field': 'username',  // Fields to be targetted
      'values[0]': 'gustavandreas8@gmail.com'// User details
    },
    success: function(data, status) {
      // 1st & 2nd D array being called and set in text boxes
      $.each(data, function (i, item) {
	  var images = [ "https:\\/\\/testing.vle.getsmarter.co.za\\/pluginfile.php\\/25392\\/user\\/icon\\/f1"];
	  var data =
	   //$('#id1').val(item.id)
     //+ $('#psswd').val(item.password)
	   //+ $('#username').val(item.username)
      $('#name').val(item.firstname)
     + $('#surname').val(item.lastname)
     + $('#email1').val(item.email)
	 + $('#city1').val(item.customfields[12].value)
     + $('#birth').val(item.customfields[2].value)
     + $('#work').val(item.customfields[8].value)
     + $('#mobile').val(item.customfields[9].value)
     + $('#1').val(item.customfields[10].value)
     + $('#2').val(item.customfields[11].value)
	 + $('#country2').val(item.customfields[15].value)
     + $('#prov').val(item.customfields[14].value)
     + $('#yourimage1').append("https:\\/\\/testing.vle.getsmarter.co.za\\/pluginfile.php\\/25392\\/user\\/icon\\/f1");
	 + $('#fullname12').append(item.fullname)
     + $('#postc').val(item.customfields[13].value);
       // localstorage.setItems(data);        
				  // Displays details
            });
        },
    error: function() {
     alert('Network signal lost!');
    }
  });
});

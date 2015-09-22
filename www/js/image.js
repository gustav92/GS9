$(document).ready(function () {
    $("#change").click(function () {
        $.ajax({
            dataType: 'json',
            type: "GET",
			crossDomain:true,
            url: 'https://testing.vle.getsmarter.co.za/pluginfile.php/25392/user/icon/f1',
			    data: {
      'wstoken': '05f016b053766accaa6b275c6487f9ce',
      'moodlewsrestformat': 'json',
      'wsfunction': 'core_user_get_users_by_field',
      'field': 'username',  // Fields to be targetted
      'values[0]': 'gustavandreas8@gmail.com' // User details
    },
            success: function (data) {
  
$.each(data, function (i, item) {
	var data = $('#yourimage').prepend('<img src="'+ item.profileimageurl +'"><br>');
      }
  });
  
}
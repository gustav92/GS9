// JavaScript Document
function Update_user(){
//Get the form data
//There are many ways to get this data using jQuery (you can use the class or id also)
  $.ajax({
  jsonp: 'jsoncallback',
  dataType: 'json',
  type: 'POST',
  cache:false,
  beforeSend: function() {$.mobile.loading('show')},
  complete: function() {$.mobile.loading('hide')},
  crossDomain: true,
  url: 'https://testing.vle.getsmarter.co.za/webservice/rest/server.php',
  data: {
      'wstoken': '05f016b053766accaa6b275c6487f9ce',
      'moodlewsrestformat': 'json',
      'wsfunction': 'core_user_update_users',
      'users[0][id]': '2328',
      'users[0][firstname]': document.getElementById('name').value,
      'users[0][lastname]': document.getElementById('surname').value,
//       //
      'users[0][customfields][0][type]': 'city',
      'users[0][customfields][0][value]': document.getElementById('city1').value,
//       //
      'users[0][customfields][0][type]': 'postalcode',
      'users[0][customfields][0][value]': document.getElementById('postc').value,
      // //
      // 'users[0][customfields][0][type]': 'dateofbirth',
      // 'users[0][customfields][0][value]': document.getElementById('birth').value,
      // //

      // //
      'users[0][customfields][0][type]': 'phonework',
      'users[0][customfields][0][value]': document.getElementById('work').value,
      // //
      'users[0][customfields][0][type]': 'addressline1',
      'users[0][customfields][0][value]': document.getElementById('1').value,
      
      'users[0][customfields][0][type]': 'addressline2',
      'users[0][customfields][0][value]': document.getElementById('2').value,

      'users[0][customfields][0][type]': 'country',
      'users[0][customfields][0][value]': document.getElementById('country2').value,
    
      'users[0][customfields][0][type]': 'province',
      'users[0][customfields][0][value]': document.getElementById('prov').value,
      
      'users[0][customfields][0][name]': 'phonemobile',
      'users[0][customfields][0][value]': document.getElementById('mobile').value,    
    },
    success: function(data) {
      // enable previous buttons
    $('#enable').css('visibility', 'visible');
    $('#back1').css('visibility', 'visible');
      // disable previous buttons
    $('#save').css('visibility', 'hidden');
    $('#cancel').css('visibility', 'hidden');
  // diable fields
    window.location.reload();
    alert("Profile updated." );
    },
    error: function() {

      alert('Update has failedt!');
    }
  });
}
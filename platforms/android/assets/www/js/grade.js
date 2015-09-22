// JavaScript Document
$(document).ready(function(e) {
 $.ajax({
  dataType: 'json',
  type: 'GET',
  crossDomain: true,
  dataType: 'json',
  jsonp: 'jsoncallback',
  url: 'https://testing.vle.getsmarter.co.za/webservice/rest/server.php',
  data: {
    'wstoken': '05f016b053766accaa6b275c6487f9ce',
    'moodlewsrestformat': 'json',
    'wsfunction': 'core_grades_get_grades',
    'courseid': '262',
    'userids[0]': '8370' //Replace this with a getitem from local storage code to access any user when you click remember me.
  },
  ContentType:" application/json",
  success: function(data, status){    
   $.each(data, function(i,item){ 
    var data = 
    $('#module1Name').append(item[5].name)+
    $('#module1Mark').append(item[5].grades[0].grade) +
    $('#module2Name').append(item[7].name)+
    $('#module2Mark').append(item[7].grades[0].grade)+
    $('#module3Name').append(item[9].name) +
    $('#module3Mark').append(item[9].grades[0].grade)+
    $('#module4Name').append(item[11].name) +
    $('#module4Mark').append(item[11].grades[0].grade)+
    $('#module5Name').append(item[13].name) +
    $('#module5Mark').append(item[13].grades[0].grade)+
    $('#module6Name').append(item[15].name) +
    $('#module6Mark').append(item[15].grades[0].grade)+
    $('#module7Name').append(item[17].name) +
    $('#module7Mark').append(item[17].grades[0].grade)+
    $('#module8Name').append(item[19].name) +
    $('#module8Mark').append(item[19].grades[0].grade)+
    $('#module9Name').append(item[21].name) +
    $('#module9Mark').append(item[21].grades[0].grade);
   });
  },
  error: function(){
     alert('Network connection has been lost.');
  }
 });
});

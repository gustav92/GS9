//$(document).ready(function() {

//    $("#save").click(function(e){
//        e.preventDefault();// prevent page reloading
//      //  $.confirm({
//        //    'title'     : 'Delete Confirmation',
//          //  'message'   : 'You are about to delete this User.Continue?',
//            //'buttons'   : {
//              //  'Yes'   : {
//                //    'action': function(){
//                        $.ajax({
//                            dataType: 'json',
//                            type: "POST",
//                            crossDomain: true,
//                            beforeSend: function() {$.mobile.loading('show')},
//                            complete: function() {$.mobile.loading('hide')},
//                            jsonp: 'jsoncallback',
//                            url: "https://testing.vle.getsmarter.co.za/webservice/rest/server.php",
//                            data: {
//                                'wstoken': '05f016b053766accaa6b275c6487f9ce',
//                                'moodlewsrestformat': 'json',
//                                'wsfunction': 'core_user_update_users',
//                                'field': 'username',
//                                'values[0]': 'gustavandreas8@gmail.com',
//                            },
//                            success: function(data, status){    
//                                $.each(data, function(i,item){ 
//                                    var data = { 
//                                        //firstname: $("#name").val(),
//                                        //lastname: $("#surname").val(),
//                                        //email: $("#email1").val(),
//                                        //city: $("#city1").val(),
//                                        //country: $("#country1").val(),
//                                          $("#name").val(item.firstname)
//                                        + $("#surname").val(item.lastname)
//                                        + $("#email1").val(item.email)
//                                        + $("#city1").val(item.city)
//                                        + $("#country1").val(item.country);
//                                        // Please assign the top items to a text box
//                                        // console.log(JSON.stringify(data));  // Displays details
//                                    });
//                                },
//                              // 'No'    :{

//                                //   'action': function(){}  // Nothing to do in this case. You can as well omit the action property.
//                               //}
//                                error: function(data, status){

//                                    alert("Update Failed.");
//                                }
//                            });
//                        //return false;
//                    });
// 
$(document).ready(function () {
    $("#change").click(function () {
        $.ajax({
            dataType: 'json',
            type: "Post",
            url: 'https://testing.vle.getsmarter.co.za/webservice/rest/server.php',
            data: {
                 'wstoken': '8dd38146f637c3061df33d10e80e8ca6',
                'moodlewsrestformat': 'json',
                'wsfunction': 'core_user_update_users',
                'users[0][id]': '2328',
                'users[0][firstname]': $('#name').attr('value') ,
                'users[0][lastname]': $('#surname').attr('value') ,
                'users[0][city]': $('#city1').attr('value') ,
                'users[0][country]': $('#country1').attr('value') ,
                'users[0][country]': $('#birth').attr('value') ,
                'users[0][customfields][0][value]': $('#work').attr('customfields[13].value') ,
                'users[0][customfields][1][value]': $('#mobile').attr('value') ,
                'users[0][customfields][2][value]': $('#1').attr('value') ,
                'users[0][customfields][3][value]': $('#2').attr('value') ,
                'users[0][customfields][4][value]': $('#3').attr('value') ,
                'users[0][customfields][5][value]': $('#postc').attr('customfields[13].value') ,

            },
            success: function (data, status) {
  
                alert('Update completed');
                
            },
            error: function (data, status) {
                alert('Update Failed.');
            }
        });
    });
});
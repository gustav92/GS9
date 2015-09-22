// JavaScript Document
$(function() {
    if (localStorage.chkbx && localStorage.chkbx != '') {
    $('#remember').attr('checked', 'checked'); // Check to see if the remember me button is active
    $('#username').val(localStorage.usrname); // checks the values of the text boxes
    $('#psswd').val(localStorage.password);
} else {
    $('#remember').removeAttr('checked');  // if the checked sign is inactive it removes all data
    $('#username').val('');               // enters empty values in localstorage
    $('#psswd').val('');
}
    $('#remember').click(function() {
    if ($('#remember').is(':checked')) {
    // save username and password
    localStorage.username = $('#username').val();
    localStorage.password = $('#psswd').val();
    localStorage.chkbx = $('#remember').val();
} else {
    localStorage.username = '';
    localStorage.password = '';
    localStorage.chkbx = '';
                    }
                });
            });
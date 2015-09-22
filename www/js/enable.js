function cancel() {
    $('#enable').css('visibility', 'visible');
    $('#back1').css('visibility', 'visible');
    $('#save').css('visibility', 'hidden');
    $('#cancel').css('visibility', 'hidden');
    document.getElementById("name").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("surname").disabled = true;
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

function change() {
    $('#name').textinput('enable');
    $('#surname').textinput('enable');
    $('#work').textinput('enable');
    $('#mobile').textinput('enable');
    $('#1').textinput('enable');
    $('#2').textinput('enable');
    $('#3').textinput('enable');
    $('#postc').textinput('enable');
    $('#city1').textinput('enable');
    $('#country2').textinput('enable');
    $('#prov').textinput('enable');
    $('#post').textinput('enable');
    $('#birth').textinput('enable');
    $('#enable').css('visibility', 'hidden');
    $('#back1').css('visibility', 'hidden');
    $('#save').css('visibility', 'visible');
    $('#cancel').css('visibility', 'visible');
}

function save(){
    $('#enable').css('visibility', 'visible');
    $('#back1').css('visibility', 'visible');
    $('#save').css('visibility', 'hidden');
    $('#cancel').css('visibility', 'hidden');
    document.getElementById("name").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("surname").disabled = true;
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
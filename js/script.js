nama = prompt("Tuliskan nama Anda: ");
document.getElementById("name").innerHTML = nama;

function setSenderUI(name, birthDate, gender, messages){
    document.getElementById("sender-fullname").innerHTML = name;
    document.getElementById("sender-birthdate").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

function validateForm(){
    const name = document.forms["message-form"]["nama"].value;
    const birthDate = document.forms["message-form"]["tgl_lahir"].value;
    const gender = document.forms["message-form"]["jenkel"].value;
    const messages = document.forms["message-form"]["pesan"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}
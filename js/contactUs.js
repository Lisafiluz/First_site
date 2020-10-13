function send_contactUs_mail() {
    var full_name = document.getElementById("fullName_input").value;
    var mail_address = document.getElementById("mail_input").value;
    var phone_number = document.getElementById("phone_input").value;
    var message = document.getElementById("message_input").value;
    //required test//
    alert(full_name + mail_address+ phone_number + message);
}

function clear_form() {
    document.getElementById("fullName_input").value = "";
    document.getElementById("mail_input").value = "";
    document.getElementById("phone_input").value = "";
    document.getElementById("message_input").value = "";
}
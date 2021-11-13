function validform()
{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value; 
    var message = document.getElementById('message').value;
    if( name.length == "")
    {
        alert("Bạn chưa điền tên!");
        return false;
    }
    if(email.length == "")
    {
        alert("Bạn chưa điền email!");
        return false;
    }
    if(message.length == "")
    {
        alert("Bạn chưa để lại tin nhắn cho chúng tôi!");
        return false;
    }
    else{
        document.getElementById("luc").submit();
        alert("Cảm ơn bạn đã để lại tin nhắn cho chúng tôi!");
    }
}
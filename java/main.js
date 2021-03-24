function Post()
{
    var input = document.getElementById("InputUser").value;
    var topic = document.getElementById("Topic");
    var Chat1 = document.getElementById("Chat1");
    var Chat2 = document.getElementById("Chat2");


    if(topic.innerHTML == "" && input != "")
    {
        topic.innerHTML = "Topic : "+input;
    }
    else if(Chat1.innerHTML == "" && input != "")
    {
        Chat1.innerHTML = "Chat1 : "+input;
    }
    else if(Chat2.innerHTML == "" && input != "")
    {
        Chat2.innerHTML = "Chat2 : "+input;
    }
    document.getElementById("InputUser").value = "";
}

function Clear()
{
    document.getElementById("InputUser").value = "";
    document.getElementById("Topic").innerHTML = "";
    document.getElementById("Chat1").innerHTML = "";
    document.getElementById("Chat2").innerHTML = "";
}
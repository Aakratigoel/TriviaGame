//creating a 30 seconds timer first
var time=1;
var intervalId;
function myTimer()
{
$("p").html(time++);
if(time>30)
{
    clearInterval(intervalId);
}
}
intervalId = setInterval(myTimer,1000);


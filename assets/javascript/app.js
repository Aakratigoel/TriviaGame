//creating a 30 seconds timer first
var time=30;
var intervalId;
function myTimer()
{
$("p").html(time--);
if(time<0)
{
    reset();
}
}
function reset()
{
    time=30;

}
intervalId = setInterval(myTimer,1000);
//creating a reset function

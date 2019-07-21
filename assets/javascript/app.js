//Requirements:
//User should select only one answer
//If the answer is correct then correct  should increase
//If the answer is incorrect then incorrect should increase
// New Question to be loaded either after every thirty seconds or when user clicks the answer
//4 answers are associated with each question
//clock should reset if user clicks any of the given option or when 30 seconds are over


//How to fulfill the requirements
// For questions create an object that will have array of quesions
//how to associate 4 answers to one question
var questionaireObject = {
    questions:["the Group has how many friends","the Group has how many friends1","the Group has how many friends2"],
}
//creating a 30 seconds timer first
var time=5;
var intervalId;
var i=0;
function myTimer()
{
    if(time === 5)
    {
        displayQuestion(i);
        i++;
        //if questions are over then clock should stop  or 
        if(i>questionaireObject.questions.length)
        {
            stop();
        }
    }
    
$("p").html(time--);
// resets the clock if time becomes 0 seconds or user gives the clicks the answer
if(time<0)
{
    reset();
    
}
}
//creating a reset function
function reset()
{
    time=5;
}
//creating a stop function
function stop()
{
    clearInterval(intervalId);
}
intervalId = setInterval(myTimer,1000);

//creating a function that displays question
function displayQuestion(j)
{
        var q1=questionaireObject.questions[j];
        $("div").empty();
        if(j===0)
        {
            var answers={
                q1 : [4,5,6,7],}
             displayAnswers(q1,answers.q1);
            
        }
        if(j===1)
        {
            var answers={
                q1 : [6,7,4,8],}
                displayAnswers(q1,answers.q1);
        }
        if(j===2)
        {
            var answers={
                q1 : [6,7,4,8],}
                displayAnswers(q1,answers.q1);
        }

}
function displayAnswers(quest,q)
{
    $("div").append(quest+"<br>");
    for(var i =0;i<q.length;i++)
    {
        var rbtn = $("<input type='radio'/>"+q[i]+"<br>");
        $("div").append(rbtn);
    }
}

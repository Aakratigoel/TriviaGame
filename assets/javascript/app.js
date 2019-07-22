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
var correctAnswer;
var correct=0;
var incorrect=0;
var unanswered=0;
function myTimer()
{
    if(time === 5)
    {
        initiateDisplay(i);
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
function settingInterval()
{
    intervalId = setInterval(myTimer,1000);
}
settingInterval();

//creating a function that displays question
function initiateDisplay(j)
{
        var q1=questionaireObject.questions[j];
        $("div").empty();
        if(j===0)
        {
            var answers={
                q1 : [4,5,6,7],}
                correctAnswer=6;  
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
        }
        if(j===1)
        {
            var answers={
                q1 : [6,7,4,8],}
                correctAnswer=4;
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
              //  correctAnswer=4;
              

        }
        if(j===2)
        {
            var answers={
                q1 : [6,7,4,8],}
                displayQuestionAnswers(q1,answers.q1);

        }

}
function displayQuestionAnswers(quest,q,ca)
{
    $("div").append(quest+"<br>");
    for(var i =0;i<q.length;i++)
    {
        var rbtn = $("<input type='radio'name='answerOptions' value=" +q[i]+">"+q[i]+"<br>");
        $("div").append(rbtn);
    }
    var btn=$("<button id='button1'>");
    btn.text("Submit");
    $("div").append(btn);
     
    $(btn).on("click",function()
             {
                 console.log("Entered the click");
                 console.log(ca);
                 var radioValue= $('input[name=answerOptions]:checked').val(); 
                 console.log(radioValue);
                 if(parseInt(radioValue)===ca)
                 {
                     correct++;
                     console.log("Correct:"+correct);
                 }
                 else if((radioValue!==ca) && ( typeof radioValue!=="undefined"))
                 {
                     incorrect++;
                     console.log("incorrect"+incorrect);
                 }
                 else if(typeof radioValue === "undefined")
                 {
                     unanswered++;
                     console.log("unanswered"+unanswered);
                 }
                 reset();
             })
    
}


    


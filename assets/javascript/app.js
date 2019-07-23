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
var correctImagesArray=["./assets/images/correct1.gif","./assets/images/correct2.gif",
"./assets/images/correct3.gif","./assets/images/correct4.gif","./assets/images/correct5.gif",
"./assets/images/correct6.gif","./assets/images/correct6.gif"];
var incorrectImagesArray=["./assets/images/incorrect1.gif","./assets/images/incorrect2.gif",
"./assets/images/incorrect3.gif","./assets/images/incorrect4.gif","./assets/images/incorrect5.gif"
,"./assets/images/incorrect6.gif","./assets/images/incorrect7.gif"];
var aud = $("#myAudio");
//object with questions property as an array of questions
var questionaireObject = {
    questions:["What is Rachel's surname?","What is the name of the coffee house?",
    "Select one of the designer rachel works for?",
    "What is Chandler's job?","What is Phoebe's sister name?","Where do Phoebe and Mike get married?",
    "Who plays 'Will', an old friend of Monica and Ross?","What's chandler middle name?",
    "What does Monica's dad give her to compensate ruining her childhood possesions? ",
    "What is the name of Joey's mother?"],
}
//creating a 30 seconds timer first
var time=5;
var intervalId;
var i=0;
var correctAnswer;
var correct=0;
var incorrect=0;
var unanswered=0;
var timeOut;

    $("#startButton1").on("click",function()
    {
        console.log("Document loaded");
        $("#mainDiv").hide();
        $("#imageDiv").hide();
        $("#childDiv").show();
        $("p").show();
        $("body").css( "background-image" ,"url('./assets/images/friendsBackground.jpeg')");
        $("body").css( "background-repeat" ,"no-repeat");
        $("body").css( "background-attachment" ,"fixed");    
        $("body").css( "background-position" ,"center");
        $("body").css( "background-size" ,"cover");
        timeOut=setTimeout(initialSetup,5300);
        aud.get(0).play();
    });



function initialSetup()
{
    settingInterval();
    aud.get(0).pause();
}
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
            $("#imageDiv").hide();
            $("#childDiv").hide();
            var overMessage=$("<h1> All Done here's how you did</h1>");
            $("#resultDiv").html(overMessage);
            var correctResult=$("<h2>Correct Answers:"+" "+correct+"</h2>");
            $("#resultDiv").append(correctResult);
            var incorrectResult=$("<h2>InCorrect Answers:"+" "+incorrect+"</h2>");
            $("#resultDiv").append(incorrectResult);
            var unansweredResult=$("<h2>Unanswered :"+" "+unanswered+"</h2>");
            $("#resultDiv").append(unansweredResult);
            var startOverButton = $("<button id='startOverButton'>Start Over?</button>");
            $("#resultDiv").append(startOverButton);
            $("#startOverButton").on("click",function()
            {
                location.reload(true);
            });
        }
    }
    
$("p").html("Time Remaining :"+ " "+time--);
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


//creating a function that displays question
function initiateDisplay(j)
{
        var q1=questionaireObject.questions[j];
        $("#childDiv").empty();    
        $("#childDiv").show(); 
        $("#imageDiv").hide(); 
        if(j===0)
        {
            var answers={
                q1 : ["Green","Blue","Bing","Karen"],}
                correctAnswer="Green";  
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
        }
        if(j===1)
        {
            var answers={
                q1 : ['Central Perk','Central Park','Starbucks','Barista'],}
                correctAnswer="Central Perk";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
              //  correctAnswer=4;
              

        }
        if(j===2)
        {
            var answers={
                q1 : ["Gucci","BloomingDales","Ralph Lauren","Manish Malhotra"],}
                correctAnswer="Ralph Lauren";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
                

        }
        if(j===3)
        {
            var answers={
                q1 : ["Chef","Transponster","Doctor","Statistical Analysis and Data Reconfiguration"],}
                correctAnswer="Statistical Analysis and Data Reconfiguration";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
                

        }
        if(j===4)
        {
            var answers={
                q1 : ["Pamela","Ursula","Kristina","Regina"],}
                correctAnswer="Ursula";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
        }
        if(j===5)
        {
            var answers={
                q1 : ["Street","London","Vegas","Chapel"],}
                correctAnswer="Street";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
        }
        if(j===6)
        {
            var answers={
                q1 : ["Bruce Wills","Tom Cruise","Brad Pitt","Will Smith"],}
                correctAnswer="Brad Pitt";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
        }
        if(j===7)
        {
            var answers={
                q1 : ["Muriel","Karen","Francis","Pamela"],}
                correctAnswer="Muriel";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
        }
        if(j===8)
        {
            var answers={
                q1 : ["Porsche","Dog","Cat","House"],}
                correctAnswer="Porsche";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
        }
        if(j===9)
        {
            var answers={
                q1 : ["Gloria","Sandra","Judy","Ronnie"],}
                correctAnswer="Gloria";
                displayQuestionAnswers(q1,answers.q1,correctAnswer);
        }

}
function displayQuestionAnswers(quest,q,ca)
{
     $("#childDiv").append(quest+"<br>");
    for(var i =0;i<q.length;i++)
    {
        var rbtn = $("<input type='radio'name='answerOptions' value=" +q[i]+">"+q[i]+"<br>");
        $("#childDiv").append(rbtn);
    }
    var btn=$("<button id='button1'>");
    btn.text("Submit");
    $("#childDiv").append(btn);
     
    $(btn).on("click",function()
             {
                 var correctOptionImage=correctImagesArray[Math.floor(Math.random()*correctImagesArray.length)];
                 var incorrectOptionImage=incorrectImagesArray[Math.floor(Math.random()*incorrectImagesArray.length)];
                 console.log(correctOptionImage);
                 console.log(incorrectImagesArray);
                 console.log("Entered the click");
                 console.log(ca);
                 var img1=$("<img>");
                 console.log(img1);
                 var radioValue= $('input[name=answerOptions]:checked').val(); 
                 console.log(radioValue);
                //  if(typeof ca === "number" )
                //  {
                //     radioValue=parseInt(radioValue);
                //  }
                 if(radioValue===ca)
                 {
                    stop();
                     correct++;
                     console.log("Correct:"+correct);
                     $("#childDiv").hide();
                     img1.attr("src",correctOptionImage);
                     img1.attr("width","500px");
                     img1.attr("height","300px");
                     $("#imageDiv").empty();
                     var message=$("<h1>Correct!!</h1>");
                     console.log(message);
                     $("#imageDiv").html(message);
                     $("#imageDiv").append(img1);
                     $("#imageDiv").show();
                     console.log("Image shown");
                     setTimeout(settingInterval,1000);
                     
                 }
                 else if(radioValue === undefined)
                 {
                     console.log("Enter undefined");
                    stop();
                    $("#childDiv").hide();
                    img1.attr("src",incorrectOptionImage);
                    img1.attr("width","500px");
                    img1.attr("height","300px");
                    $("#imageDiv").empty();
                    var message=$("<h1>You didn't answer!!</h1>");
                    console.log(message);
                    $("#imageDiv").html(message);
                    $("#imageDiv").append(img1);
                    $("#imageDiv").show();
                    setTimeout(settingInterval,1000);
                     unanswered++;
                     console.log("unanswered"+unanswered);
                 }
                 else if(radioValue!==ca)
                 {
                    stop();
                     incorrect++;
                     console.log("incorrect"+incorrect);
                     $("#childDiv").hide();
                     img1.attr("src",incorrectOptionImage);
                     img1.attr("width","500px");
                     img1.attr("height","300px");
                     $("#imageDiv").empty();
                     var message=$("<h1>Incorrect!! The correct answer is :"+ca+"</h1>");
                     console.log(message);
                     $("#imageDiv").html(message);
                     $("#imageDiv").append(img1);
                     $("#imageDiv").show();
                     setTimeout(settingInterval,1000);  
                 }
                 reset();
             })
    
}


    


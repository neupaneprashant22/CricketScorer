var button=document.querySelector("#submit-btn");
button.addEventListener("click",function (e)
{
    event.preventDefault();
    var team1=document.getElementById("team1").value;
    var team2=document.getElementById("team2").value;
    var overs=document.getElementById("overs").value;
    var wickets=document.getElementById("wickets").value;
    var toss=document.getElementById("toss-won").value;
    var decide=document.getElementById("decided-to").value;
    var myobj = {};
        myobj.team1 = team1;
        myobj.team2 = team2;
        myobj.overs=overs;
        myobj.wickets=wickets;
        myobj.toss = toss
        myobj.decide=decide;
        var myobjstring = JSON.stringify(myobj);
        document.cookie = "data=" + myobjstring;
        window.location.href = "./firstinnings.html";
})
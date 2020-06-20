var cookies = document.cookie.split("data=");
var myobjstring = cookies[1];
var myobj = JSON.parse(myobjstring);
var team1=myobj.team1;
var team2=myobj.team2;
var toss=myobj.toss;
var decide=myobj.decide;
var winner=myobj.winner;
var balls=myobj.balls_remaning;
var runs=myobj.runs_remaning;
var wickets=myobj.wickets_remaning;

var headwinner=document.getElementById("main-result");
if(winner==0)
{
    headwinner.innerHTML="Draw!!"
}
else if((toss=="Team1"&&decide=="Bat")||(toss=="Team2"&&decide=="Bowl"))
{
    if(winner==1)
    {
        headwinner.innerHTML=team1+" won by "+runs;
    
    }
    else
    {
        headwinner.innerHTML=team2+" won by "+wickets+" wickets with "+balls+" balls remaning!!";
    
    }
}
else if((toss=="Team2"&&decide=="Bat")||(toss=="Team1"&&decide=="Bowl"))
{
    if(winner==1)
    {
        headwinner.innerHTML=team2+" won by "+runs;
  
    }
    else
    {
        headwinner.innerHTML=team1+" won by "+wickets+" wickets with "+balls+" remaning!!";
     
    }
}

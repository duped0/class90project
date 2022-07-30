player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player_question").innerHTML="question_turn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer_turn-"+player2_name;

player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player_question").innerHTML="question_turn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer_turn-"+player2_name;

function send(){
    get_word=document.getElementById("word").value;
}

question_turn=player1;
answer_turn=player2;
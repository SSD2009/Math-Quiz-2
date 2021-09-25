function adduser(){
    player1name=document.getElementById("player1_name_input").value;
    player2name=document.getElementById("player2_name_input").value;

    localStorage.setItem("player 1 name",player1name);
    localStorage.setItem("player 2 name",player2name);

    window.location="game.html"
}
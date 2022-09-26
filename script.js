
var $min = 0;
var $max = 100;
var $num1 = 0;
var $num2 = 0;
var $ans = 0;
var $operator = 0;
var $opsign = "+";
var $lifeCnt = 5;
var $winCnt = 0;
var $gameStart = false;


function randGen() {

    $gameStart = true;

    document.forms["answerForm"]["userAns"].value = "";

    if ($min != null && $max != null && $min < $max) {


        //random number with min and max
        $num1 = Math.floor(Math.random() * (parseInt($max) - parseInt($min))) + parseInt($min) + 1;
        $num2 = Math.floor(Math.random() * (parseInt($max) - parseInt($min))) + parseInt($min) + 1;

        //random number between 0 and 3
        $operator = Math.floor(Math.random() * (parseInt(3) - parseInt($min))) + parseInt($min) + 1;

        // console.log($operator);

        //choose operator
        switch ($operator) {
            case 1:
                $opsign = "+";
                $ans = $num1 + $num2;
                break;

            case 2:
                $opsign = "-";
                $ans = $num1 - $num2;
                break;

            case 3:
                $opsign = "*";
                $ans = $num1 * $num2;
                break;

            case 4:
                $opsign = "/";
                $ans = $num1 / $num2;
                break;

        }

        if (Number.isInteger($ans)) {
            document.getElementById("number1").innerHTML = $num1;
            document.getElementById("operator").innerHTML = $opsign;
            document.getElementById("number2").innerHTML = $num2;
            document.getElementById("answer").innerHTML = $ans;
        }
        else {
            randGen();
        }




        // document.getElementById("list").innerHTML = $list += ($num1 + ' ');
    }


}

function answerCheck() {
    if ($gameStart) {
        var $answer = document.forms["answerForm"]["userAns"].value;

        if ($answer == $ans) {
            $winCnt++;
            document.getElementById("winCnt").innerHTML = "Wins: " + $winCnt;
            randGen();
        }
        else if ($lifeCnt > 1) {

            document.getElementById("life" + $lifeCnt).style.color = "#85706E";
            $lifeCnt--;
        }
        else if ($lifeCnt == 1) {
            //remove last life
            document.getElementById("life" + $lifeCnt).style.color = "#85706E";

            //display answer
            document.getElementById("answer").style.display = "block";

            //You lose! play again? (display life count)
            document.getElementById("answerWarning").innerHTML = "You lost!";
            document.getElementById("startBtn").style.display = "block";
            document.getElementById("answerBtn").style.display = "none";
        }

    }
    else {
        randGen();
    }

}

function resetGame() {
    for ($lifeCnt = 1; $lifeCnt < 6; $lifeCnt++) {
        document.getElementById("life" + $lifeCnt).style.color = "#B71515";
    }
    $lifeCnt = 5;
    $min = 0;
    $max = 100;
    $winCnt = 0;
    document.getElementById("answer").style.display = "none";
    document.getElementById("answerWarning").innerHTML = "";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("answerBtn").style.display = "block";

    randGen();
}
// You can add your codes here

function generate_card() {
    var name = document.getElementById('name').value;
    var std = document.getElementById('class').value;
    var mark1 = parseInt(document.getElementById('mark1').value);
    var mark2 = parseInt(document.getElementById('mark2').value);
    var mark3 = parseInt(document.getElementById('mark3').value);
    var roll = parseInt(document.getElementById('rollNo').value);
    var perc = "";
    if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
        perc = " Cant find percentage ";
    } else {
        perc = (((mark1 + mark2 + mark3) / 300) * 100).toFixed(2);
        if (perc <= 40) {
            document.getElementById('card_mark').style.color = "red";
        } else if (perc > 40 && perc <= 70) {
            document.getElementById('card_mark').style.color = "green";
        } else if (perc > 70) {
            document.getElementById('card_mark').style.color = "white";
        }
    }
    document.getElementById('card_mark').innerHTML = perc
    document.getElementById('card_name').innerHTML = name;
    document.getElementById('card_std').innerHTML = std;
    document.getElementById('card_roll').innerHTML = "( Roll No:  " + roll + " )";



}
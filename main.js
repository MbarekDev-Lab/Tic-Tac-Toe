let title = document.querySelector('.title-container');
let turn = "X";
let x = [];

function update(num1, num2, num3) {
    title.innerHTML = `"${x[num1]}" is Winner`;
        document.getElementById('item'+num1).style.background = '#000';
        document.getElementById('item'+num2).style.background = '#000';
        document.getElementById('item'+num3).style.background = '#000';

        setTimeout(function(){location.reload()},2000)
}

function correct(){
    for (let i = 1; i < 10; i++){
       x[i] = document.getElementById('item' + i).innerHTML;
    }if(x[1] == x[2] && x[2]== x[3] && x[1] != ''){
        update(1, 2, 3)

    }else if(x[4] == x[5] && x[5]== x[6] && x[5] != ''){
        update(4, 5, 6)
        
    }else if(x[7] == x[8] && x[8]== x[9] && x[8] != ''){
        update(7, 8, 9)

    }else if(x[1] == x[4] && x[4]== x[7] && x[1] != ''){
        update(1, 4, 7)

    }else if(x[2] == x[5] && x[5]== x[8] && x[5] != ''){
        update(2, 5, 8)

    }else if(x[3] == x[6] && x[6]== x[9] && x[6] != ''){
        update(3, 6, 9)

    }else if(x[1] == x[5] && x[5]== x[9] && x[5] != ''){
        update(1, 5, 9)

    }else if(x[3] == x[5] && x[5]== x[7] && x[5] != ''){
        update(3, 5, 7)

    }


}

function play(id){
    let element= document.getElementById(id);
    if(turn === "X" && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = "O";
        title.innerHTML = "O";

    } else if(turn==="O" && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = "X";
        title.innerHTML = 'X'; 
    }
    correct()
}
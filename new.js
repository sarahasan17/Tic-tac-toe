let count=[0,0,0,0,0,0,0,0,0];
let count2=[0,0,0,0,0,0,0,0,0];
let turn=0;
buttons=document.querySelectorAll('button');
result=document.querySelector('#result');
reset=document.querySelector('.reset');
function enablebutton(){
    for(let b of buttons){
        b.disabled=false;
    }
}
reset.addEventListener('click',()=>{
    count=[0,0,0,0,0,0,0,0,0];
    count2=[0,0,0,0,0,0,0,0,0];
    turn=0;
    enablebutton();
    for(let b of buttons){
        if(b.getAttribute('class')!=='reset'){
            b.innerText='';
        }
    }
    result.innerText='All the best!'
})
function disbutton(){
    for(let b of buttons){
        if(b.getAttribute('class')!=='reset'){
            b.disabled=true;
        }
    }
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let p = parseInt(button.getAttribute('class')[1]);  // Assuming class name contains a number      
        if (turn == 0 && button.getAttribute('class')!=='reset') {
            if (count2[p - 1] == 0) {
                button.innerText = 'o';  // Set 'o' for player 1
                count[p - 1] = 1;  // Mark 'o' in count array
                turn = 1;  // Change turn
                if(count[0]+count[1]+count[2]==3 ||count[3]+count[4]+count[5]==3||count[6]+count[7]+count[8]==3||count[0]+count[3]+count[6]==3||count[1]+count[4]+count[7]==3||count[2]+count[5]+count[8]==3||count[0]+count[4]+count[8]==3||count[2]+count[4]+count[6]==3){
            result.innerText="Congratulations player 1 won the game";
            disbutton();
        }
            }
        } else {
            if (count[p - 1] == 0 && button.getAttribute('class')!=='reset') {
                button.innerText = 'x';  // Set 'x' for player 2
                count2[p - 1] = 1;  // Mark 'x' in count2 array
                turn = 0;  // Change turn
                if(count2[0]+count2[1]+count2[2]==3 ||count2[3]+count2[4]+count2[5]==3||count2[6]+count2[7]+count2[8]==3||count2[0]+count2[3]+count2[6]==3||count2[1]+count2[4]+count2[7]==3||count2[2]+count2[5]+count2[8]==3||count2[0]+count2[4]+count2[8]==3||count2[2]+count2[4]+count2[6]==3){
            result.innerText="Congratulations player 2 won the game";
            disbutton();
        }
            }
        }
        console.log(button.getAttribute('class'));  // Debugging class attribute
        console.log(count, count2);  // Debugging counts
    });
});
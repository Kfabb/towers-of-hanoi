let currentBoard = { 
  }

function newGame(){
  currentBoard[0]= [5,4,3,2,1],
  currentBoard[1]= [];
  currentBoard[2]=[];
  return(currentBoard)
}
function showBoard(){
  console.log(Object.entries(currentBoard).map((i) => {return("---" + i[1].join(" "))}))
}

newGame()

function moveDisc(disc, peg){
  // let lastPeg = peg[peg.length-1];
  if (peg === 1){
    peg = currentBoard[0];
    if (peg[peg.length-1] > disc || peg.length === 0){
      peg.push(disc);
      if (currentBoard[1].includes(disc) && currentBoard[1][currentBoard[1].length-1] === disc){
        currentBoard[1].pop(disc)
      } else if (currentBoard[2].includes(disc) && currentBoard[2][currentBoard[2].length - 1 === disc]){
        currentBoard[2].pop(disc)
      } 
      } else (console.log("discs cannot be placed on smaller discs")) } 
else if (peg === 2){
        peg = currentBoard[1];
        if (peg[peg.length-1] > disc || peg.length === 0){
          peg.push(disc);
          if (currentBoard[0].includes(disc) && currentBoard[0][currentBoard[0].length -1]===disc){
            currentBoard[0].pop(disc)
          } else if (currentBoard[2].includes(disc) && currentBoard[2][currentBoard[2].length-1] === 0){
            currentBoard[2].pop(disc);}} else (console.log("discs cannot be placed on smaller discs"))
      }
else if (peg === 3){
  peg = currentBoard[2];
  if (peg[peg.length-1] > disc || peg.length === 0){
    peg.push(disc);
    if (currentBoard[1].includes(disc) && currentBoard[1][currentBoard[1].length-1]===0){
      currentBoard[1].pop(disc);
    } else if (currentBoard[0].includes(disc) && currentBoard[0][currentBoard[0].length-1] === 0){
     currentBoard[0].pop(disc)
    }
  } else (console.log("discs cannot be placed on smaller discs"))
}


showBoard()     
}
 
function checkWinner(){
  //check that the discs are bag in order on a new peg 
  if (currentBoard[1] = [5,4,3,2,1]){
    console.log("The Player has won the game! Let's go again!");
    newGame();
  showBoard();
  }
  else if (currentBoard[2] = [5,4,3,2,1]){
    console.log("The Player has won the game. Let's go again!");
    newGame();
  showBoard();
  } else {console.log("Sorry, Charlie, you havn'et won yet:(")}
  
}

showBoard()
moveDisc(1,3)
moveDisc(2,2)
moveDisc(1,2)
moveDisc(3,1)
moveDisc(3,3)
moveDisc(1,1)
moveDisc(2,3)
moveDisc(1,3)
moveDisc(4,2)
moveDisc(1,2)
moveDisc(2,1)
moveDisc(1,1)
moveDisc(3,2)
moveDisc(1,3)
moveDisc(2,2)
moveDisc(1,2)
moveDisc(5,3)
moveDisc(1,3)
moveDisc(2,1)
moveDisc(1,1)
moveDisc(3,3)
moveDisc(1,3)
moveDisc(2,2)
moveDisc(1,2)
moveDisc(3,1)
moveDisc(1,3)
moveDisc(2,1)
moveDisc(1,1)
moveDisc(4,3)
moveDisc(1,3)
moveDisc(2,2)
moveDisc(1,2)
moveDisc(3,3)
moveDisc(1,1)
moveDisc(2,3)
moveDisc(1,3)
checkWinner()

//get number to move
//get peg to move to
//find peg with number
//check to see if there is a smaller number on target peg
//remove number from current peg
//move numb to new peg if no  smaller numbers

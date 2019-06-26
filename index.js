//var katzDeliLine = [];

function takeANumber(lineOfpeople,newPerson){
  lineOfpeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${lineOfpeople.indexOf(newPerson)+1} in line.`;
  
}


  
  


function nowServing(katzDeliLine){

  if(array.length===0){
    return "There is nobody waiting to be served!";
  }else{
    for(var i = 0;i<katzDeliLine.length;i++){
      return 'Currently serving '+ katzDeliLine.shift()+'.'
    }
    
    
  }
  
   
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length ===0){
    return `The line is currently empty.`;
  }else{
    for(var i = 0; i<katzDeliLine.length;i++){
      return `${katzDeliLine[i]}`
    }
    
  }
  
  
  
}

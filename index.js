//var katzDeliLine = [];

function takeANumber(lineOfpeople,newPerson){
  lineOfpeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${lineOfpeople.indexOf(newPerson)+1} in line.`;
  
}

function shiftTheArray(array){
  array = array
  
}
var array = [];
function nowServing(katzDeliLine){
  array = katzDeliLine;
  if(array.length===0){
    return "There is nobody waiting to be served!"
  }else{
    shiftTheArray();
    return `Currently serving ${array[0]}`;
  }
  
   
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length ===0){
    return `The line is currently empty.`;
  }
  
  
  
}

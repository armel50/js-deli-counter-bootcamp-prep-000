//var katzDeliLine = [];

function takeANumber(lineOfpeople,newPerson){
  lineOfpeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${lineOfpeople.indexOf(newPerson)+1} in line.`;
  
}
var array = [];
function nowServing(katzDeliLine){
  array = katzDeliLine;
  if(array.length===0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${array[i]}`;
  }
  for(var i =0; i<katzDeliLine.length;i++){
    
    nowServing()
     console.log(`Currently serving ${katzDeliLine[i]}`) ;
    katzDeliLine.shift(katzDeliLine[i]);
  }
  
   
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length ===0){
    return `The line is currently empty.`;
  }
  
  
  
}

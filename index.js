//var katzDeliLine = [];

function takeANumber(lineOfpeople,newPerson){
  lineOfpeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${lineOfpeople.indexOf(newPerson)+1} in line.`;
  
}
var array=[];
var array1 ;
function shiftTheArray(){
  if(array.length !==0){
    array1 = array.shift();
  return `Currently serving ${array1}`;
  }
  
  
}

function nowServing(katzDeliLine){
  array = katzDeliLine;
  if(array.length===0){
    return "There is nobody waiting to be served!";
  }else{
    for(var i = 0;i<katzDeliLine.length;i++){
      return 
    }
    
    
  }
  
   
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length ===0){
    return `The line is currently empty.`;
  }
  
  
  
}

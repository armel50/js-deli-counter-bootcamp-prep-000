//var katzDeliLine = [];

function takeANumber(lineOfpeople,newPerson){
  lineOfpeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${lineOfpeople.indexOf(newPerson)+1} in line.`;
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length=0){
    return ""
  }
  for(var i =0; i<katzDeliLine.length;i++){
    console.log(katzDeliLine[i]) ;
    katzDeliLine.shift(katzDeliLine[i]);
  }
}
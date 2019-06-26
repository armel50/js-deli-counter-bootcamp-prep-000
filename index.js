//var katzDeliLine = [];

function takeANumber(lineOfpeople,newPerson){
  lineOfpeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${lineOfpeople.indexOf(newPerson)+1} in line.`;
  
}

function nowServing(katzDeliLine){
  
  for(var i =0; i<katzDeliLine.length;i++){
    return katzDeliLine[i];
    katzDeliLine.shift(katzDeliLine[i]);
  }
}
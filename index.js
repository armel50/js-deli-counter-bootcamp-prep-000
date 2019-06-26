//var katzDeliLine = [];

function takeANumber(lineOfpeople,newPerson){
  lineOfpeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${lineOfpeople.indexOf(newPerson)+1} in line.`;
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  for(var i =0; i<katzDeliLine.length;i++){
    console.log(`Currently serving ${katzDeliLine[i]}`) ;
    katzDeliLine.shift(katzDeliLine[i]);
  }
}


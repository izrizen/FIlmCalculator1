var answerButton = document.getElementById("calcButton");
var testFilmDensity = document.getElementById("testFilm");
const targetDensity = 3.0;
targetTimeMath = densityMath(targetDensity,testRunTime.value,testFilmDensity.value);
var testRunTime = document.getElementById("testRunTime");
var answerBox = document.getElementById("answer");
var testRunTimearray=str;
console.log(testRunTimearray)
var testArray=new Array();
console.log(testArray)
var testArray=testRunTimearray;
console.log(testArray);
var decimal= parseInt(testArray[1]);
console.log(decimal)
var finaleDecial= ((decimal*60)/100);
console.log(finaleDecial)
var finaleDecial= finaleDecial.toFixed(0);
console.log(finaleDecial)
var finaleDecial= finaleDecial.toString();
console.log(finaleDecial)
if(finaleDecial[1]){
  answerButton.addEventListener('click',()=>{
    answerBox.value = (testArray[0],':',finaleDecial);
})
  //console.log(testArray[0],':',finaleDecial)
} 
else if (finaleDecial[0]=="0"){
  console.log(testArray[0],'Minutes')
  }
else if (finaleDecial[-1]==null){
  console.log(testArray[0] +":0"+finaleDecial)
}
else if (finaleDecial[0]=="0"){
console.log(testArray[0],'Minutes')
}
var a = 2;
var b = 3;

//Functions
function densityMath(targetDensity,testRunTime,testFilmDensity){
  return (targetDensity*testRunTime)/(testFilmDensity)
}
targetTimeMath = densityMath(targetDensity,testRunTime.value,testFilmDensity.value);
var str=targetTimeMath.toFixed(2);

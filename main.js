/********************
 * YOUR CODE BELOW! *
 ********************/
const iGetTheJoke = false;
const havingFun = true;
const learning = true;
const killingIt = havingFun && learning;

returnFalse =(alwaysFalse) => {
return alwaysFalse = false;
};

isOpposite =(oppo) => {
return ! + oppo
}

both =(bool1,bool2) => {
if (bool1 === true && bool2 === true) {
  return true
} else {
  return false
}
}

either = (bool1,bool2) => {

  if (bool1 === true || bool2 === true ) {
    return true
  } else {
    return false
  }
}

firstOnly = (bool1,bool2) => {
if (bool1 === true && bool2 === false) {
  return true
} else {
  return false
}
}

secondOnly =(bool1,bool2) => {
if ( bool1 === false && bool2 === true) {
  return true
}else {
  return false
}
}

neither =(bool1,bool2) => {
if ( bool1 === false && bool2 === false){
  return true
}else {
  return false
}
}
itsComplicated =(bool1,bool2,bool3) => {
if (bool1 === false || bool2 === true && bool3 === true ){
  return true
} else {
  return false
}
}










/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}
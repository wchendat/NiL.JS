/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-8-c-ii-1.js
 * @description Array.prototype.map - callbackfn called with correct parameters
 */


function testcase() { 
 
  var bPar = true;
  var bCalled = false;
  function callbackfn(val, idx, obj)
  {
    bCalled = true;
    if(obj[idx] !== val)
      bPar = false;
  }

  var srcArr = [0,1,true,null,new Object(),"five"];
  srcArr[999999] = -6.6;
  resArr = srcArr.map(callbackfn);
  
  if(bCalled === true && bPar === true)
    return true;
 }
runTestCase(testcase);

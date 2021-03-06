// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype.getUTCDay property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.17/S15.9.5.17_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.prototype.getUTCDay.length;
Date.prototype.getUTCDay.length = 1;
if (Date.prototype.getUTCDay.length !== x) {
  $ERROR('#1: The Date.prototype.getUTCDay.length has the attribute ReadOnly');
}



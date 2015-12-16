var myFnc = function(a, b, c)
{

    // hola!
    'use strict';
    return a + b + 'arr' + c;
};

var myArr = [1, 2, 3, 4];
var variable1 = {
	'a1': 'a1',
	'a2': 'a2'
};
var a = 1;
a = variable1['a' + a];

myFnc(1, 2, myArr);

if (myArr[0] > myArr[1])
{
    myArr = 1;
}

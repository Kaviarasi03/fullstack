function drivingTest(age) 
{
    if (age > 18) {
        var msg="eligible";
    } else {
        var msg="not eligible";
    }
    
    console.log(msg);

drivingTest(20);

}

// ****while loop******
var i = 0;
var result;

while(i<10){
    result +="the current counter is at "+i;
    i++;

}
console.log(result)
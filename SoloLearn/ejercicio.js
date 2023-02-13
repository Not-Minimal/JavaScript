function main() {
    //take the number of passed levels
    var levels = parseInt(readLine(),10);
    var points = new Array();
    
    var count = 0;
    while(count<levels){
        var elem = parseInt(readLine(),10);
        points[count] = elem;
        count++;
    }
    
    var sum = 0;
    //calculate the sum of points
    sum = points.reduce(function(a,b){
    return a + b
}, 0);
    //output
    console.log(sum);
}
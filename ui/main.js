var button = document.getelementbyid('counter');
var button = 0;
button.onclick = function() {
    counter= counter+1;
    var span= document.getelementbyid('count');
    span.innerhtml=counter.tostring();
};

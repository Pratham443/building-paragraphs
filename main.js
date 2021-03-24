function showpara1() {
    var inputs = [];

    for(var i = 1; i <= 6; i++) {
        var input = document.getElementById("para1_input" + i).value;
        inputs.push(input);
    }
    document.getElementById("show_para1").innerHTML = inputs.join(". ");
}

function showpara2() {
    var inputs2 = [];

    for(var j = 1; j <= 6; j++) {
        var input = document.getElementById("para2_input" + j).value;
        inputs2.push(input);
    }
    document.getElementById("show_para2").innerHTML = inputs2.join(". ");
}
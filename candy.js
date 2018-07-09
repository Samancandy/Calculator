var operator = false;
function clearBox(){
    document.getElementById("screen").value = 0;
    left_val = null; right_val = null;
    operator = false;
}
function deleteBox(){
    var value = document.getElementById("screen").value;
    operator = false;
    if(value.length == 1)
        document.getElementById("screen").value = 0;
    else{
        var v = value.substring(0, value.length - 1);
        document.getElementById("screen").value = v;
        left_val = v; right_val = null;
    }
}
function numberInput(element){
    var value = document.getElementById("screen").value;
    if(operator){
        value = "0";
        operator = false;
    }
    switch(element.id){
        case "one": solNum(value, 1); break; 
        case "two": solNum(value, 2); break; 
        case "three": solNum(value, 3); break;
        case "four": solNum(value, 4); break;
        case "five": solNum(value, 5); break;
        case "six":  solNum(value, 6); break;
        case "serven": solNum(value, 7); break;
        case "eigh": solNum(value, 8); break;
        case "nigh": solNum(value, 9); break;
        case "dot":
            if(value == 0)
                document.getElementById("screen").value = "0.";
            else if(value.includes(".") || value.length >= 9) return;
            else
                document.getElementById("screen").value = value + ".";
            break;
        case "zero":
            solNum(value, 0);
            break;
        case "zero2":
            if(value == 0 && !value.includes(".") || value.length >= 9)
                solNum(value, 0);
            else solNum(value, "00");
            break;
        default:
            window.alert("Error occouring from input number buttons.");
    }
}
function solNum(value, num){
    if(value == 0 && !value.includes("."))
        document.getElementById("screen").value = num;
    else if(value.length < 10)
        document.getElementById("screen").value = value + num;
}
var left_val = null, right_val = null;
var operator_sign = null;
function operator_click(ele){
    var val = document.getElementById("screen").value,
        operator_sign2 = null;
    if(ele.id != "equals"){
        operator_sign2 = ele.id;
        operator = true;
        left_val = null;
    }
    if(left_val == null){
        left_val = val;
        operator_sign = operator_sign2;
    }
    else{
        right_val = val;
    }
    if(left_val != null && right_val != null && operator_sign != null){
        left_val = calculate(operator_sign);
        document.getElementById("screen").value = left_val;
        operator_sign = operator_sign2;
    }
}
function calculate(operator_sign){
    switch(operator_sign){
        case "multiply": return parseFloat(left_val) * parseFloat(right_val);
        case "devide": return parseFloat(left_val) / parseFloat(right_val);
        case "plus": return parseFloat(left_val) + parseFloat(right_val);
        case "minus": return parseFloat(left_val) - parseFloat(right_val);
        case "equals": return left_val;
        default: window.alert("Error occuring from the operator buttons");
    }
}
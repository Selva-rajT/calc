

var result = document.getElementById('screen');
function v(val){

    result.value +=val;
    event.preventDefault();
}
function d(){
    try{
        result.value=eval(result.value);
        event.preventDefault();
    }
    catch(e){
        window.alert("error");
    }
    
}
function del(){
    result.value=result.value.slice(0,-1);
    event.preventDefault();
}
function c(){
    result.value=" "
    event.preventDefault();
}
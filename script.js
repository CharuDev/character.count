var text = document.getElementById("txt");
var chara = document.getElementById("char");
var rema = document.getElementById("rema")
text.addEventListener("input", function() {
    var btxt = text.value.length;
    var rem = 50 - btxt;
    if(btxt>50){
        text.disabled=true;
        alert("you have complete 50 character")
    }
    else{
    chara.innerHTML=`character: ${btxt}`;
    rema.innerHTML=`Remaining :${rem}`;
    console.log("Remaining:", rem);
    console.log("Text length:", btxt);
    }
});

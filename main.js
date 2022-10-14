function setTipPercent(percent, id) {
    tipPercent = percent;
    document.getElementById("customTipPercentage").value = percent;
    document.getElementById("customTipPercentage").hidden = true;
    let buttons = document.getElementsByClassName("percent-btn");
    for (let i of buttons) {
        // alert(i.id);
        i.classList.remove("btn-success");
        i.classList.add("btn-secondary");
    }
    document.getElementById(id).classList.add("btn-success");
}
function customTip() {
    let customTipPercent = document.getElementById("customTipPercentage");
    let buttons = document.getElementsByClassName("percent-btn");
    for (let i of buttons) {
        // alert(i.id);
        i.classList.remove("btn-success");
    }
    if (customTipPercent.hidden == true) {
        customTipPercent.hidden = false;
    }
    else {
        customTipPercent.hidden = true;
        customTipPercent.value = "";
    }
    document.getElementById("btn-custom").classList.remove("btn-secondary");
    document.getElementById("btn-custom").classList.add("btn-success");
}


function calculateTip() {
    let billAmt = document.getElementById("billamt");
    let peopleAmt = document.getElementById("peopleamt");
    let customTipPercent = document.getElementById("customTipPercentage");
    if (billAmt.value == "") {
        alert("Please Enter Bill Amount");
        return;
    }
    // alert(customTipPercent.value == "");
    if (customTipPercent.value == "" && typeof(tipPercent) == "undefined") {
        alert("Please choose tip percentage!");
        return;
    }
    let tipAmt = 0;
    if (customTipPercent.value != "") {
        tipAmt = (billAmt.value * customTipPercent.value) / 100;    
    }
    else {
        tipAmt = (billAmt.value * tipPercent) / 100;
    }
    let totalAmt = Number(billAmt.value) + tipAmt;
    if (peopleAmt.value != "") {
        document.getElementById("tipamt").innerText = "$" + (tipAmt / peopleAmt.value).toFixed(2) + " Each";
        document.getElementById("totalamt").innerText = "$" + (totalAmt / peopleAmt.value).toFixed(2) + " Each";
        return;
    }
    // alert(totalAmt);
    document.getElementById("tipamt").innerText = "$" + (tipAmt).toFixed(2);
    document.getElementById("totalamt").innerText = "$" + (totalAmt).toFixed(2);
    return;
}
function calculateTip() {
    let billAmt = document.getElementById("billamt");
    let peopleAmt = document.getElementById("peopleamt");
    let tipPercent = document.getElementById("tipPercent");
    if (billAmt.value == "") {
        alert("Please Enter Bill Amount");
        return;
    }
    // alert(serviceQual.value);
    if (tipPercent.value == "none") {
        alert("Please choose tip percentage!");
        return;
    }
    let tipAmt = billAmt.value * tipPercent.value;
    if (peopleAmt.value != "") {
        document.getElementById("tipamt").innerText = (tipAmt / peopleAmt.value).toFixed(2) + " Each";
        return;
    }
    document.getElementById("tipamt").innerText = (tipAmt).toFixed(2);
    return;
}
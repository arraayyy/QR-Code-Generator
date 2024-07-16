function genQR() {
    var api = "https://api.qrserver.com/v1/create-qr-code/?size=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        myimg.src = api + mysize + "x" + mysize + "&data=" + encodeURIComponent(mytext);
    } else {
        alert("Please enter the text and select the size");
    }
}

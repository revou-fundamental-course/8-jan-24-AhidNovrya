function hitung() {
    var sisi = parseFloat(document.getElementById("sisi").value);

    if (!isNaN(sisi) && sisi > 0) {
        var luas = sisi * sisi;
        var keliling = 4 * sisi;

        document.getElementById("luas").innerText = luas;
        document.getElementById("keliling").innerText = keliling;
    } else {
        alert("Masukkan panjang sisi yang valid!");
    }
}

function reset() {
    document.getElementById("sisi").value = "";
    document.getElementById("luas").innerText = "";
    document.getElementById("keliling").innerText = "";
}
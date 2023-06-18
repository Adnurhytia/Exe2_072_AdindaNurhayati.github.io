function sendData() {
    var name = document.getElementById("name").value;
    var dateInput = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var seat = document.querySelector("input[name=seat]:checked");

    if (seat) {
        seat = seat.value;
    }

    alert(
        "Name: " + name +
        "\nGender: " + gender +
        "\nSeat: " + seat +
        "\nAddress: " + address
    );
}

document.getElementById("date").addEventListener("change", function() {
    alert("Anda memilih tanggal: " + this.value);
});

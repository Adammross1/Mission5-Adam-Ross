function Calculate() {
    var hours = $("#hours").val();
    var total = hours * 20;
    var existingContent = $("#output").value();

    if ($.isNumeric(total) && total >= 0) {
        $("#output").value(existingContent + "$" + total);
    } else if (total === "") {
        $("#output").html("Invalid input. Please enter a number.");
    } else {
        $("#output").html("Invalid input. Please enter a positive number.");
    }
}
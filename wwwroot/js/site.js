function Calculate() {
    // Get the value from the input field
    var hours = $('#hours').val();

    // Check if the input is a valid number
    if ($.isNumeric(hours) && hours >= 0) {
        var total = hours * 20;
        $('#output').html($('#output').html() + '$' + total);
    }
    else {
        $('#output').html('Please enter a valid number.');
    }
 
}
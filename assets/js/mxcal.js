$(document).ready(function() {

    $("#mxCalBtn").click(function() {


        var ald = Number($("#mxAld").val());


        var maxul = Math.round((208 - 0.7 * ald) * Math.pow(10, 0)) / Math.pow(10, 0);


        $("#mxMaxpul").text(maxul);

    });

    // restricting with decimal places
    $("#mxAld").keydown(function(e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) { // if shift, ctrl or alt keys held down
            e.preventDefault(); // Prevent character input
        }
        else {
            var n = e.keyCode;
            if (!((n == 8) // backspace
                    ||
                    (n == 190) // period
                    ||
                    (n == 110) // decimal point
                    ||
                    (n == 46) // delete
                    ||
                    (n >= 35 && n <= 40) // arrow keys/home/end
                    ||
                    (n >= 48 && n <= 57) // numbers on keyboard
                    ||
                    (n >= 96 && n <= 105)) // number on keypad
            ) {
                e.preventDefault(); // Prevent character input
            }
        }
    });

});
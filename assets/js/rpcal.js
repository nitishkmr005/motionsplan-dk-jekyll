$(document).ready(function() {

    $("#rpCalBtn").click(function() {

        var borg = Number($("#rpBorg").val());
        var ald = Number($("#rpAlder").val());
        var wgt = Number($("#rpVgt").val());

        var iltoptag = (1.19 * borg / 9.82 * 60) - (15.84 * ald) + (13.06 * wgt) + 1365;


        var maxiltop = Math.round((iltoptag / 1000) * Math.pow(10, 2)) / Math.pow(10, 2)
        var kondi = Math.round((iltoptag / wgt) * Math.pow(10, 1)) / Math.pow(10, 1)


        $("#rpIltop").text(maxiltop);
        $("#rpKond").text(kondi);

    });

    // restricting with decimal places
    $("#rpBorg,#rpAlder,#rpVgt").keydown(function(e) {
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

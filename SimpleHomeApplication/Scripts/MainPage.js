window.onload = function (e) {

}

function RightInputField(value) {
    var str = value;
    var patt1 = /([0-9]{1,}\.[0-9]{1,2})|([0-9]{1,})/g;
    var result = str.match(patt1);
    return result;
}

function PerformMinusOperation() {
    if ($('#ElectricCurrentMeter').val() != "" && $('#ElectricStartMeter').val() != "") {
        var result = parseInt($('#ElectricCurrentMeter').val()) - parseInt($('#ElectricStartMeter').val());
        return result.toString();
    }
}

function RateMultiply() {
    if ($('#electricUsage').text() != "") {
        var result = (parseFloat($('#electricUsage').text()) * parseFloat($('#electricRate').text())).toFixed(2);
        $("#electricAmount").text(result.toString());
    }
}

function UpdateTotalTable() {

}

$(document).ready(function () {
    $("#ElectricStartMeter").change(function () {
        $("#ElectricStartMeter").val(RightInputField($("#ElectricStartMeter").val()));
        $('#electricUsage').text(PerformMinusOperation());
        RateMultiply();
    });

    $("#ElectricCurrentMeter").change(function () {
        $("#ElectricCurrentMeter").val(RightInputField($("#ElectricCurrentMeter").val()));
        $('#electricUsage').text(PerformMinusOperation());
        RateMultiply();
    });

    $("#WaterStartMeter").change(function () {
        $("#WaterStartMeter").text(RightInputField);
    });

    $("#WaterCurrentMeter").change(function () {
        $("#WaterCurrentMeter").text(RightInputField);
    });

});
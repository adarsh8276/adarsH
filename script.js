function convert(from) {
    var celsius = parseFloat(document.getElementById(from + "-input").value);
    var fahrenheit = celsius * 9/5 + 32;
    var kelvin = celsius + 273.15;
    document.getElementById("fahrenheit-result").innerHTML = fahrenheit.toFixed(2) + "°F";
    document.getElementById("kelvin-result").innerHTML = kelvin.toFixed(2) + "K";
}

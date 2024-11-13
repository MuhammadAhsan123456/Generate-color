function generateBgColor() {
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)
    var body = document.querySelector('body');
    var hexField = document.querySelector('#hex-code')
    var generatedCode = `#${hexColor}`

    hexField.innerHTML = generatedCode

    body.style.backgroundColor = generatedCode

}
// setInterval(generateBgColor, 100)




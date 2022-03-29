
document.getElementById("container-form").addEventListener("submit", function (e) {
    e.preventDefault()
    const colorHex = document.getElementById("color-picker").value
    const colorMode = document.getElementById("color-mode").value

    const colorHexCode = colorHex.replace('#', '');

    fetch('https://www.thecolorapi.com/scheme?hex=' + colorHexCode + '&mode=' + colorMode)

        .then(response => response.json())
        .then(data => {
            const colorsArr = data.colors
            let html = ""
            for (let color of colorsArr) {
                const colorHexCodes = color.hex
                console.log(colorHexCodes.value);
                html += `
            <div class="color-displayed" style="background-color: ${colorHexCodes.value};"><div class="displayed-text"><p>${colorHexCodes.value}</p></div></div>
        `
            }
            document.getElementById("color-displayer").innerHTML = html
        }
        );
})



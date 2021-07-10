function shadowpicture(options) {

    let images = document.querySelectorAll('.shadowpicture')

    if (options.shadow_type === "hard")

        options.shadow_type = '10px'

    else
        options.shadow_type = '0px'


    images.forEach((image) => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if (options.padding) {
            image.style.padding = '1em';
        }

    })
}

module.exports.shadowpicture = shadowpicture
var isEvenCount
var count = 1

function Toggler() {
    function InteractionCount() {
        count++
        isEvenCount = (count % 2 == 0)
    }

    function toggleClass(elementId, preClass, aftClass) {
        var el = document.getElementById(`${elementId}`)
        if (isEvenCount) {
            el.className = el.className.replace(`${preClass}`, `${aftClass}`);
        }
        else {
            el.className = el.className.replace(`${aftClass}`, `${preClass}`);
        }
    }

    function toggleImage(elementId, fromImg, toImg) {
        var el = document.getElementById(`${elementId}`)
        if (isEvenCount) {
            el.src = `${toImg}`
            console.log(`image source set to ${toImg}`)
        } else {
            el.src = `${fromImg}`
            console.log(`image source set to ${fromImg}`)
        }
    }
}

module.exports.Toggler = Toggler
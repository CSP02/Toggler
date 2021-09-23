class Toggler {
    toggleClass(elementId, preClass, aftClass) {
        var el = document.getElementById(`${elementId}`)
        if (el.className == `${preClass}`) {
            el.className = `${aftClass}`;
        }
        else if (el.className == `${aftClass}`) {
            el.className = `${preClass}`;
        }
    }
    toggleImage(elementId, fromImg, toImg) {
        var el = document.getElementById(`${elementId}`)
        if (el.src == `${fromImg}`) {
            el.src = `${toImg}`
            console.log(`image source set to ${toImg}`)
        } else if (el.src == `${toImg}`) {
            el.src = `${fromImg}`
            console.log(`image source set to ${fromImg}`)
        }
    }
}
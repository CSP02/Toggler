class Toggler {
    //toggleClass() will toggle the provided class name and the current class name. Works for multiple classes too
    toggleClass(elementId, preClass, aftClass) {
        var element = document.getElementById(elementId)
        const isCCGO = element.className.split(" ").length > 1 //isCCGO stands for isClassCountGreaterThanOne
        if (!isCCGO) {
            if (element.className == preClass) {
                element.className = aftClass
            } else if (element.className == aftClass) {
                element.className = preClass
            }
        } else if (isCCGO) {
            let replaced = element.className.split(' ')
            replaced.forEach(value => {
                if (value == preClass) {
                    let replacedVal = element.className.replace(value, '')
                    element.className = `${replacedVal}  ${aftClass}`
                } else if (value == aftClass) {
                    let replacedVal = element.className.replace(value, '')
                    element.className = `${replacedVal}  ${preClass}`
                }
            })
        }
    }

    //toggleImage() is the method which will toggle the src image of the image tag
    toggleImage(elementId, fromImg, toImg) {
        let element = document.getElementById(elementId)
        if (element.src.includes(fromImg)) {
            element.src = toImg
        } else if (element.src.includes(toImg)) {
            element.src = fromImg
        }
    }


    //ToggleSlide which will toggles the slide or an element in given direction
    toggleSlide(elementId, direction, speed) {
        let element = document.getElementById(elementId)
        let elWidth = element.offsetWidth
        let elHeight = element.offsetHeight
        let offsetLeft = element.offsetLeft
        let addPos = offsetLeft
        let offsetTop = element.offsetTop
        let addPosTop = offsetTop
        if (direction == 'horizontal') {
            if (offsetLeft > -elWidth)
                toggle = setInterval(fadeHorizontal, speed)
            else if (offsetLeft <= -elWidth)
                toggle = setInterval(fadeOutHorizontal, speed)
        } else if (direction == 'vertical') {
            if (offsetTop > -elHeight)
                toggle = setInterval(fadeVertical, speed)
            else if (offsetTop <= -elHeight)
                toggle = setInterval(fadeOutVertical, speed)
        }
        function fadeHorizontal() {
            if (offsetLeft <= -elWidth)
                clearInterval(toggle)
            else {
                console.log(offsetLeft)
                offsetLeft -= 10;
                element.style.left = offsetLeft + 'px';
            }
        }
        function fadeOutHorizontal() {
            if (offsetLeft >= elWidth + addPos)
                clearInterval(toggle)
            else {
                offsetLeft += 10;
                element.style.left = offsetLeft + 'px';
            }
        }
        function fadeVertical() {
            if (offsetTop <= -elHeight)
                clearInterval(toggle)
            else {
                offsetTop -= 10;
                element.style.top = offsetTop + 'px';
            }
        }
        function fadeOutVertical() {
            if (offsetTop >= elHeight + addPosTop)
                clearInterval(toggle)
            else {
                offsetTop += 10;
                element.style.top = offsetTop + 'px';
            }
        }
    }

    //togglers the Property of the element with reference to the id of the element
    toggleProperty(elementId, property, fromValue, toValue) {
        let element = document.getElementById(elementId);
        if (element.style.getPropertyValue(property) == null || element.style.getPropertyValue(property) == '') {
            element.style.setProperty(property, toValue)
            return
        }
        if (element.style.getPropertyValue(property) == fromValue) element.style.setProperty(property, toValue)
        else element.style.setProperty(property, fromValue)
    }
}
class Toggler {
    //toggleClass() will toggle the provided class name and the current class name. Works for multiple classes too
    toggleClass(elementId, preClass, aftClass) {
        var el = document.getElementById(elementId)
        const isCCGO = el.className.split(" ").length > 1 //isCCGO stands for isClassCountGreaterThanOne
        if (el.className.includes(preClass) && !isCCGO) {
            el.className = aftClass;
        }
        else if (el.className.includes(preClass) && isCCGO) {
            var replaced = el.className.replace(preClass, '')
            el.className = replaced + aftClass;
        } else if (el.className.includes(aftClass) && !isCCGO) {
            el.className = preClass;
        }
        else if (el.className.includes(aftClass) && isCCGO) {
            var replaced = el.className.replace(aftClass, '')
            el.className = replaced + preClass;
        }
    }

    //toggleImage() is the method which will toggle the src image of the image tag
    toggleImage(elementId, fromImg, toImg) {
        var el = document.getElementById(`${elementId}`)
        if (el.src.includes(fromImg)) {
            el.src = toImg
        } else if (el.src.includes(toImg)) {
            el.src = fromImg
        }
    }


    //ToggleSlide which will toggles the slide or an element in given direction
    toggleSlide(elementId, direction, speed) {
        var el = document.getElementById(`${elementId}`)
        var elWidth = el.offsetWidth
        var elHeight = el.offsetHeight
        var offsetLeft = el.offsetLeft
        var addPos = offsetLeft
        var offsetTop = el.offsetTop
        var addPosTop = offsetTop
        if (direction == 'horizontal') {
            if (offsetLeft > -elWidth)
                var toggle = setInterval(fadeHorizontal, speed)
            else if (offsetLeft <= -elWidth)
                var toggle = setInterval(fadeOutHorizontal, speed)
        } else if (direction == 'vertical') {
            if (offsetTop > -elHeight)
                var toggle = setInterval(fadeVertical, speed)
            else if (offsetTop <= -elHeight)
                var toggle = setInterval(fadeOutVertical, speed)
        }
        function fadeHorizontal() {
            if (offsetLeft <= -elWidth)
                clearInterval(toggle)
            else {
                console.log(offsetLeft)
                offsetLeft -= 10;
                el.style.left = offsetLeft + 'px';
            }
        }
        function fadeOutHorizontal() {
            if (offsetLeft >= elWidth + addPos)
                clearInterval(toggle)
            else {
                offsetLeft += 10;
                el.style.left = offsetLeft + 'px';
            }
        }
        function fadeVertical() {
            if (offsetTop <= -elHeight)
                clearInterval(toggle)
            else {
                offsetTop -= 10;
                el.style.top = offsetTop + 'px';
            }
        }
        function fadeOutVertical() {
            if (offsetTop >= elHeight + addPosTop)
                clearInterval(toggle)
            else {
                offsetTop += 10;
                el.style.top = offsetTop + 'px';
            }
        }
    }

    //togglers the Property of the element with reference to the id of the element
    toggleProperty(elementIdOrClass, property, fromValue, toValue) {
        var el = document.getElementById(elementIdOrClass);
        if (el.style.getPropertyValue(property) == null || el.style.getPropertyValue(property) == '') {
            el.style.setProperty(property, toValue)
            return
        }
        if (el.style.getPropertyValue(property) == fromValue) el.style.setProperty(property, toValue)
        else el.style.setProperty(property, fromValue)
    }
}
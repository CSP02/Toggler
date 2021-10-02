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
                var toggle = setInterval(fadeVertical, duration)
            else if (offsetTop <= -elHeight)
                var toggle = setInterval(fadeOutVertical, duration)
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
        if (el.style.getPropertyValue(`${property}`) == `${fromValue}`) el.style.setProperty(`${property}`, `${toValue}`)
        else el.style.setProperty(`${property}`, `${fromValue}`)
    }
}
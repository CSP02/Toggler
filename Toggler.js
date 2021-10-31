class Toggler {
    //toggleClass() will toggle the provided class name and the current class name. Works for multiple classes too
    toggleClass(elementId, preClass, aftClass) {
        try {
            if (elementId == null) {
                throw new SyntaxError('ElementID was not provided')
            } else if (preClass == null) {
                throw new SyntaxError('(preClass is not provided) Previous class or current class is not provided.')
            } else if (aftClass == null) {
                throw new SyntaxError('(aftClass is not provided) Provide a string of class name that toggler has to toggle between.')
            } else if (!isNaN(elementId) || !isNaN(preClass) || !isNaN(aftClass)) {
                throw new TypeError('All the parameters are strings. Check if you passed the string parameters.')
            }
            let element = document.getElementById(elementId)
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
        } catch (e) {
            if (e instanceof TypeError && e.message.includes('null'))
                e = 'Provided ID was not found check if there is a typo in the parameters passed.\n'
            const dialog = document.createElement('dialog')
            dialog.className = "CSP'sDialogClass"
            dialog.id = "CSP'sDialogClass"
            dialog.style = 'height:auto;width:300px;margin:-50% auto auto 30%;padding: 3%;font-size: 18px;text-align: center;text- ustify: initial;color: rgb(221, 221, 221);background-color: rgba(37, 37, 37, 0.6);backdrop-filter: blur(15px);border:none;border-radius:6px;float:right;'
            this.errorHandling(dialog, e)
            setTimeout(() => {
                dialog.remove()
            }, 10000)
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

    errorHandling = function (dialog, e) {
        document.body.appendChild(dialog)
        let splitted = e.stack.split('\n')
        splitted = splitted[2].split('at')
        dialog.innerHTML += `${e.message}<br><span style="color:red;">at ${splitted[1]}</span><br><button id="CSP'scloseDialog" onclick="TogglerCloseDialog()">Close</button>`
        dialog.open = true
    }
}

function TogglerCloseDialog() {
    let dialogs = document.getElementById("CSP'sDialogClass")
    dialogs.remove()
}
let count = 0;

class Toggler {
    //toggleClass() will toggle the provided class name and the current class name. Works for multiple classes too
    toggleClass(elementId, preClass, aftClass) {
        try {
            if (elementId == null) {
                throw 'ElementID was not provided';
            } else if (preClass == null) {
                throw '(preClass is not provided) Previous class or current class is not provided.';
            } else if (aftClass == null) {
                throw '(aftClass is not provided) Provide a string of class name that toggler has to toggle between.';
            } else if (!isNaN(elementId) || !isNaN(preClass) || !isNaN(aftClass)) {
                throw 'All the parameters are strings. Check if you passed the string parameters.';
            }
            let element = document.getElementById(elementId);
            const isCCGO = element.className.split(" ").length > 1; //isCCGO stands for isClassCountGreaterThanOne
            if (!isCCGO) {
                if (element.className == preClass) {
                    element.className = aftClass;
                } else if (element.className == aftClass) {
                    element.className = preClass;
                }
            } else if (isCCGO) {
                let replaced = element.className.split(' ');
                replaced.forEach(value => {
                    if (value == preClass) {
                        let replacedVal = element.className.replace(value, '');
                        element.className = `${replacedVal}  ${aftClass}`;
                    } else if (value == aftClass) {
                        let replacedVal = element.className.replace(value, '');
                        element.className = `${replacedVal}  ${preClass}`;
                    }
                })
            }
        } catch (e) {
            const dialog = document.createElement('dialog');;
            dialog.className = "CSP'sDialogClass";;
            dialog.id = "CSP'sDialogClass";;
            dialog.style = 'height:auto;width:300px;margin:-50% auto auto 30%;padding: 3%;font-size: 18px;text-align: center;text- ustify: initial;color: rgb(221, 221, 221);background-color: rgba(37, 37, 37, 0.6);backdrop-filter: blur(15px);border:none;border-radius:6px;float:right;';
            this.errorHandling(dialog, e);
            setTimeout(() => {
                dialog.remove();
            }, 10000);
        }
    }

    //toggleImage() is the method which will toggle the src image of the image tag
    toggleImage(elementId, fromImg, toImg) {
        try {
            if (elementId == null) {
                throw 'ElementID was not provided';
            } else if (fromImg == null) {
                throw '(fromImg is not provided) The current src of this img tag is not provided.';
            } else if (toImg == null) {
                throw '(toImg is not provided) Provide the src of the image to which toggler has to toggle between.';
            } else if (!isNaN(elementId) || !isNaN(fromImg) || !isNaN(toImg)) {
                throw 'All the parameters are strings. Check if you passed the string parameters.';
            }
            let element = document.getElementById(elementId);
            if (element.src.includes(fromImg)) {
                element.src = toImg;
            } else if (element.src.includes(toImg)) {
                element.src = fromImg;
            }
        } catch (e) {
            const dialog = document.createElement('dialog');
            dialog.className = "CSP'sDialogClass";
            dialog.id = "CSP'sDialogClass";
            dialog.style = 'border-radius:6px;height:auto;width:300px;margin:-50% auto auto 30%;padding: 3%;font-size: 18px;text-align: center;text- ustify: initial;color: rgb(221, 221, 221);background-color: rgba(37, 37, 37, 0.6);backdrop-filter: blur(15px);border:none;border-radius:6px;float:right;';
            this.errorHandling(dialog, e);
            setTimeout(() => {
                dialog.remove();
            }, 10000);
        }
    }


    //ToggleSlide which will toggles the sliding machanism of an element from given direction
    toggleSlide(elementId, fromDirection, speed) {
        try {
            if (elementId == null) {
                throw 'ElementID was not provided';
            } else if (fromDirection == null) {
                throw '(fromDirection is not provided) Provide the direction of the slide from which side the slide should start.';
            } else if (speed == null) {
                throw '(speed or time is not provided) Provide a time in seconds and it can be a number(float or an integer) or a string.';
            } else if (!isNaN(elementId) || !isNaN(fromDirection)) {
                throw 'All the parameters are strings. Check if you passed the string parameters.';
            }
            let element = document.getElementById(elementId);
            let elementHeight = element.offsetHeight;
            let elementWidth = element.offsetWidth;
            element.style.transition = `${speed}s ease-in-out`;
            if (fromDirection == 'right' || fromDirection == 'left') {
                if (fromDirection == 'right') {
                    element.style.float = 'right';
                }
                element.style.setProperty(`margin-${fromDirection}`, `-${elementWidth + 100}px`);
            }
            else if (fromDirection == 'top') {
                element.style.setProperty(`margin-${fromDirection}`, `-${elementHeight + 100}px`);
            }
            count++;
            if (count % 2 != 0) {
                    element.style.setProperty(`margin-${fromDirection}`, `0px`);
            }
        } catch (e) {
            const dialog = document.createElement('dialog');
            dialog.className = "CSP'sDialogClass";
            dialog.id = "CSP'sDialogClass";
            dialog.style = 'height:auto;width:300px;margin:-50% auto auto 30%;padding: 3%;font-size: 18px;text-align: center;text- ustify: initial;color: rgb(221, 221, 221);background-color: rgba(37, 37, 37, 0.6);backdrop-filter: blur(15px);border:none;border-radius:6px;float:right;';
            this.errorHandling(dialog, e);
            setTimeout(() => {
                dialog.remove();
            }, 10000);
        }
    }

    //togglers the Property of the element with reference to the id of the element
    toggleProperty(elementId, property, fromValue, toValue) {
        try {
            if (elementId == null) {
                throw 'ElementID was not provided';
            } else if (property == null) {
                throw '(property is not provided) Previous which style property toggler has to change or toggle.';
            } else if (fromValue == null) {
                throw '(fromValue is not provided) Provide the current value of property that toggler has to toggle between.';
            } else if (toValue == null) {
                throw '(toValue is not provided) Provide the value of property to which toggler has to toggle between.';
            } else if (!isNaN(elementId) || !isNaN(property) || !isNaN(fromValue) || !isNaN(toValue)) {
                throw 'All the parameters are strings. Check if you passed the string parameters.';
            }
            let element = document.getElementById(elementId);
            if (element.style.getPropertyValue(property) == null || element.style.getPropertyValue(property) == '') {
                element.style.setProperty(property, toValue);
                return;
            }
            if (element.style.getPropertyValue(property) == fromValue) element.style.setProperty(property, toValue);
            else element.style.setProperty(property, fromValue);
        } catch (e) {
            const dialog = document.createElement('dialog');
            dialog.className = "CSP'sDialogClass";
            dialog.id = "CSP'sDialogClass";
            dialog.style = 'height:auto;width:300px;margin:-50% auto auto 30%;padding: 3%;font-size: 18px;text-align: center;text- ustify: initial;color: rgb(221, 221, 221);background-color: rgba(37, 37, 37, 0.6);backdrop-filter: blur(15px);border:none;border-radius:6px;float:right;';
            this.errorHandling(dialog, e);
            setTimeout(() => {
                dialog.remove();
            }, 10000);
        }
    }

    errorHandling = function (dialog, e) {
        document.body.appendChild(dialog);
        dialog.innerHTML += `${e}<br><span style="color:red;"></span><br><button style="border-radius:6px;border:none;" onclick="TogglerCloseDialog()">Close</button>`
        dialog.open = true;
    }

    Inc() {
        count++;
    }
}

function TogglerCloseDialog() {
    let dialogs = document.getElementById("CSP'sDialogClass");
    dialogs.remove();
}
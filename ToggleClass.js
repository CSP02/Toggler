var count = 0;
var isEvenCount;

function toggleClass(elementId, preClass, aftClass) {
    count++;
    isEvenCount = (count % 2 == 0)
    ToggleClassName('test', 'test', 'toggleTest', isEvenCount)
}

function ToggleClassName(elementId, preClass, aftClass, isEvenCount) {
    var el = document.getElementById(`${elementId}`)
    if (isEvenCount) {
        el.className = el.className.replace(`${preClass}`, `${aftClass}`);
    }
    else {
        el.className = el.className.replace(`${aftClass}`, `${preClass}`);
    }
}
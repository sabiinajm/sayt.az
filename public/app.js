function drop(button) {
    const menuId = button.getAttribute('data-dropdown-toggle')
    const menu = document.getElementById(menuId)
    document.querySelectorAll('[data-dropdown-toggle]').forEach(btn => {
        const otherMenuId = btn.getAttribute('data-dropdown-toggle')
        const otherMenu = document.getElementById(otherMenuId)
        if (otherMenuId !== menuId && !otherMenu.classList.contains('hidden')) {
            otherMenu.classList.add('hidden')
        }
    })
    menu.classList.toggle('hidden')
}
function controlMenu() {
    const hamMenu = document.getElementById('hamburger-menu')
    hamMenu.classList.toggle('hidden')
}

const sehifeShow = document.getElementById('sehifeShow')
const xerc1 = document.getElementById('xerc1')
const xerc1copy = document.getElementById('xerc1copy')
const sliderRange = document.getElementById('sliderRange')
const seviyyeRange = document.getElementById('seviyyeRange')

sehifeShow.innerHTML = sliderRange.value
xerc1.innerHTML = sliderRange.value * 100
xerc1copy.innerHTML = xerc1.innerHTML

sliderRange.oninput = function () {
    sehifeShow.innerHTML = this.value
    xerc1.innerHTML = seviyyeRange.value * this.value * 100
    xerc1copy.innerHTML = xerc1.innerHTML
    updateTotal()
}
seviyyeRange.oninput = function () {
    xerc1.innerHTML = sliderRange.value * this.value * 100
    xerc1copy.innerHTML = xerc1.innerHTML
    updateTotal()
}

const xerc2 = document.getElementById('xerc2')
const xerc2copy = document.getElementById('xerc2copy')
const xerc3 = document.getElementById('xerc3')
const xerc3copy = document.getElementById('xerc3copy')
const xerc4 = document.getElementById('xerc4')
const xerc4copy = document.getElementById('xerc4copy')
const xerc5 = document.getElementById('xerc5')
const xerc5copy = document.getElementById('xerc5copy')
const allXerc = document.getElementById('allXerc')

const checkboxData = {
    bloqCheckbox: 200,
    profilCheckbox: 400,
    respCheckbox: 100,
    mesajCheckbox: 50,
    canliCheckbox: 50,
    elaqeCheckbox: 100,
    qaleryCheckbox: 100,
    formCheckbox: 400,
    axtarCheckbox: 100,
    mapCheckbox: 100,
    rezCheckbox: 400,
    sosialCheckbox: 50,
    izleCheckbox: 50,
    adminCheckbox: 300
}

const checkboxData2 = {
    metaCheckbox: 200,
    acharCheckbox: 300,
    qabaqCheckbox: 300,
    teqCheckbox: 100,
    sideCheckbox: 100
}

const checkboxData3 = {
    odenisCheckbox: 200,
    sebetCheckbox: 500,
    mehsulCheckbox: 300,
    beyenCheckbox: 300,
    filtrCheckbox: 300,
    haqqCheckbox: 200
}

function clickCheck() {
    let result1 = 0
    let result2 = 0
    let result3 = 0

    for (const [checkboxId, value] of Object.entries(checkboxData)) {
        const checkbox = document.getElementById(checkboxId)
        if (checkbox.checked) result1 += value
    }

    for (const [checkboxId, value] of Object.entries(checkboxData2)) {
        const checkbox = document.getElementById(checkboxId)
        if (checkbox.checked) result2 += value
    }

    for (const [checkboxId, value] of Object.entries(checkboxData3)) {
        const checkbox = document.getElementById(checkboxId)
        if (checkbox.checked) result3 += value
    }
    xerc2.innerHTML = xerc2copy.innerHTML = result1
    xerc3.innerHTML = xerc3copy.innerHTML = result2
    xerc4.innerHTML = xerc4copy.innerHTML = result3
    updateTotal()
}
const seviyyeRange2 = document.getElementById('seviyyeRange2')
seviyyeRange2.oninput = function () {
    xerc5.innerHTML = parseInt(this.value - 1) * 100
    if (parseInt(this.value) == 1) xerc5.innerHTML = 0
    xerc5copy.innerHTML = xerc5.innerHTML
    updateTotal()
}
function updateTotal() {
    allXerc.innerHTML = parseInt(xerc1.innerHTML) + parseInt(xerc2.innerHTML) +
        parseInt(xerc3.innerHTML) + parseInt(xerc4.innerHTML) +
        parseInt(xerc5.innerHTML)
}
function displayPopup() {
    const popup = document.getElementById("popup")
    popup.classList.toggle("hidden")
    popup.classList.toggle("flex")
}

function stopPopup(event) {
    event.stopPropagation()
}

function deletePopup() {
    const popup = document.getElementById("popup")
    popup.classList.add("hidden")
    popup.classList.remove("flex")
}

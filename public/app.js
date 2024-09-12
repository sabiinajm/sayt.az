const data = {
    'costStatic': [
        {
            'id': 5,
            'name': "Page",
            'price': 100,
            'type': "static_page"
        }
    ],
    'costDesign': [
        {
            'id': 10,
            'name': "Medium",
            'price': 2,
            'type': "design_complexity"
        },
        {
            'id': 12,
            'name': "Simple",
            'price': 1,
            'type': "design_complexity"
        },
        {
            'id': 13,
            'name': "Custom",
            'price': 3,
            'type': "design_complexity"
        }
    ],
    "costLogo": [
        {
            "id": 7,
            "name": "Custom",
            "price": 200,
            "type": "logo_design"
        },
        {
            "id": 15,
            "name": "No need",
            "price": 0,
            "type": "logo_design"
        },
        {
            "id": 20,
            "name": "Simple",
            "price": 100,
            "type": "logo_design"
        }
    ],
    "costAddon": [
        {
            "id": 1,
            "name": "Blog",
            "price": 200,
            "type": "website_addons"
        },
        {
            "id": 2,
            "name": "Member login /‍‍‍ Profiles",
            "price": 400,
            "type": "website_addons"
        },
        {
            "id": 8,
            "name": "Responsive",
            "price": 100,
            "type": "website_addons"
        },
        {
            "id": 22,
            "name": "Forum",
            "price": 400,
            "type": "website_addons"
        },
        {
            "id": 23,
            "name": "Messaging",
            "price": 50,
            "type": "website_addons"
        },
        {
            "id": 24,
            "name": "Live Chat",
            "price": 50,
            "type": "website_addons"
        },
        {
            "id": 25,
            "name": "Gallery",
            "price": 100,
            "type": "website_addons"
        },
        {
            "id": 26,
            "name": "Contact Form",
            "price": 100,
            "type": "website_addons"
        },
        {
            "id": 27,
            "name": "On-site Search",
            "price": 100,
            "type": "website_addons"
        },
        {
            "id": 28,
            "name": "Map Data / Geolocation",
            "price": 100,
            "type": "website_addons"
        },
        {
            "id": 29,
            "name": "Booking",
            "price": 400,
            "type": "website_addons"
        },
        {
            "id": 30,
            "name": "Social Media integration",
            "price": 50,
            "type": "website_addons"
        },
        {
            "id": 31,
            "name": "Analytics / Tracking",
            "price": 50,
            "type": "website_addons"
        },
        {
            "id": 36,
            "name": "Admin Panel",
            "price": 300,
            "type": "website_addons"
        }
    ],
    "costSeo": [
        {
            "id": 3,
            "name": "Titles & Meta",
            "price": 200,
            "type": "seo_addons"
        },
        {
            "id": 32,
            "name": "Keyword research",
            "price": 300,
            "type": "seo_addons"
        },
        {
            "id": 33,
            "name": "+20 Advanced techniques",
            "price": 300,
            "type": "seo_addons"
        },
        {
            "id": 34,
            "name": "Header Tags",
            "price": 100,
            "type": "seo_addons"
        },
        {
            "id": 35,
            "name": "Sitemap",
            "price": 100,
            "type": "seo_addons"
        }
    ],
    "costSetting": [
        {
            "id": 18,
            "name": "min",
            "price": 450,
            "type": "setting"
        },
        {
            "id": 19,
            "name": "page",
            "price": 20,
            "type": "setting"
        }
    ],
    "costEcommerce": [
        {
            "id": 38,
            "name": "Payment",
            "price": 200,
            "type": "ecommerce"
        },
        {
            "id": 39,
            "name": "Add to cart",
            "price": 500,
            "type": "ecommerce"
        },
        {
            "id": 40,
            "name": "Products",
            "price": 300,
            "type": "ecommerce"
        },
        {
            "id": 41,
            "name": "Favourite",
            "price": 300,
            "type": "ecommerce"
        },
        {
            "id": 42,
            "name": "Filter",
            "price": 300,
            "type": "ecommerce"
        },
        {
            "id": 43,
            "name": "Description",
            "price": 200,
            "type": "ecommerce"
        }
    ]
}

const pageNum = document.getElementById('pageNum')
const pageDesign = document.getElementById('pageDesign')
const ntc0 = document.getElementById('ntc0')
const staticCost = document.getElementById('staticCost')
let totalPages = 0
function calculate() {
    totalPages = pageNum.value * pageDesign.value;
    ntc0.innerHTML = `${pageNum.value / 100} sehife/ ₼ ${totalPages}`
    staticCost.innerHTML = `₼ ${totalPages}`
    totalCost()
}
window.onload = calculate
function addElement() {
    data.costAddon.map(item => {
        bloglar.innerHTML += `
        <label onclick="vebPageCostCalc()" class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between">
        <div class="w-3/4"><span class="text-sm font-medium text-gray-900">${item.name}</span></div>
        <div><input value="${item.price}" class="sr-only peer" type="checkbox" name="${item.name}">
        <div
        class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white  after:content-['']  after:absolute  after:top-0.5  after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5  after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-[#a271f2] ">
        </div>
        </div>
        </label>
        `
    })
    data.costSeo.map(item => {
        axtarislar.innerHTML += `
            <div class="inline-flex items-center">
            <label  onclick="vebPageCostCalc()" class="relative flex items-center mr-2 rounded-full cursor-pointer"
            for="${item.name}" data-ripple-dark="true">
            <input
                        value="${item.price}"
                        id="${item.name}"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all duration-500 before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-mainLightPurple checked:bg-[#a271f2]  checked:before:bg-[#a271f2]  hover:before:opacity-40"
                        type="checkbox" name="${item.name}" />
                    <div
                        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"
                            viewBox="0 0 20 20" fill="currentColor" stroke="currentColor"
                            stroke-width="1">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z">
                            </path>
                            </svg>
                    </div>
                    </label>

                <label class="mt-px text-gray-700 cursor-pointer select-none"
                for="${item.name}">${item.name}</label>
            </div>
        `
    })

    data.costEcommerce.map(item => {
        ecommerce.innerHTML += `
            <label onclick="vebPageCostCalc()" class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between">
            <div class="w-3/4"><span class="text-sm font-medium text-gray-900">${item.name}</span>
            </div>
            <div><input value="${item.price}" class="sr-only peer" type="checkbox" name="${item.name}">
                    <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white  after:content-['']  after:absolute  after:top-0.5  after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5  after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-[#a271f2] ">
                    </div>
                    </div>
                    </label>
                    `
    })
} addElement()

function vebPageCostCalc() {
    let countBloglar = 0, countAxtarislar = 0, countEcommerce = 0, countLogo = 0

    document.querySelectorAll("#bloglar input").forEach(item => {
        if (item.checked) countBloglar += +item.value
    })

    document.querySelectorAll("#axtarislar input").forEach(item => {
        if (item.checked) countAxtarislar += +item.value
    })

    document.querySelectorAll("#ecommerce input").forEach(item => {
        if (item.checked) countEcommerce += +item.value
    })

    addCost.innerHTML = "₼" + countBloglar
    seoCost.innerHTML = "₼" + countAxtarislar
    eCost.innerHTML = "₼" + countEcommerce
    logoCost.innerHTML = "₼" + countLogo
    totalCost()
}
const allTotal = document.getElementById('allTotal')
function totalCost() {
    ntc1.innerHTML = addCost.innerHTML
    ntc2.innerHTML = seoCost.innerHTML
    ntc3.innerHTML = eCost.innerHTML
    ntc4.innerHTML = logoCost.innerHTML

    const staticCost1 = Number(staticCost.innerHTML.replace('₼', ''));
    const addCostValue = Number(addCost.innerHTML.replace('₼', ''));
    const seoCostValue = Number(seoCost.innerHTML.replace('₼', ''));
    const eCostValue = Number(eCost.innerHTML.replace('₼', ''));
    const logoCostValue = Number(logoCost.innerHTML.replace('₼', ''));
    const total = staticCost1 + addCostValue + seoCostValue + eCostValue + logoCostValue;
    allTotal.innerHTML = total;
    calculate2()
}

const designRange = document.getElementById('designRange');
const logoCost = document.getElementById('logoCost');

function calculate2() {
    const rangeValue = designRange.value;
    const selectedIndex = data.costLogo.map(i => i.price / 100);

    if (rangeValue - 1 == selectedIndex[2]) {
        logoCost.innerHTML = "₼" + selectedIndex[2] * 100;
    }
    if (rangeValue - 1 == selectedIndex[1]) {
        logoCost.innerHTML = "₼" + selectedIndex[1] * 100;
    }
    if (rangeValue - 1 == selectedIndex[0]) {
        logoCost.innerHTML = "₼" + selectedIndex[0] * 100;
    }

    totalCost();
}

//dropdowns and menu

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

// popup
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
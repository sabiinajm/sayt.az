const data = {

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
const sehifeShow = document.getElementById('sehifeShow')
const xerc1 = document.getElementById('xerc1')
const xerc1copy = document.getElementById('xerc1copy')
const ntc1copy = document.getElementById('ntc1copy')
const ntc2copy = document.getElementById('ntc2copy')
const ntc3copy = document.getElementById('ntc3copy')
const ntc4copy = document.getElementById('ntc4copy')
const sliderRange = document.getElementById('sliderRange')
const seviyyeRange = document.getElementById('seviyyeRange')
const seviyyeRange2 = document.getElementById('seviyyeRange2')
const bloglar = document.getElementById("bloglar")
const axtarislar = document.getElementById("axtarislar")
const ecommerce = document.getElementById("ecommerce")
const ntc1 = document.getElementById("ntc1")
const ntc2 = document.getElementById("ntc2")
const ntc3 = document.getElementById("ntc3")
const ntc4 = document.getElementById('ntc4')



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
function updateValues() {
    const seviyyeValue = seviyyeRange.value
    const sliderRangeVal = sliderRange.value/ 100
    sehifeShow.innerHTML = sliderRangeVal
    xerc1.innerHTML = sliderRangeVal * seviyyeValue * 100
    xerc1copy.innerHTML = xerc1.innerHTML
}

sliderRange.oninput = function() {
    const sliderValue = this.value
    const seviyyeValue = seviyyeRange.value
    sehifeShow.innerHTML = sliderValue / 100
    xerc1.innerHTML = sliderValue * seviyyeValue
    xerc1copy.innerHTML = xerc1.innerHTML
    const allXerc = document.getElementById('allXerc') 
    allXerc.innerHTML = xerc1copy.innerHTML
}

seviyyeRange.oninput = function() {
    const sliderValue = sliderRange.value
    xerc1.innerHTML = sliderValue * this.value
    xerc1copy.innerHTML = xerc1.innerHTML
    const allXerc = document.getElementById('allXerc') 
    allXerc.innerHTML = xerc1copy.innerHTML
}
updateValues()

function addElement() {
    data.costAddon.map(item => {
        bloglar.innerHTML += `
        <label onclick="vebSaytXerc()" class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between">
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
            <label  onclick="vebSaytXerc()" class="relative flex items-center mr-2 rounded-full cursor-pointer"
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
            <label onclick="vebSaytXerc()" class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between">
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
function vebSaytXerc() {
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

    const sliderValue = parseInt(seviyyeRange2.value, 10);
    const selectedOption = data.costLogo[sliderValue - 1];
    ntc4.textContent = `₼ ${selectedOption.price}`;


    ntc1.innerHTML = "₼" + countBloglar
    ntc2.innerHTML = "₼" + countAxtarislar
    ntc3.innerHTML = "₼" + countEcommerce
    ntc4.innerHTML = "₼" + countLogo;

    const xerc1copyValue = Number(document.getElementById("xerc1copy").innerText) || 0;
    const totalCost = countBloglar + countAxtarislar + countEcommerce + countLogo  + xerc1copyValue
    document.getElementById("allXerc").innerText = "₼" + totalCost; 
    
    document.getElementById("xerc2copy").innerText = countBloglar
    document.getElementById("xerc3copy").innerText = countAxtarislar
    document.getElementById("xerc4copy").innerText = countEcommerce
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
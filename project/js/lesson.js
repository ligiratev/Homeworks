// phone  block

//const phoneInput = document.querySelector ('#phone-input')
//const phoneButton = document.querySelector ('#phone-button')
//const phoneResult = document.querySelector ('#phone-result')


//const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

//phoneButton.onclick =()=>{
//    if (regExp.test(phoneInput.value)){
//      phoneResult.innerHTML = 'OK'
//        phoneResult.style.color = 'green'
//    } else {
//        phoneResult.innerHTML = 'NOT OK'
//        phoneResult.style.color ='red'
//    }
//}


const tabContentblocks = document.querySelectorAll ('.tab_content_block')
const tabs = document.querySelectorAll ('.tab_content_item')
const tabsParent = document.querySelector ('.tab_content_items')
let currentTab = 0


const hideTabContent = () => {
    tabContentblocks.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove ('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContentblocks [i].style.display = 'block'
    tabs [i].classList.add ('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent()
    tabIndex = (tabIndex + 1) % tabs.length
    console.log(tabIndex)
    showTabContent(tabIndex)
}

hideTabContent()
showTabContent(0)
setTimeout(hideTabContent, 3000)
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item,i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

somInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open ( 'GET','../data/convertor.json')
    request.setRequestHeader ('Content-Type','application.json')
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response);
        usdInput.value = ((somInput.value/ data.usd).toFixed(2))
    }
}

usdInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open ( 'GET','../data/convertor.json')
    request.setRequestHeader ('Content-Type','application.json')
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response);
        somInput.value = ((usdInput.value * data.usd).toFixed(2))
    }
}

somInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open ( 'GET','../data/convertor.json')
    request.setRequestHeader ('Content-Type','application.json')
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response);
        eurInput.value = ((somInput.value/ data.eur).toFixed(2))
    }
}
eurInput. oninput = () => {
    const request = new XMLHttpRequest()
    request.open ( 'GET','../data/convertor.json')
    request.setRequestHeader ('Content-Type','application.json')
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response);
        somInput.value = ((eurInput.value * data.eur).toFixed(2))
    }
}
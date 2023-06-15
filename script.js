

let inputs = document.getElementById('Inputs').children
let inputClass = document.querySelectorAll('.otpInput')
let paste = document.getElementById('pasteBtn')

//  ------------------------------- otp paste -------------------

paste.addEventListener('click', async () => {

    let data = await navigator.clipboard.readText().then((clipText) => (clipText));

    data = data.split('');

    [].forEach.call(document.querySelectorAll('input[type=number]'), (node, index) => {
        node.value = data[index]
    });

    paste.style.display = 'none'
})

// ------------------------------------- otp input fill and focus -----------------


for (let i = 0; i < inputs.length; i++) {

    let maxl = inputs[i].getAttribute('maxlength')

    inputs[i].addEventListener('input', (e) => {
        if (e.target.value.length >= maxl) {
            if (inputs[i].nextElementSibling) {
                inputs[i].nextElementSibling.focus()
            }
            inputs[i].style.background = '#EFF7FE'
            e.target.value = e.target.value.slice(0, maxl)

        } else {
            inputs[i].style.background = 'white'
        }
    })


    inputs[i].addEventListener('keydown', (event) => {
        if (event.target.value.length == 0) {
            if (event.key === "Backspace") {
                if (event.target.previousElementSibling) {
                    inputs[i].previousElementSibling.focus()
                }
            }
        }
    })

}

// ----------------------------- otp timer ----------------------------------

let timer = document.getElementById('time')
let time = 45;
let otpTime = setInterval(() => {
    timer.innerText = `${time--}s`
    // console.log(time)
    if (time == -1) {
        clearInterval(otpTime)
        document.getElementById('otpOption').style.color = 'blue'
        // alert('time out')
    }
}, 1000);



// ----------------------------------- otp submit --------------------------

async function otp_submit() {


    let inputValue = document.querySelectorAll('.otpInput')

    let otpData = await navigator.clipboard.readText().then((clipText) => (clipText));

    console.log(otpData)

    inputValue.forEach(item =>{
        console.log(item.value)
    })

}





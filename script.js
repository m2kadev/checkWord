const str = document.getElementById('word')
const ans = document.getElementById('answer')
const checkBtn = document.getElementById('checkBtn')


checkBtn.addEventListener('click', () => {
    let strValue = str.value
    if (strValue == '') {
        str.style.border = '1px solid red'
        ans.style.color = 'red'
        ans.innerText = "Enter your word first!"
        setTimeout(() => {
            str.style.border = 'none'
            ans.style.color = 'darkgreen'
            ans.innerText = ''
        }, 2000);
    } else if (checkP(strValue)) {
        ans.innerText = "That is true"
    } else {
        ans.innerText = "That is false"
    }
})


function isOdd(num) {
    if (num % 2 !== 0) return true
    return false
}

function checkP(str) {

    let length = str.length
    let lastIndex = length - 1
    let halfIndex = Math.floor(length / 2)
    let str1 = ''
    let str2 = ''

    for (let i = 0; i < halfIndex; i++) {
        str1 += str[i]
    }

    console.log(str1)

    if (!isOdd(length)) {
        
        for (let ii = lastIndex; ii >= halfIndex; ii--) {
            str2 += str[ii]
        }
        console.log(str2)
        if (str1 === str2) {
            return true
        } else {
            return false
        }
        
    } else {
        for (let ii = lastIndex; ii > halfIndex; ii--) {
            str2 += str[ii]
        }
        if (str1 === str2) {
            return true
        } else {
            return false
        }

    }
}


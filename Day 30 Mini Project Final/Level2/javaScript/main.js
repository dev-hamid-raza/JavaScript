//=======================================================================================
//                  ========= Getting Elements =========
//=======================================================================================

const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const telephone = document.getElementById('telephone')
const bio = document.getElementById('bio')
const firstNameSpan = document.getElementById('first-name-span')
const lastNameSpan = document.getElementById('last-name-span')
const emailSpan = document.getElementById('email-span')
const passwordSpan = document.getElementById('password-span')
const telephoneSpan = document.getElementById('telephone-span')
const bioSpan = document.getElementById('bio-span')
const submitButton = document.getElementById('submit')
const cover = document.getElementById('cover')
const coverButton = document.getElementById('close-button')
//              =========== Adding Event Listener ==========

firstName.addEventListener('input', checkingFirstName)

lastName.addEventListener('input', checkingLastName)

email.addEventListener('input', checkingEmail)

password.addEventListener('input', checkingPassword)

telephone.addEventListener('input', checkingTelephone)

bio.addEventListener('input', checkingBio)

submitButton.addEventListener('click' ,validButton)

coverButton.addEventListener('click', popClose )

//==========================================================================================
//                             =========== Functions ==========
//==========================================================================================

// Checking First Name
function checkingFirstName() {
    const string = firstName.value
    const symbolRegex = /[!@#$%^&*()\-=_+[\]{}|;:'",.<>/?\\]/g
    const result = symbolRegex.test(string)
    const nameLength = string.length
    if (result || nameLength < 3 || nameLength > 16) {
        firstNameSpan.innerHTML = 'First name must be alphanumeric and contains 3 - 16 characters'
        firstName.style.borderColor = 'red'
        return false
    } else {
        firstName.style.borderColor = 'green'
        firstNameSpan.innerHTML = ''
        return true
    }
}
// Checking the Last Name 
function checkingLastName() {
    const string = lastName.value
    const symbolRegex = /[!@#$%^&*()\-=_+[\]{}|;:'",.<>/?\\]/g
    const result = symbolRegex.test(string)
    const nameLength = string.length
    if (result || nameLength < 3 || nameLength > 16) {
        lastName.style.borderColor = 'red'
        lastNameSpan.innerHTML = 'Last name must be alphanumeric and contains 3 - 16 characters'
        return false
    } else {
        lastName.style.borderColor = 'green'
        lastNameSpan.innerHTML = ''
        return true
    }
}
// Checking Email 
function checkingEmail() {
    const string = email.value
    const result = string.includes('@')
    if (!result) {
        email.style.borderColor = 'red'
        emailSpan.innerHTML = 'Email must be a valid address e.g. example@example.com'
        return false
    } else {
        email.style.borderColor = 'green'
        emailSpan.innerHTML = ''
        return true
    }
}
// Password checking 
function checkingPassword() {
    const string = password.value
    const symbolRegex = /[!#$%^&*()\=+[\]{}|;:'",.<>/?\\]/g
    const result = symbolRegex.test(string)
    const nameLength = string.length
    if (result || nameLength < 6 || nameLength > 32) {
        password.style.borderColor = 'red'
        passwordSpan.innerHTML = 'Password must be alphanumeric (@ _ and - are allowed) and contains 6 - 32 characters'
        return false
    } else {
        password.style.borderColor = 'green'
        passwordSpan.innerHTML = ''
        return true
    }
}
// Checking Telephone
function checkingTelephone() {
    const string = telephone.value
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/
    const result = phoneNumberRegex.test(string)
    const nameLength = string.length
    if (!result) {
        telephone.style.borderColor = 'red'
        telephoneSpan.innerHTML = 'A Valid Phone Number 11(111-222-3333)'
        return false
    } else {
        telephone.style.borderColor = 'green'
        telephoneSpan.innerHTML = ''
        return true
    }
}
// Checking Bio
function checkingBio() {
    const string = bio.value
    const pattern = /^[a-z_-]+$/
    const result = pattern.test(string)
    const nameLength = string.length
    if (!result || nameLength < 5 || nameLength > 32) {
        bio.style.borderColor = 'red'
        bioSpan.innerHTML = 'Bio must contain only lowercase letters underscore , hyphens and be 8 - 50 characters'
        return false
    } else {
        bio.style.borderColor = 'green'
        bioSpan.innerHTML = ''
        return true
    }
}
// Dealing with Submit Button 
function validButton() {
    const result1 =    checkingFirstName()
    const result2 =    checkingLastName()
    const result3 =    checkingEmail()
    const result4 =    checkingPassword()
    const result5 =    checkingTelephone()
    const result6 =    checkingBio()
    if( result1 && result2 && result3 && result4 && result5 && result6) {
        cover.style.display = 'block'
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            cover.style.opacity = "1"
        }, 500)
    }
}
// Closing the pop
function popClose() {
    document.body.style.overflow = 'auto'
    cover.style.opacity = '0'
    setTimeout(() => {
        cover.style.display = 'none'
    },500)
}
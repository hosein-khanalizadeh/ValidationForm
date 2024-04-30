const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')


form.addEventListener('submit', (event) => {
	event.preventDefault()
	checkInputs()
})

const checkInputs = () => {
	const usernameValue = username.value.trim()
	const emailValue = email.value.trim()
	const passwordValue = password.value.trim()
	const password2Value = password2.value.trim()

	if (usernameValue === ''){
		setError(username, 'enter username !')
	}
	else{
		setSuccess(username)
	}
	if (emailValue === ''){
		setError(email, 'enter email !')
	}
	else{
		setSuccess(email)
	}
	if (passwordValue === ''){
		setError(passwordValue, 'enter password !')
	}
	else{
		setSuccess(password)
	}
	if (password2Value === ''){
		setError(password2, 'enter confirm password !')
	}
	else if (passwordValue !== password2Value){
		setError(password2, 'wrong password !')
	}
	else{
		setSuccess(password2)
	}
}

const setError = (input, message) => {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.className = 'form-control error'
	small.innerText = message
}

const setSuccess = (input) => {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
}
const addButton = document.getElementById('add')
const input = document.getElementById('input')
const output = document.getElementById('taskList')

addButton.addEventListener('click', function (e) {
  e.preventDefault()
  const text = input.value
  const newP = document.createElement('p')
  newP.textContent = text
  output.appendChild(newP)
  input.value = ''
})

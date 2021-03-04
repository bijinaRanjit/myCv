// education section
            function myFunctioni() {
                document.getElementById("iims").innerHTML = "UCSI UNIVERSITY Malayasian";
            }
            function myFunctionn() {
                document.getElementById("nccs").innerHTML = "Paknajol Kathmandu";
            }
            function myFunctionr() {
                document.getElementById("rising").innerHTML = "Bafal Kathmandu";
            }
            function myFunctionit() {
                document.getElementById("itg").innerHTML = "Tripureswor Kathmandu";
            }
            function myFunctiond() {
                document.getElementById("dsewa").innerHTML = "Mitidevi";
            }
// map

const openModelButtons = document.querySelectorAll('[data-model-target]')
const closeModelButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modelTraget)
        openModel(model)
    })
})
closeModelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.model')
        closeModel(model)
    })
})
function openModel(model){
    if (model == null) return 
    model.classList.add('active') 
    overlay.classList.add('active')
}
function closeModel(model){
    if (model == null) return 
    model.classList.remove('active') 
    overlay.classList.remove('active')
}
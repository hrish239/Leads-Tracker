let myLeads= []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function()
{   
    
    ulEl.innerHTML = ""
    myLeads.push(inputEl.value)
    inputEl.value = ""
    for (i=0; i<myLeads.length;i++){
    ulEl.innerHTML += "<li>" + myLeads[i]+ "</li>"
 }
 console.log(myLeads)
}
)
 
 
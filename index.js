let myLeads = []
//"www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"
const inputEl = document.getElementById("input-el") 
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
//destringify leads saved in localstorage
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLead") )
let tabs = []

tabBtn.addEventListener("click", function(){
    //access current tab url
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //set tabs into array
    myLeads.push(tabs[0].url)
    //add to local storage
    localStorage.setItem("myLead", JSON.stringify(myLeads))
    render(myLeads)
     })
 })
    
  
if (leadsFromLocalStorage){
    console.log(leadsFromLocalStorage)
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//display myleads array
function render(leads){
    var listItems = ""
    for(i = 0; i < leads.length; i++){
    listItems += `
        <li>
            <a  target='_blank' href ='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>    
    `
    }
    ulEl.innerHTML = listItems
}

//clear screen
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    //empty myleads array
    myLeads = []
    render(myLeads)
    }
    )


//input value into array
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
//turn item into string and save in localstorage
    localStorage.setItem("myLead", JSON.stringify(myLeads))
    //clear input
  inputEl.value = ""
  //display myleads array
  render(myLeads)
  }
)


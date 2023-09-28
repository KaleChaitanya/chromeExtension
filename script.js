let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    let listItem = "";
    for (let i = 0; i < leads.length; i++) {
        listItem += `
                        <li>
                            <a target='_blank' href='${leads[i]}'>
                                ${leads[i]}
                            </a>
                        </li>
                    `;
    }
    ulEl.innerHTML = listItem
}

function saveLeads() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
}

function deleteLeads() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
}
function saveTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
}

inputBtn.addEventListener("click", saveLeads);
deleteBtn.addEventListener("dblclick", deleteLeads);
tabBtn.addEventListener("click", saveTab);
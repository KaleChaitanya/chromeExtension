let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

function saveBtn() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    console.log(localStorage.getItem("myLeads"));
}

inputBtn.addEventListener("click", saveBtn);

function renderLeads() {
    let listItem = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItem += `
                        <li>
                            <a target='_blank' href='${myLeads[i]}'>
                                ${myLeads[i]}
                            </a>
                        </li>
                    `;
    }
    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function () {
    console.log("double click called")
    localStorage.clear();
    myLeads = [];
    renderLeads();
})
//Employee Information initial data
let employeeInfo =
    [
        {
            "ninumber": "ZS502747A", "fullname": "Chris P Bacon", "phone": "07659-831024", "address":

                "123 Elliot Hill", "department": "IT"
        },

        {
            "ninumber": "XS130502B", "fullname": "Miles A Head", "phone": "07666-616680", "address":

                "321 Haha Road", "department": "Sales"
        },

        {
            "ninumber": "MY034526D", "fullname": "Rick O'Shea", "phone": "07440-003065", "address":

                "64 Zoo Lane", "department": "HR"
        },


        {
            "ninumber": "AK311470", "fullname": "Robyn Banks", "phone": "07342-472921", "address":

                "324 Langton Ridgeway", "department": "HR"
        },


        {
            "ninumber": "LY682275B", "fullname": "Lorne Mowers", "phone": "07822-821023", "address":

                "234 Julian Market", "department": "IT"
        },


        {
            "ninumber": "BK227215B", "fullname": "Frank N Stein", "phone": "07661-522545", "address":

                "12 Springfield Grange", "department": "Sales"
        },


        {
            "ninumber": "XB363374C", "fullname": "Hedda Hare", "phone": "07563-758264", "address":

                "54 Blackbird Crescent", "department": "IT"
        },


        {
            "ninumber": "MY501327A", "fullname": "Upton O Goode", "phone": "07401-414740", "address":

                "2 St Margarets Drive", "department": "IT"
        },

        {
            "ninumber": "TT405395B", "fullname": "Marius Quick", "phone": "07870-297789", "address":

                "98 Earl Path", "department": "IT"
        },

        {
            "ninumber": "AZ764036A", "fullname": "Max E Mumm", "phone": "07872-642897", "address":

                "233 Lady Smith Avenue", "department": "IT"
        },


        {
            "ninumber": "ES73841C", "fullname": "Yul B Allwright", "phone": "07750-872412",

            "address": "45 Fountains Broadway", "department": "Sales"
        },

        {
            "ninumber": "WX465470A", "fullname": "Lori Driver", "phone": "07773-782275", "address":

                "65 Burlington Lodge", "department": "HR"
        },

        {
            "ninumber": "AK625470D", "fullname": "Shirley U Care", "phone": "07569-060117",

            "address": "97 Holderness Drive", "department": "HR"
        },

        {
            "ninumber": "SW098272B", "fullname": "Felix Cited", "phone": "07394-529507", "address":

                "32 Banningham Court", "department": "Sales"
        },

        {
            "ninumber": "OB043941D", "fullname": "Sandy Beech", "phone": "07958-301691", "address":

                "3 Third Mount", "department": "Sales"
        }





    ];

// --- FUNCTIONALITY OF THE INPUTS, BUTTONS AND DROPDOWN ---

//Viewing employee info
let viewBtn = document.getElementById("view-Btn");
const formView = document.getElementById('form-view');
let clearBtn = document.getElementById("clear-Btn");

viewBtn.addEventListener("click", viewEmployees);
clearBtn.addEventListener("click", clearEmployeeInfo);

//Adding employee info
const formAdd = document.getElementById('form-add');
formAdd.addEventListener("submit", addNewEmployee);

//Editing employee info
let editBtn = document.getElementById("submitEdit2");
const formEdit = document.getElementById('form-edit');
let dropdown = document.getElementById('updateDrop');

formEdit.addEventListener("submit", editEmployee);
dropdown.addEventListener("click", employeeSelect);
editBtn.addEventListener("click", updateEmployee);

//Deleting employee info
let chosenEmployee = document.getElementById("selectedEmployee");
const formDelete = document.getElementById('form-delete');

chosenEmployee.addEventListener("click", showSelectedDelete);
formDelete.addEventListener("submit", deleteEmployee);


//Filtering employee info
let chosenDepartment = document.getElementById("filterSelect");
let formFilter = document.getElementById("filter");
clearFilterBtn = document.getElementById("clearFilter");

chosenDepartment.addEventListener("click", showSelectedFilter);
document.addEventListener("submit", filterByDepartment);
clearFilterBtn.addEventListener("click", clearFilteredEmployees);

// --- VIEWING EMPLOYEES ---
//Shows current employee information in a table
function viewEmployees() {

    // creating a table
    let table = document.createElement("table");

    //Gets header values
    let col = [];
    for (let i = 0; i < employeeInfo.length; i++) {
        for (let key in employeeInfo[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // create table header row using extracted headers
    let tableRow = table.insertRow(-1); //table row
    for (let i = 0; i < col.length; i++) {
        let tableHeader = document.createElement("th") //table header
        tableHeader.innerHTML = col[i];
        tableRow.appendChild(tableHeader);
    }

    //add data to the table
    for (let i = 0; i < employeeInfo.length; i++) {
        tableRow = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            let tabCell = tableRow.insertCell(-1);
            tabCell.innerHTML = employeeInfo[i][col[j]];
        }
    }

    //add table to container
    let divContainer = document.getElementById("para");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}

//clears the table of employee information
function clearEmployeeInfo() {
    let tableContainer = document.getElementById("para");
    tableContainer.innerHTML = "";
}

//allows the user to add a new employee
function addNewEmployee(e) {
    e.preventDefault();
    // gets the values from user input
    let niInput = document.getElementById("nin").value;
    let fullNameInput = document.getElementById("name").value;
    let phoneNumberInput = document.getElementById("phone").value;
    let addressInput = document.getElementById("address").value;
    let depInput = document.getElementById("department").value;

    //stores the inputs as newEmployee
    const newEmployee = { "ninumber": niInput, "fullname": fullNameInput, "phone": phoneNumberInput, "address": addressInput, "department": depInput };

    //adds the inputted object to the array
    employeeInfo.push(newEmployee);


}

// --- EDIT EXISTING EMPLOYEE ---
//creates the dropdown box
function employeeSelect() {

    for (let i = 0; i < employeeInfo.length; i++) {
        let optn = employeeInfo[i]["fullname"];
        let element = document.createElement("option");
        element.textContent = optn;
        element.value = optn;
        select.appendChild(element);


    }
}


//Shows selected employee and adds their current info to input boxes, allowing them to be editted
function editEmployee(e) {
    e.preventDefault();
    let selectedEmployee = document.getElementById("select").value;
    document.getElementById("message").innerHTML = "Employee selected: " + selectedEmployee;
    document.getElementById("nameEdit").placeholder = selectedEmployee;
    for (let j = 0; j < employeeInfo.length; j++) {
        if (selectedEmployee == employeeInfo[j]["fullname"]) {
            document.getElementById("ninEdit").value = employeeInfo[j]["ninumber"];
            document.getElementById("nameEdit").value = employeeInfo[j]["fullname"];
            document.getElementById("phoneEdit").value = employeeInfo[j]["phone"];
            document.getElementById("addressEdit").value = employeeInfo[j]["address"];
            document.getElementById("departmentEdit").value = employeeInfo[j]["department"];


        }

    }

}

//updates the employee's information
function updateEmployee(e) {
    e.preventDefault();
    let selectedEmployee = document.getElementById("select").value;
    for (let k = 0; k < employeeInfo.length; k++) {
        if (selectedEmployee == employeeInfo[k]["fullname"]) {

            let niEdit = document.getElementById("ninEdit").value;
            let fullNameEdit = document.getElementById("nameEdit").value;
            let phoneNumberEdit = document.getElementById("phoneEdit").value;
            let addEdit = document.getElementById("addressEdit").value;
            let depEdit = document.getElementById("departmentEdit").value;

            employeeInfo[k] = { "ninumber": niEdit, "fullname": fullNameEdit, "phone": phoneNumberEdit, "address": addEdit, "department": depEdit };
            console.log(employeeInfo);
        }
    }
}

// --- DELETING AN EMPLOYEE ---
function showSelectedDelete(e) {
    e.preventDefault();

    let employeeToDelete = document.getElementById("deleteInput").value;
    console.log(employeeToDelete.type);
    if (employeeInfo.some(x => x.ninumber === employeeToDelete)) {
        for (let i = 0; i < employeeInfo.length; i++) {
            if (employeeToDelete == employeeInfo[i]["ninumber"]) {
                document.getElementById("messageDelete").innerHTML = "Employee NIN: " + employeeToDelete + "<br/>" + "Employee Name: " + employeeInfo[i]["fullname"];
            }
        }
    }
    else {
        document.getElementById("messageDelete").innerHTML = "The National Insurance Number (NIN) " + employeeToDelete.bold() + " does not exist - ensure that casing is correct. Please enter a valid NIN."
    }


}




//removes chosen employee from the array
function deleteEmployee(e) {
    e.preventDefault();
    let employeeToDelete = document.getElementById("deleteInput").value;
    for (let l = 0; l < employeeInfo.length; l++) {
        if (employeeToDelete == employeeInfo[l]["ninumber"]) {
            employeeInfo.splice(l, 1);
        }

    }

    console.log(employeeInfo);
}


// --- FILTER BY DEPARTMENT ---
// shows which department has been selected
function showSelectedFilter(e) {
    e.preventDefault();
    
    let departmentToFilter = document.getElementById("filterInput").value;
    if (employeeInfo.some(x => x.department === departmentToFilter)) {
        document.getElementById("messageFilter").innerHTML = "Chosen Department: " + departmentToFilter;
       
    }
    else {
        document.getElementById("messageFilter").innerHTML = "The department " + departmentToFilter.bold() + " does not exist - ensure that casing is correct. Please enter a valid department.";

    }

}

//creates table which is filtered by chosen department
function filterByDepartment(e) {
    e.preventDefault();
    let departmentToFilter = document.getElementById("filterInput").value;
    let newArray = [];
    for (let l = 0; l < employeeInfo.length; l++) {

        if (departmentToFilter == employeeInfo[l]["department"]) {

            //add the employees of given department to a JSON array
            const Employee = { "ninumber": employeeInfo[l]["ninumber"], "fullname": employeeInfo[l]["fullname"], "phone": employeeInfo[l]["phone"], "address": employeeInfo[l]["address"], "department": employeeInfo[l]["department"] };
            newArray.push(Employee);

        }

    }


    // creating a table
    let table = document.createElement("table");

    //gets header values
    let col = [];
    for (let i = 0; i < newArray.length; i++) {
        for (let key in newArray[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }


    // create html table header row using extracted headers
    let tableRow = table.insertRow(-1); //table row
    for (let i = 0; i < col.length; i++) {
        let tableHeader = document.createElement("th") //table header
        tableHeader.innerHTML = col[i];
        tableRow.appendChild(tableHeader);
    }

    //add data to the table
    for (let i = 0; i < newArray.length; i++) {
        tableRow = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            let tabCell = tableRow.insertCell(-1);
            tabCell.innerHTML = newArray[i][col[j]];
        }
    }

    //add table to container
    let divContainer = document.getElementById("filteredEmployees");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}

//clears the filtered table
function clearFilteredEmployees() {
    let container = document.getElementById("filteredEmployees");
    container.innerHTML = "";
}














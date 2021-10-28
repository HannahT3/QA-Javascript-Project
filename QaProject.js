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



//Viewing employee info
let viewBtn = document.getElementById("view-Btn");
const formView = document.getElementById('form-view');
viewBtn.addEventListener("click", viewEmployees);
let clearBtn = document.getElementById("clear-Btn");
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
let chosenEmployee = document.getElementById("employeeSelect");
//let deleteBtn = document.getElementById("delete");
const formDelete = document.getElementById('form-delete');
// let updateDeleteDrop = document.getElementById('dropboxDelete');

chosenEmployee.addEventListener("click", showSelectedDelete);
formDelete.addEventListener("submit", deleteEmployee);
// updateDeleteDrop.addEventListener("click", employeeSelectDelete);
// deleteBtn.addEventListener("click", deleteEmployee);


//Filtering employee info
let chosenDepartment = document.getElementById("filterSelect");
let formFilter = document.getElementById("filter");

chosenDepartment.addEventListener("click", showSelectedFilter);
formFilter = document.addEventListener("submit", filterByDepartment);

console.log(employeeInfo);



function addNewEmployee(e) {
    e.preventDefault();
    let niInput = document.getElementById("nin").value;
    let fullNameInput = document.getElementById("name").value;
    let phoneNumberInput = document.getElementById("phone").value;
    let addressInput = document.getElementById("address").value;
    let depInput = document.getElementById("department").value;
    const newEmployee = { "ninumber": niInput, "fullname": fullNameInput, "phone": phoneNumberInput, "address": addressInput, "department": depInput };
    console.log(newEmployee);
    employeeInfo.push(newEmployee);
    console.log(employeeInfo);

}

function employeeSelect() {

    for (let i = 0; i < employeeInfo.length; i++) {
        let optn = employeeInfo[i]["fullname"];
        let element = document.createElement("option");
        element.textContent = optn;
        element.value = optn;
        select.appendChild(element);


    }
}

// function employeeSelectDelete() {

//     for (let z = 0; z < employeeInfo.length; z++) {
//         let optn2 = employeeInfo[z]["fullname"];
//         let element2 = document.createElement("option");
//         element2.textContent = optn2;
//         element2.value = optn2;
//         select.appendChild(element2);


//     }
// }

// function chooseEmployee(e) {
//     e.preventDefault();
//     let selectedEmployee = document.getElementById("select").value;
//     document.getElementById("message").innerHTML = "Employee selected: " + selectedEmployee;
//     document.getElementById("nameEdit").placeholder = selectedEmployee;

// }

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



function showSelectedDelete(e) {
    e.preventDefault();
    let employeeToDelete = document.getElementById("deleteInput").value;
    console.log(employeeToDelete.type);
    for (let l = 0; l < employeeInfo.length; l++) {
        if (employeeToDelete == employeeInfo[l]["ninumber"]) {
            document.getElementById("messageDelete").innerHTML = "Employee NIN: " + employeeToDelete + "<br/>" + "Employee Name: " + employeeInfo[l]["fullname"];
        }


    }

}
//try//catch


function showSelectedFilter(e) {
    e.preventDefault();
    let departmentToFilter = document.getElementById("filterInput").value;
    document.getElementById("messageFilter").innerHTML = "Department: " + departmentToFilter;
    // for (let l = 0; l < employeeInfo.length; l++) {
    //     if (departmentToFilter == employeeInfo[l]["department"]) {
    //         document.getElementById("messageDelete").innerHTML = "Employee NIN: " + departmentToFilter + "<br/>" + "Employee Name: " + employeeInfo[l]["fullname"];
    //     }


    // }

}

function filterByDepartment(e) {
    e.preventDefault();
    let departmentToFilter = document.getElementById("filterInput").value;
    let newArray = [];
    for (let l = 0; l < employeeInfo.length; l++) {

        if (departmentToFilter == employeeInfo[l]["department"]) {

            //add the employees of given department to a JSON array
            const Employee = { "ninumber": employeeInfo[l]["ninumber"], "fullname": employeeInfo[l]["fullname"], "phone": employeeInfo[l]["phone"], "address": employeeInfo[l]["address"], "department": employeeInfo[l]["department"] };
            newArray.push(Employee);

            // let listEmp = document.getElementById("filteredEmployees"); //table header
            // listEmp.innerHTML = "";
            // listEmp.appendChild(newArray);
            //     document.getElementById("filteredEmployees").innerHTML = "Employee Name: " + employeeInfo[l]["fullname"] + "<br/>" + "Department: " + employeeInfo[l]["department"];



            // let listEmp = document.getElementById("filteredEmployees"); //table header
            // listEmp.innerHTML = newArray;

        }






    }
    console.log(newArray);
    //document.getElementById("filteredEmployees").innerHTML = newArray;
    let output = "";
    for (let m = 0; m < newArray.length; m++) {
        output += "NIN: " + newArray[m]["ninumber"] + "Full Name: " + newArray[m]["fullname"] + " Phone number: " + newArray[m]["phone"] + "Address: " + newArray[m]["address"] + "Department: " + newArray[m]["department"];

    }
    document.getElementById("filteredEmployees").innerHTML = output;

}


function deleteEmployee(e) {
    e.preventDefault();
    let employeeToDelete = document.getElementById("deleteInput").value;
    for (let l = 0; l < employeeInfo.length; l++) {
        if (employeeToDelete == employeeInfo[l]["ninumber"]) {
            // delete employeeInfo[l];
            // let position = employeeInfo[l].indexOf;
            // console.log(position);
            employeeInfo.splice(l, 1);
        }

    }

    console.log(employeeInfo);
}

//splice, delete sets to null w3schools/ stack overflow 

//document.getElementById("ninEdit").placeholder = placeholdername;

// function updateEmployee(e) {
//     e.preventDefault
// }
//new form set new numbers by id, pass in for index - overwriteg


// formView.addEventListener("submit", (e) => {
//     e.preventDefault();

// })



console.log(employeeInfo);





//SEE DOMS FOR EXAMPLES --- Create a table
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


    // create html table header row using extracted headers

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

function clearEmployeeInfo() {
    let tableContainer = document.getElementById("para");
    tableContainer.innerHTML = "";
}

// let a = "SW34983948";
// let b = "My Name";
// let c = "079999999";
// let d = "My address";
// let e = "HR";
// addNewEmployee(a, b, c, d, e);


//Event listening, bubbling


//console.log(employeeInfo.ninumber);







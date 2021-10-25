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






let niInput = document.querySelector("#nin");
let fullNameInput = document.querySelector("#name");
let phoneNumberInput = document.querySelector("#phone");
let addressInput = document.querySelector("#address");
let depInput = document.querySelector("#department");




function addNewEmployee(ninum, fName, phoneNum, myAddress, dep) {

    //let newEmployee = { ' "ninumber": ninum', '"fullname": fName', '"phone": phoneNum', '"address": myAddress', '"department": dep '};
    // let addEmployee = JSON.parse(newEmployee);
    employeeInfo.push({ "ninumber": ninum, "fullname": fName, "phone": phoneNum, "address": myAddress, "department": dep });
    console.log(employeeInfo);

}

// function addNewEmployee() {

//     employeeInfo.push({ "ninumber": "Tdfdfe", "fullname": "Fredd Jones", "phone": "3409343", "address": "5 My House", "department": "HR" });
//     console.log(employeeInfo);

// }


//addNewEmployee("dfdjk", "my name", "3434", "4 my address ", "HR");

let viewBtn = document.querySelector("#view-Btn");
let addBtn = document.querySelector("#add-Btn");


//SEE DOMS FOR EXAMPLES --- Create a table
function viewEmployees() {

    // let str = JSON.stringify(employeeInfo[1]);
    // console.log(str);

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



//viewEmployees();


//Event listening, bubbling
viewBtn.addEventListener("click", viewEmployees);
addBtn.addEventListener("click", addNewEmployee(niInput, fullNameInput, phoneNumberInput, addressInput, depInput));









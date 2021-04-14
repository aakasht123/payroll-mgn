var emp_list = [{
        emp_name: 'Akshat',
        dept_id: 1,
        emp_id: 1,
        mobile: '7788554455',
        email: 'akhat@gmail.com',
        gender: 'Male',
        isActive: true
    },
    {
        emp_name: 'Aakash',
        dept_id: 1,
        emp_id: 2,
        mobile: "7788554455",
        email: "akhat@gmail.com",
        gender: 'Male',
        isActive: true
    }, {
        emp_name: 'Akash',
        dept_id: 2,
        emp_id: 3,
        mobile: "7788554455",
        email: "akhat@gmail.com",
        gender: 'Male',
        isActive: true
    }, {
        emp_name: 'Mohit',
        dept_id: 2,
        emp_id: 4,
        mobile: "7788554455",
        email: "akhat@gmail.com",
        gender: 'Male',
        isActive: true
    },
    {
        emp_name: 'Divyata',
        dept_id: 2,
        emp_id: 5,
        mobile: "7788554455",
        email: "akhat@gmail.com",
        gender: 'Female',
        isActive: true
    },
];

var dept_list = [
    { dept_name: 'MCA', dept_head: "Dr. Anala Pandit", id: 1, isActive: true },
    { dept_name: 'Civil Department', dept_head: "Dr. Civil Pandit", id: 5, isActive: true },
    { dept_name: 'B.Tech', dept_head: "Dr. Tech Pandit", id: 2, isActive: true },
    { dept_name: 'EXTC', dept_head: "Dr. Etc Pandit", id: 3, isActive: true },
    { dept_name: 'Exam Control Department', dept_head: "Dr. ECD Pandit", id: 4, isActive: true }
];

function removeDeptCard(id, index) {
    id = '#' + id;
    $(id).remove();
    dept_list[index].isActive = false;
    console.log(dept_list);
}

$(document).ready(function() {

    $("#cancelAddEmp").hide();
    $("#saveAddEmp").hide();


    $("#addEmpBtn").click(function() {
        $("#cancelAddEmp").show();
        $("#saveAddEmp").show();
        $(this).hide();
    });

    $("#cancelAddEmp").click(function() {
        $("#addEmpBtn").show();
        $("#saveAddEmp").hide();
        $(this).hide();
    });

    $("#saveAddEmp").click(function() {
        var id = $("#empIdInput").val();
        var name = $("#empNameInput").val();
        var dept = $("#empDeptInput").val();
        var mobile = $("#empMobileInput").val();
        var email = $("#empEmailInput").val();
        var gender = $("#empGenderInput").val();

        if (id == "" || id == null)
            showWarning('Employee ID required');
        else if (name == "" || name == null)
            showWarning('Employee name required');
        else if (dept == "" || dept == null)
            showWarning('Employee department required');
        else if (mobile == "" || mobile == null)
            showWarning('Employee mobile required');
        else if (gender == "" || gender == null)
            showWarning('Employee gender required');
        else if (email == "" || email == null)
            showWarning('Employee email required');
        else if (!isEmail(email))
            showWarning('Enter proper email');
        else {

            var emp = {
                emp_name: name,
                dept_id: parseInt(dept),
                emp_id: parseInt(id),
                mobile: mobile,
                email: email,
                gender: gender,
                isActive: true
            };

            emp_list.push(emp);
            addEmpInTable(emp_list[emp_list.length - 1], emp_list.length - 1);

            $("#empIdInput").val('');
            $("#empNameInput").val('');
            $("#empDeptInput").val('');
            $("#empMobileInput").val('');
            $("#empEmailInput").val('');
            $("#empGenderInput").val('');
        }


    });

    for (var i = 0; i < emp_list.length; i++) {
        if (emp_list[i].isActive)
            addEmpInTable(emp_list[i], i);
    }

    function addEmpInTable(emp_details, index) {

        let dept = dept_list.find(o => o.id === emp_details.dept_id);

        var id = "empTr" + index;
        var ele = "<tr onclick=\"openModal('" + emp_details.emp_name + "');\">" +
            "<td>" + emp_details.emp_id + "</td>" +
            "<td>" + emp_details.emp_name + "</td>" +
            "<td>" + dept.dept_name + "</td>" +
            "<td>" + emp_details.mobile + "</td>" +
            "<td>" + emp_details.email + "</td>" +
            "<td>" + emp_details.gender + "</td>" +
            "</tr>";

        $("#empTableContent").prepend(ele);

    }

    $("#searchEmpInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#empTableContent tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function openModal(name) {
    $("#empNameModal").text(name);
    $("#generatePayrollModal").modal();
}

function calculatePayment() {
    var basicPay = $("#basicPay").val();
    var hraPay = $("#hraPay").val();
    var taPay = $("#taPay").val();
    var fbpPay = $("#fbpPay").val();
    var bonusPay = $("#bonusPay").val();
    var pfPay = -1 * $("#pfPay").val();
    var itPay = -1 * $("#itPay").val();
    var insurancePay = -1 * $("#insurancePay").val();

    if (basicPay == "" || basicPay == NaN)
        showWarning('Employee basic pay required');
    else if (hraPay == "" || hraPay == null)
        showWarning('Employee HRA required');
    else if (taPay == "" || taPay == null)
        showWarning('Employee TA required');
    else if (fbpPay == "" || fbpPay == null)
        showWarning('Employee FBP required');
    else if (bonusPay == "" || bonusPay == null)
        showWarning('Employee bonus required');
    else if (pfPay == "" || pfPay == null)
        showWarning('Employee PF required');
    else if (itPay == "" || itPay == null)
        showWarning('Employee IT required');
    else if (insurancePay == "" || insurancePay == null)
        showWarning('Employee insurance required');

    else {

        basicPay = parseInt($("#basicPay").val());
        hraPay = parseInt($("#hraPay").val());
        taPay = parseInt($("#taPay").val());
        fbpPay = parseInt($("#fbpPay").val());
        bonusPay = parseInt($("#bonusPay").val());
        pfPay = (-1 * parseInt($("#pfPay").val()));
        itPay = (-1 * parseInt($("#itPay").val()));
        insurancePay = -1 * $("#insurancePay").val();
        var payment = basicPay + hraPay + taPay + fbpPay + bonusPay + pfPay + itPay + insurancePay;
        alert("Payment is : " + parseInt(payment));
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("empTable");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function showWarning(msg) {
    var ele = "<div class='alert alert-warning alert-dismissible'>" +
        "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
        "<strong>Warning!</strong> <span>" + msg + "</span>" +
        "</div>";

    $("body").append(ele);
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
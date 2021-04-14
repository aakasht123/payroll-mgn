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

    /*$("#add_dept").click(function() {
        dept_list.push({ dept_name: 'MCA 2', dept_head: "Dr. Anala Pandit", id: 1 });
        addDeptCard(dept_list[dept_list.length - 1], dept_list.length - 1);
    });*/

    $("#addDeptBtn").click(function() {
        var deptName = $("#deptNameField").val();
        var deptHead = $("#deptHeadField").val();
        if (deptName == "" || deptName == null)
            showWarning('Department name required');
        else if (deptHead == 0 || deptHead == "0" || deptHead == null)
            showWarning('Select department head');
        else {
            dept_list.push({ dept_name: deptName, dept_head: deptHead, id: 1 });
            addDeptCard(dept_list[dept_list.length - 1], dept_list.length - 1);
            $('#addDeptModal').modal('toggle');
        }
    });

    for (var i = 0; i < dept_list.length; i++) {
        if (dept_list[i].isActive)
            addDeptCard(dept_list[i], i);
    }

    function addDeptCard(dept_details, index) {
        var id = "deptCard" + index;
        var deleteButton = "<span class='material-icons' onclick=\"removeDeptCard('" + id + "','" + index + "');\">delete</span>";

        var ele = "<div class='col-md-4 col-sm-6' id='" + id + "'>" +
            "<div class='department-card '>" +
            "<span class='dept-name'>" + dept_details.dept_name + "</span>" +
            "<span class='dept-head'>" + dept_details.dept_head + "</span>" +
            "<span class='dept-emp-count'>32 Employees</span>" +
            "<div class='dept-options'>" +
            "<span class='material-icons'>edit</span>" +
            deleteButton +
            "</div></div></div>";

        $("#dept-card-container").append(ele);

    }

});

function showWarning(msg) {
    var ele = "<div class='alert alert-warning alert-dismissible'>" +
        "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
        "<strong>Warning!</strong> <span>" + msg + "</span>" +
        "</div>";

    $("body").append(ele);
}
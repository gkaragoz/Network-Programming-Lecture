function Toggler(divId) {
    $("#" + divId).toggle();
}

function ShowLectureContent() {
    document.location.href = "#";
    Toggler("hidden");
    FillContent();
}

function FillContent() {
    $.ajax({
        url:"/",
        type:"POST",
        data:{
            tip:"choose"
        },
        dataType:"json",
        success: function (data) {
           $("#code").val(data.code);
           $("#name").val(data.name);
           $("#content").val(data.content);
        },
        error: function (err) {
            alert("Error while posting: " + err.status + ":" + err.statusText);
            $("#code").val("UNKNOWN");
            $("#name").val("UNKNOWN");
            $("#content").val("UNKNOWN");
        }
    })
}
function OnKeyUpCode() {
    var m_code=$("#code").val();
    var m_name=$("#name").val();
    var m_content=$("#content").val();
    $.ajax({
        url:"/",
        type:"POST",
        data:{
            type:"code",
            code:m_code,
            name:m_name,
            content:m_content,
        },
        dataType:"json",
        success: function (response) {
            $("#lectureCode").html(response.code);
        },
        error: function (error) {
            alert("Error while posting: " + error.status + ":" + error.statusText);
        }
    })
}
function OnKeyUpName() {
    var m_code=$("#code").val();
    var m_name=$("#name").val();
    var m_content=$("#content").val();
    $.ajax({
        url:"/",
        type:"POST",
        data:{
            type:"name",
            code:m_code,
            name:m_name,
            content:m_content,
        },
        dataType:"json",
        success: function (response) {
            $("#lectureName").html(response.name);
        },
        error: function (error) {
            alert("Error while posting: " + error.status + ":" + error.statusText);
        }
    })
}
function OnKeyUpContent() {
    var m_code=$("#code").val();
    var m_name=$("#name").val();
    var m_content=$("#content").val();
    $.ajax({
        url:"/",
        type:"POST",
        data:{
            type:"content",
            code:m_code,
            name:m_name,
            content:m_content,
        },
        dataType:"json",
        success: function () {
            $("#lectureContent").html(response.content);
        },
        error: function (error) {
            alert("Error while posting: " + error.status + ":" + error.statusText);
        }
    })
}

function ShowJSON() {
    $.ajax({
        url:"/",
        type:"POST",
        data:{
            tip:"JSON"
        },
        dataType:"json",
        success: function (response) {
            $("#encodedData").html(JSON.stringify(response, null, 2));
        },
        error: function (error) {
            alert("Error while posting: " + error.status + ":" + error.statusText);
        }
    })
}
function ShowXML() {
    $.ajax({
        url:"/",
        type:"POST",
        data:{
            tip:"XML"
        },
        dataType:"xml",
        success: function (response) {
            var xmlText = new XMLSerializer().serializeToString(response);
            $("#encodedData").html(xmlText);
        },
        error: function (error) {
            alert("Error while posting: " + error.status + ":" + error.statusText);
        }
    })
}

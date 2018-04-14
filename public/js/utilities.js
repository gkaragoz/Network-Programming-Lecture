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
        url:"/FillContent",
        type:"GET",
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
        url:"/OnKeyUpCode",
        type:"POST",
        data:{
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
        url:"/OnKeyUpName",
        type:"POST",
        data:{
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
        url:"/OnKeyUpCodeContent",
        type:"POST",
        data:{
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
        url:"/GetJSON",
        type:"GET",
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
        url:"/GetXML",
        type:"GET",
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

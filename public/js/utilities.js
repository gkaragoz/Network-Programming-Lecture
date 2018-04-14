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
           $("#code").val(data[0].code);
           $("#name").val(data[0].name);
           $("#content").val(data[0].content);
        },
        error: function (err) {
            alert("Error while posting: " + err.status + ":" + err.statusText);
            $("#code").val("UNKNOWN");
            $("#name").val("UNKNOWN");
            $("#content").val("UNKNOWN");
        }
    })
}
function OnKeyUp() {
    var m_code=$("#code").val();
    var m_name=$("#name").val();
    var m_content=$("#content").val();
    $.ajax({
        url:"/OnKeyUp",
        type:"PUT",
        data:{
            code:m_code,
            name:m_name,
            content:m_content,
        },
        dataType:"json",
        success: function (response) {
            
        }
    })
}

function ShowJSON() {
    $.ajax({
        url:"/GetJSON",
        type:"GET",
        dataType:"json",
        success: function (response) {
            $("#encodedData").val(JSON.stringify(response, null, 2));
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
            $("#encodedData").val(xmlText);
        }
    })
}

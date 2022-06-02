function gocheckComp() {
    var data = {
        businesses: [
            {
                b_no: document.getElementById('compNum').value,
                start_dt: document.getElementById('openDate').value,
                p_nm: document.getElementById('name').value,
                p_nm2: "",
                b_nm: "",
                corp_no: "",
                b_sector: "",
                b_type: "",
            },
        ],
    };

    $.ajax({
        url: "https://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=hs0julBlxqzmZ9DgULGBktXwbelsj7HVZ0/4K73cbI365ikw4cm0yZFfY5mEFXKETrYPacEwQihxIQZvyG4ecA==", // serviceKey 값을 xxxxxx에 입력
        type: "POST",
        data: JSON.stringify(data), // json 을 string으로 변환하여 전송
        dataType: "JSON",
        contentType: "application/json",
        async: false,
        accept: "application/json",
        success: function (result) {
            console.log(result);
            console.log(result.data[0].valid);
            nextFunction(result.data[0].valid);
        },
        error: function (result) {
            console.log(result.responseText); //responseText의 에러메세지 확인
        },
    });
}

function nextFunction(valid) {
    if (valid == "01") {
        alert("사업자등록정보가 인증되었습니다.");
        const nameForm = document.getElementById('name');
        const compNumForm = document.getElementById('compNum');
        const openDateForm = document.getElementById('openDate');
        nameForm.disabled = true;
        compNumForm.disabled = true;
        openDateForm.disabled = true;
    } else if (valid == "02") {
        alert("사업자등록정보가 일치하지 않습니다.");
    }
}
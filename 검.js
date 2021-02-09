m = 1000
lv = 1
up = 100
d = 0
b = 0
qkdwl = 1


function up_click() {
    if (m >= 100 * lv) {
        m = m - (100 * lv) * qkdwl
        document.getElementById("돈").innerHTML = m + "원"

        x = Math.floor(Math.random() * 100)
        if (x+1 <= up) {
            up = Math.ceil((up - up/10) * 100) / 100
            d = Math.ceil(((100 - up) - (100 - up)/10)*100)/100
            b = Math.ceil(((100 - up)/10)*100)/100
            lv = lv + 1
            document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>실패확률:" + d + "<br>파괴확률:" + b + "<br>" + 100 * lv + "원"

            on_f()
        }
        else if (100 - (x+1) <= d) {
            console.log("풉")
        }
        else {
            if (qkdwl == 1) {
                alert("검 파괴됨")
                up = 100
                d = 0
                b = 0
                lv = 1
                document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>실패확률:" + d + "<br>파괴확률:" + b + "<br>" + 100 * lv + "원"

                on_f()
            }
            else if (qkdwl == 2) {
                up = Math.ceil((up - up/10) * 100) / 100
                d = Math.ceil(((100 - up) - (100 - up)/10)*100)/100
                b = Math.ceil(((100 - up)/10)*100)/100
                lv = lv + 1
                document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>실패확률:" + d + "<br>파괴확률:" + b + "<br>" + 100 * lv + "원"

                on_f()
            }
        }
    }
}

function asdf_click() {
    if (lv > 2) {
        m = m + 200 * lv * (lv/2)
        up = 100
        d = 0
        b = 0
        lv = 1
        document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>실패확률:" + d + "<br>파괴확률:" + b + "<br>" + 100 * lv + "원"
        document.getElementById("돈").innerHTML = m + "원"

        on_f()
    }
    else{
        alert("검은 3렙 이상부터 판매할수 있습니다.")
    }
}

function qkdwl_click() {
    if (qkdwl == 1) {
        qkdwl = 2
    }
    else {
        qkdwl = 1
    }
}

function on_f() {
    if (lv == 1) {
        document.getElementById("lv").innerHTML = "Lv.1 검"
        document.getElementById("rja").src = "검.png"
    }
    if (lv == 2) {
        document.getElementById("lv").innerHTML = "Lv.2 단검"
        document.getElementById("rja").src = "단검.png"
    }
    if (lv == 3) {
        document.getElementById("lv").innerHTML = "Lv.3 장검"
        document.getElementById("rja").src = "장검.png"
    }
    if (lv == 4) {
        document.getElementById("lv").innerHTML = "Lv.4 막대기"
        document.getElementById("rja").src = "막대기.png"
    }
    if (lv == 5) {
        document.getElementById("lv").innerHTML = "Lv.5 광선검"
        document.getElementById("rja").src = "광선검.png"
    }
    if (lv == 6) {
        document.getElementById("lv").innerHTML = "Lv.6 투명검"
        document.getElementById("rja").src = "투명.png"
    }
}

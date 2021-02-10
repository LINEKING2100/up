m = 5000
lv = 1
up = 100
b = 0
qkdwl = false
upp = 100
bb = 0
llv = 1

function up_click() {
    if (m >= 100 * lv) {
        m = m - (100 * lv)
        document.getElementById("돈").innerHTML = m + "원"

        x = Math.floor(Math.random() * 10000)
        x = x/100
        console.log(x)
        if (x <= up) {
            up = Math.ceil((up - up/20) * 100) / 100
            b = Math.ceil((100 - up)*100)/100
            lv = lv + 1
            document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + 100 * lv + "원"
            qkdwl = false

            on_f()
        }
        else {
            qkdwl = true

            alert("검 파괴됨")
            
            upp = up
            bb = b
            llv = lv

            up = 100
            b = 0
            lv = 1
            document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + 100 * lv + "원"

            on_f()
        }
    }
}

function asdf_click() {
    if (lv > 2) {
        qkdwl = false

        m = m + 200 * lv * (lv/2)
        up = 100
        b = 0
        lv = 1
        document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + 100 * lv + "원"
        document.getElementById("돈").innerHTML = m + "원"

        on_f()
    }
    else{
        alert("검은 3렙 이상부터 판매할수 있습니다.")
    }
}

function af_click() {
    if (qkdwl == true) {
        if (m >= (300 * llv)) {
            m = m - (300 * llv)
            up = upp
            b = bb
            lv = llv
            document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + 100 * lv + "원"
            document.getElementById("돈").innerHTML = m + "원"

            on_f()
        }
    }
    else {
        alert("불러올 검이 없습니다.")
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
    if (lv == 7) {
        document.getElementById("lv").innerHTML = "Lv.7 코드검"
        document.getElementById("rja").src = "코드검.png"
    }
    if (lv == 8) {
        document.getElementById("lv").innerHTML = "Lv.8 소시지검"
        document.getElementById("rja").src = "소시지검.png"
    }
    if (lv == 9) {
        document.getElementById("lv").innerHTML = "Lv.9 벽돌"
        document.getElementById("rja").src = "벽돌.png"
    }
}
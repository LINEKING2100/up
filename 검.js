lv = 1
up = 100
b = 0
qkdwl = false
upp = 100
bb = 0
llv = 1
window.onload = function(){
    load()
}

function up_click() {
    if (lv < 13) {
        if (m >= 100 * lv) {
            m = m - ((100 * lv) * (en * enen))
            document.getElementById("돈").innerHTML = m + "원"

            x = Math.floor(Math.random() * 10000)
            x = x/100
            console.log(x)
            if (x <= up) {
                lv = lv + 1
                up = Math.ceil((up - up/40) * 100) / 100
                b = Math.ceil((100 - up)*100)/100
                document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + ((100 * lv) * (en * enen)) + "원"
                qkdwl = false
                if (lv > 12) {
                    document.getElementById("확률").innerHTML = `성공확률:${up}<br>파괴확률:${b}<br>바람파편${lv - 12}개(${바람파편}개 보유중)`
                    up = 50
                    b = 50
                }

                on_f()
            }
            else {

                if (lv > 12) {
                    qkdwl = false
                    console.log("넘선네")
                }
                else {
                    qkdwl = true
                    console.log("넘선네2")
                }

                alert("검 파괴됨")
                
                upp = up
                bb = b
                llv = lv
                up = 100
                b = 0
                lv = 1
                document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + ((100 * lv) * (en * enen)) + "원"

                on_f()
            }
        }
    }
    else if (lv > 12 && lv < 16) {
        if (바람파편 >= (lv - 12)) {
            바람파편 -= lv - 12
            x = Math.floor(Math.random() * 10000)
            x = x/100
            console.log(x)
            if (x <= up) {
                lv = lv + 1
                document.getElementById("확률").innerHTML = `성공확률:${up}<br>파괴확률:${b}<br>바람파편${lv - 12}개(${바람파편}개 보유중)`
                on_f()
            }
            else {
                qkdwl = false
                alert("검 파괴됨")
                upp = up
                bb = b
                llv = lv
                up = 100
                b = 0
                lv = 1
                document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + ((100 * lv) * (en * enen)) + "원"
                on_f()
            }
        }
    }
    else if (lv == 16) {
        아르테미스 += 1
        document.getElementById("아테").innerHTML = "EN(엔딩횟수):" + 아르테미스
        en = 아르테미스
        enen = 1.5

        up = 100
        b = 0
        lv = 1
        document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + ((100 * lv) * (en * enen)) + "원"
        on_f()
    }
    save()
}

function asdf_click() {
    if (lv > 1 && lv != 13) {
        qkdwl = false

        m = m + 200 * lv * (lv/2)
        up = 100
        b = 0
        lv = 1
        document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + ((100 * lv) * (en * enen)) + "원"
        document.getElementById("돈").innerHTML = m + "원"

        on_f()
    }
    else if (lv == 13) {
        바람파편 += 1
        up = 100
        b = 0
        lv = 1
        document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + ((100 * lv) * (en * enen)) + "원"
        document.getElementById("돈").innerHTML = m + "원"

        on_f()
    }
    else{
        alert("검은 2렙 이상부터 판매할수 있습니다.")
    }
    save()
}

function af_click() {
    if (qkdwl == true) {
        if (m >= (500 * llv)) {
            m = m - (500 * llv)
            up = upp
            b = bb
            lv = llv
            document.getElementById("확률").innerHTML = "성공확률:" + up + "<br>파괴확률:" + b + "<br>" + ((100 * lv) * (en * enen)) + "원"
            document.getElementById("돈").innerHTML = m + "원"

            on_f()
        }
    }
    else {
        alert("불러올 검이 없습니다.")
    }
    save()
}

function on_f() {
    if (lv == 1) {
        document.getElementById("엔딩").innerHTML = ""
        document.getElementById("lv").innerHTML = "Lv.1 검"
        document.getElementById("rja").src = "검.png"
        document.getElementById("판매").src = '판매.png'
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
    if (lv == 10) {
        document.getElementById("lv").innerHTML = "Lv.10 고구마떡검"
        document.getElementById("rja").src = "고구마 찹쌀떡 검.png"
    }
    if (lv == 11) {
        document.getElementById("lv").innerHTML = "Lv.11 모자이크검"
        document.getElementById("rja").src = "모자이크된검.png"
    }
    if (lv == 12) {
        document.getElementById("lv").innerHTML = "Lv.12 나무검"
        document.getElementById("rja").src = "나무검.png"
    }
    if (lv == 13) {
        document.getElementById("lv").innerHTML = "바람[바람의 상처]"
        document.getElementById("판매").src = '분해.png'
        document.getElementById("rja").src = "바람의 상처.png"
    }
    if (lv == 14) {
        document.getElementById("lv").innerHTML = "불[마창 이그너스]"
        document.getElementById("판매").innerHTML = '판매.png'
        document.getElementById("rja").src = "마창 이그너스.png"
    }
    if (lv == 15) {
        document.getElementById("lv").innerHTML = "물[물의 기둥]"
        document.getElementById("rja").src = "몽 둥이.png"
    }
    if (lv == 16) {
        document.getElementById("lv").innerHTML = "Lv.∞ 아르테미스"
        document.getElementById("rja").src = "아르테미스.png"
        document.getElementById("확률").innerHTML = "성공확률:∞<br>파괴확률:∞<br>∞원"
        document.getElementById("엔딩").innerHTML = "[개발]<br>LINEKING2100<br><br>[제작]<br>이노다:단검,장검,광선검,모자이크검,모루이미지,판매이미지,시간석이미지,분해이미지<br>막대기:막대기<br>핫덕:소시지검,벽돌<br>소비:고구마떡검<br>검필:바람의 상처,마창 이그너스,물의 기둥,아르테미스<br>spotky:나무검"
    }
    save()
}

function save() {
    localStorage.setItem("dkfmxpaltm", 아르테미스)
    localStorage.setItem("m", m)
    localStorage.setItem("qkfkavkvus", 바람파편)
    localStorage.setItem("en", en)
    localStorage.setItem("enen", enen)
}

function load() {
    if (localStorage.getItem("m") != "null") {
        아르테미스 = localStorage.getItem("dkfmxpaltm")
        m = localStorage.getItem("m")
        바람파편 = localStorage.getItem("qkfkavkvus")
        en = localStorage.getItem("en")
        enen = localStorage.getItem("enen")

        document.getElementById("돈").innerHTML = m + "원"
        if (아르테미스 > 0) {
            document.getElementById("아테").innerHTML = "EN(엔딩횟수):" + 아르테미스
        }
    }
    else {
        바람파편 = 0
        아르테미스 = 0
        en = 1
        enen = 1
        m=5000
    }
}

function reset() {
    localStorage.setItem("dkfmxpaltm", 0)
    localStorage.setItem("m", 5000)
    localStorage.setItem("qkfkavkvus", 0)
    localStorage.setItem("en", 1)
    localStorage.setItem("enen", 1)
    document.getElementById("돈").innerHTML = m + "원"
    if (아르테미스 > 0) {
        document.getElementById("아테").innerHTML = "EN(엔딩횟수):" + 아르테미스
    }
}
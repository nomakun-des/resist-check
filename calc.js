var type_abb = [
    "nor", "fir", "wat", "ele", "gra", "ice", "fig", "poi", "gro",
    "fly", "psy", "bug", "roc", "gho", "dra", "dar", "ste", "fai"
];
var type_name = [
    "ノーマル", "ほのお", "みず", "でんき", "くさ", "こおり", "かくとう", "どく", "じめん",
    "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー"
];

var my_type_list = [
    -1, -1
];

var conf_type_list = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0
];

var conf_type_list_clear = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0
];

var point = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0
];

var conf_TeraType_list = [
    0, 0, 0, 0, 0
];

window.onload = function () {
    setTable();

    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
};

function setTable() {
    result = "";

    for (let i = 0; i < type_abb.length; i++) {
        for (let j = 0; j < type_abb.length; j++) {
            if (compatibility[i][j] === 2.0) {
                document.getElementById(type_abb[i] + "_" + type_abb[j]).style.color = "var(--js-twice)";
                result = "O";
            } else if (compatibility[i][j] === 0.5) {
                document.getElementById(type_abb[i] + "_" + type_abb[j]).style.color = "var(--js-half)";
                result = "Δ";
            } else if (compatibility[i][j] === 0.0) {
                document.getElementById(type_abb[i] + "_" + type_abb[j]).style.color = "var(--js-nullity)";
                result = "X";
            } else {
                document.getElementById(type_abb[i] + "_" + type_abb[j]).style.color = null;
                result = "";
            }
            document.getElementById(type_abb[i] + "_" + type_abb[j]).innerHTML = result;
        }
    }


    for (let i = 0; i < type_abb.length; i++) {
        for (let j = 0; j < type_abb.length; j++) {
            if (compatibility[j][i] === 2.0) {
                document.getElementById("conf_" + j + "_" + (i + 1)).style.color = "var(--js-twice)";
                result = "O";
            } else if (compatibility[j][i] === 0.5) {
                document.getElementById("conf_" + j + "_" + (i + 1)).style.color = "var(--js-half)";
                result = "Δ";
            } else if (compatibility[j][i] === 0.0) {
                document.getElementById("conf_" + j + "_" + (i + 1)).style.color = "var(--js-nullity)";
                result = "X";
            } else {
                document.getElementById("conf_" + j + "_" + (i + 1)).style.color = null;
                result = "";
            }
            document.getElementById("conf_" + j + "_" + (i + 1)).innerHTML = result;
        }
    }
}

function typeAdd(num) {
    for (let i = 0; i < my_type_list.length; i++) {
        if (Number(my_type_list[i]) === Number(num)) {
            break;
        }
        if (my_type_list[i] === -1) {
            my_type_list[i] = num;
            break;
        }
    }

    myTypeSet();
}

function typeDel(num) {
    my_type_list[num] = -1;
    store = "";
    for (let i = 1; i < my_type_list.length; i++) {
        if (my_type_list[i] !== -1 && my_type_list[i - 1] === -1) {
            my_type_list[i - 1] = my_type_list[i];
            my_type_list[i] = -1;
        }
    }

    myTypeSet();
}

function myTypeSet() {
    for (let i = 0; i < my_type_list.length; i++) {
        if (my_type_list[i] === -1) {
            document.getElementById("my_img_" + i).src = "img/types-icon/null.png";
            document.getElementById("my_imgbg_" + i).style.background = null;
            for (let j = 0; j < document.getElementsByClassName("my_bg_" + i).length; j++) {
                document.getElementsByClassName("my_bg_" + i)[j].style.background = null;
            }
        } else {
            document.getElementById("my_img_" + i).src
                    = "img/types-icon/" + type_abb[my_type_list[i]] + ".png";
            document.getElementById("my_imgbg_" + i).style.background
                    = "rgba(var(--color-" + type_abb[my_type_list[i]] + "),0.8)";
            for (let j = 0; j < document.getElementsByClassName("my_bg_" + i).length; j++) {
                document.getElementsByClassName("my_bg_" + i)[j].style.background
                        = "rgba(var(--color-" + type_abb[my_type_list[i]] + "),0.15)";
            }
        }
    }

    compatibilitySet();
}

function compatibilitySet() {
    result = "";

    for (let i = 0; i < my_type_list.length; i++) {
        if (my_type_list[i] !== -1) {
            for (let j = 0; j < compatibility[0].length; j++) {
                if (compatibility[j][my_type_list[i]] === 2.0) {
                    document.getElementById("my_" + i + "_" + (j + 1)).style.color = "var(--js-twice)";
                    result = "O";
                } else if (compatibility[j][my_type_list[i]] === 0.5) {
                    document.getElementById("my_" + i + "_" + (j + 1)).style.color = "var(--js-half)";
                    result = "Δ";
                } else if (compatibility[j][my_type_list[i]] === 0.0) {
                    document.getElementById("my_" + i + "_" + (j + 1)).style.color = "var(--js-nullity)";
                    result = "X";
                } else {
                    document.getElementById("my_" + i + "_" + (j + 1)).style.color = null;
                    result = "";
                }
                document.getElementById("my_" + i + "_" + (j + 1)).innerHTML = result;
            }
        } else {
            for (let j = 0; j < compatibility[0].length; j++) {
                document.getElementById("my_" + i + "_" + (j + 1)).innerHTML = "";
            }
        }
    }

    confTypeSet();
}

function confTypeSet() {
    mytype_opp = [
        1, 1, 1, 1
    ];

    nulldata = 0;

    for (let i = 0; i < compatibility[0].length; i++) {
        mytype_opp = [1, 1, 1, 1];
        nulldata = 0;
        for (let j = 0; j < my_type_list.length; j++) {
            if (my_type_list[j] !== -1) {
                mytype_opp[j] = compatibility[i][my_type_list[j]];
            } else {
                nulldata++;
            }
        }

        if (mytype_opp.includes(0) || mytype_opp.includes(0.5)) {
            conf_type_list[i] = 0;
        } else {
            if (nulldata === 2) {
                conf_type_list[i] = 0;
            } else {
                conf_type_list[i] = 1;
            }
        }
        if (mytype_opp.includes(0) || mytype_opp.includes(0.5)) {
            conf_type_list_clear[i] = 0;
        } else if (mytype_opp.includes(2)) {
            if (mytype_opp.filter(value => value >= 2).length === 1) {
                conf_type_list_clear[i] = 2;
            } else {
                conf_type_list_clear[i] = 4;
            }
        } else {
            conf_type_list_clear[i] = 1;
        }
    }

    document.getElementById("mytype_no").innerHTML = (2 - nulldata) + " / 2";

    confTableSet();
    TeraTypechecker();
}

function confTableSet() {
    sum = 0;

    for (let i = 0; i < conf_type_list.length; i++) {
        if (conf_type_list[i] === 1) {
            document.getElementById("conf_row_" + i).style.display = null;
            sum++;
        } else {
            document.getElementById("conf_row_" + i).style.display = "none";
        }
    }

    if (sum === 0) {
        for (let i = 0; i < (type_abb.length + 1); i++) {
            document.getElementById("conf_null_" + i).style.display = null;
        }
    } else {
        for (let i = 0; i < (type_abb.length + 1); i++) {
            document.getElementById("conf_null_" + i).style.display = "none";
        }
    }

    if (sum <= 1) {
        document.getElementById("conf_rowspan").innerHTML = "攻";
    } else if (sum === 2) {
        document.getElementById("conf_rowspan").innerHTML = "攻撃";
    } else {
        document.getElementById("conf_rowspan").innerHTML = "攻撃側";
    }
}

function info_display() {

    var change = document.getElementById("info");

    if (change.style.display === "block") {
        change.style.display = "none";
        document.getElementById("info_title").innerHTML = "#このサイトについて ▼";
    } else {
        change.style.display = "block";
        document.getElementById("info_title").innerHTML = "#このサイトについて ▲";
    }
}

function TeraTypechecker() {
    point = [
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

    for (let i = 0; i < type_abb.length; i++) {
        for (let j = 0; j < conf_type_list_clear.length; j++) {
            if (conf_type_list_clear[j] === 2) {
                if (compatibility[j][i] === 2) {
                    point[i] -= 2;
                } else if (compatibility[j][i] === 0.5) {
                    point[i] += 2;
                } else if (compatibility[j][i] === 0) {
                    point[i] += 4;
                }
            } else if (conf_type_list_clear[j] === 1) {
                if (compatibility[j][i] === 2) {
                    point[i] -= 1;
                } else if (compatibility[j][i] === 0.5) {
                    point[i] += 1;
                } else if (compatibility[j][i] === 0) {
                    point[i] += 2;
                }
            } else if (conf_type_list_clear[j] === 4) {
                if (compatibility[j][i] === 2) {
                    point[i] -= 1;
                } else if (compatibility[j][i] === 0.5) {
                    point[i] += 4;
                } else if (compatibility[j][i] === 0) {
                    point[i] += 6;
                }
            }
        }
    }

    TeraTypeDisplay();
}

function TeraTypeDisplay() {
    sorted = point.slice().sort((a, b) => b - a);
    ranked = point.slice().map((item) => {
        return sorted.indexOf(item) + 1;
    });
    sum = 0;
    LOOP_I:for (let i = 0; i < ranked.length; i++) {
        for (let j = 0; j < ranked.length; j++) {
            if (ranked[j] === i) {
                conf_TeraType_list[sum] = j;
                sum++;
            }
            if (sum >= conf_TeraType_list.length) {
                break LOOP_I;
            }
        }
    }

    for (let i = 0; i < conf_TeraType_list.length; i++) {
        document.getElementById("TeraType_tl_" + i).innerHTML = type_name[conf_TeraType_list[i]];
        document.getElementById("TeraType_" + i).src
                = "img/tera-icon/" + type_abb[conf_TeraType_list[i]] + ".png";
    }
}
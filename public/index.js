/* pratic */

/* document.getElementsByClassName('btn-az').innerText="AZ" */

let month = 13

if (0 < month && month <= 3){ /* 0 < month <= 3 */
    var fesil = "Qış Ayıdır"
}

else if (month <=6){
    var fesil = "Yaz Ayıdır"
}

else if (month <=9) {
    var fesil = "Yay Ayıdır"
}

else if(month <=12){
    var fesil = "Payız Ayıdır"
}

else {
    var fesil = "Mennen Mezelenirsen???!!!"
}

console.log(fesil)

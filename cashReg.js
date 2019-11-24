function checkCashRegister(price, cash, cid) {
    var changeAvailable;
    var change;
    // Hereis your change, ma'am.
    var output = { status: null, change: [] };
    var cashInDrawer = 0;
    var PENNYS = 0;
    var NICKLES = 0;
    var DIMES = 0;
    var QUARTERS = 0;
    var ONES = 0;
    var FIVES = 0;
    var TENS = 0;
    var TWENTYS = 0;
    var ONE_HUNDREDS = 0;
    var pUSEd = 0;
    var nUSEd = 0;
    var dUSEd = 0;
    var qUSEd = 0;
    var oUSEd = 0;
    var fUSEd = 0;
    var tenUSEd = 0;
    var twenUSEd = 0;
    var hUSEd = 0;

    for (var i = 0; i < cid.length; i++) {
        cashInDrawer += cid[i][1];
    }

    var changeRequired = cash - price;
    changeAvailable = cashInDrawer - (cash - price);
    if (changeRequired < 0) {
        output.change = [];
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    if ((cid[0][0] = "PENNY")) {
        PENNYS += cid[0][1] * 100;
    }

    if ((cid[1][0] = "NICKLE")) {
        NICKLES += cid[1][1] * 20;
    }
    if ((cid[2][0] = "DIME")) {
        DIMES += cid[2][1] * 10;
    }
    if ((cid[3][0] = "QUARTER")) {
        QUARTERS += cid[3][1] * 4;
    }
    if ((cid[4][0] = "ONE")) {
        ONES += cid[4][1];
    }
    if ((cid[5][0] = "FIVE")) {
        FIVES += cid[5][1] / 5;
    }
    if ((cid[6][0] = "TEN")) {
        TENS += cid[6][1] / 10;
    }
    if ((cid[7][0] = "TWENTY")) {
        TWENTYS += cid[7][1] / 20;
    }
    if ((cid[8][0] = "ONE HUNDRED")) {
        ONE_HUNDREDS += cid[8][1] / 100;
    }

    if (changeRequired > cashInDrawer) {
        output.change = [];
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    while (changeRequired / 100 >= 1 && ONE_HUNDREDS > 0) {
        ONE_HUNDREDS--;
        hUSEd++;
        changeRequired -= 100;
    }
    if (hUSEd > 0) {
        output.change.push(["ONE HUNDRED", hUSEd * 100]);
    }
    while (changeRequired / 20 >= 1 && TWENTYS > 0) {
        TWENTYS--;
        twenUSEd++;
        changeRequired -= 20;
    }
    if (twenUSEd > 0) {
        output.change.push(["TWENTY", twenUSEd * 20]);
    }
    while (changeRequired / 10 >= 1 && TENS > 0) {
        TENS--;
        tenUSEd++;
        changeRequired -= 10;
    }
    if (tenUSEd > 0) {
        output.change.push(["TEN", tenUSEd * 10]);
    }
    while (changeRequired / 5 >= 1 && FIVES > 0) {
        FIVES--;
        fUSEd++;
        changeRequired -= 5;
    }
    if (fUSEd > 0) {
        output.change.push(["FIVE", fUSEd * 5]);
    }
    while (changeRequired / 1 >= 1 && ONES > 0) {
        if (ONES > 0) {
            ONES--;
            oUSEd++;
            changeRequired -= 1;
        }
    }
    if (oUSEd > 0) {
        output.change.push(["ONE", oUSEd * 1]);
    }
    while (changeRequired / 0.25 >= 1 && QUARTERS > 0) {
        QUARTERS--;
        qUSEd++;
        changeRequired -= 0.25;
    }
    if (qUSEd > 0) {
        output.change.push(["QUARTER", qUSEd * 0.25]);
    }
    while (changeRequired / 0.1 >= 1 && DIMES > 0) {
        DIMES--;
        dUSEd++;
        changeRequired -= 0.1;
    }
    if (dUSEd > 0) {
        output.change.push(["DIME", dUSEd * 0.1]);
    }
    while (changeRequired / 0.05 >= 1 && NICKLES > 0) {
        NICKLES--;
        nUSEd++;
        changeRequired -= 0.05;
    }
    if (nUSEd > 0) {
        output.change.push(["NICKEL", nUSEd * 0.05]);
    }
    while (changeRequired / 0.01 >= 0.999 && PENNYS > 0) {
        PENNYS--;
        pUSEd++;
        changeRequired -= 0.01;
    }
    if (pUSEd > 0) {
        output.change.push(["PENNY", pUSEd * 0.01]);
    }

    if (changeRequired > 0) {
        output.status = "INSUFFICIENT_FUNDS"
        output.change = [];
        return output;
    }

    if (changeRequired <= 0.01 &&
        PENNYS == 0 && NICKLES == 0 && DIMES == 0 && QUARTERS == 0 && ONES == 0 && FIVES == 0 && TENS == 0 && TWENTYS == 0 && ONE_HUNDREDS == 0) {
        output.status = "CLOSED"
        output.change = []
        output.change.push(["PENNY", pUSEd * 0.01], ["NICKEL", nUSEd * 0.05], ["DIME", dUSEd * 0.1], ["QUARTER", qUSEd * 0.25], ["ONE", oUSEd * 1], ["FIVE", fUSEd * 5], ["TEN", tenUSEd * 10], ["TWENTY", twenUSEd * 20], ["ONE HUNDRED", hUSEd * 100])
        return output;
    }


    output.status = "OPEN";
    return output;
}

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])
checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])
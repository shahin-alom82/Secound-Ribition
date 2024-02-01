function leapYear(leap) {
    const rimainder = leap % 4;
    if (rimainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const total = leapYear(1963)
console.log('is not leap Year : ' , total);
const totals = leapYear(2023)
console.log('is leap Year : ' , totals)
function starRating(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let stars = 0;
    for (let i = 0; i < arr.length; i++) {
        stars += arr[i] * (i + 1);
    }
    let avg = stars / sum;
    avg = avg.toFixed(2);
    let round = Math.round(avg);
    let str = "";
    str += avg + " ";
    for (let j = 0; j < round; j++) {
        str += "*"
    }

    console.log(str);
}
starRating([55, 67, 98, 115, 61]);
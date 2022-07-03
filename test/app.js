let str = "www.google.com";

console.log(str.match(/(www)\.(\w+)\.([a-z]{2,3})(\.[a-z]{2,3})?/gi));

let str2 = "2022-05-23T12:02:59"

console.log(str2.match(/(\d{4}|\d{2})/gi));

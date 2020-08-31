// "use strict";
// function getText(name, age) {
//     const nameText = name.substr(0, 10);
//     const ageText = age >= 35 ? 'senior' : 'junior';
//     return 'name: ${nameText}, age : ${ageText}';
// }
// const v01 = getText('mike', 23);
// const v02 = getText('mike', '23');
// const v03 = getText('mike', 23);
// const getText2 = function (name, age) {
//     return '';
// };
// function getText3(name, age, language) {
//     const nameText = name.substr(0, 10);
//     const ageText = age >= 35 ? 'senior' : 'junior';
//     const languageText = language ? language.substr(0, 10) : '';
//     return 'name: ' + nameText + ', age : ' + ageText + ', language : ' + languageText;
// }
// console.log(getText3('Mike', 23, 'ko'));
// console.log(getText3('Mike', 23));
// getText3('Mike', 23, 123);
// function getText4(name, age = 15, language = 'korean') {
//     const nameText = name.substr(0, 10);
//     const ageText = age;
//     const languageText = language ? language.substr(0, 10) : '';
//     return 'name: ' + nameText + ', age : ' + ageText + ', language : ' + languageText;
// }
// console.log(getText4('Mike', 23));
// console.log(getText4('Mike'));
// function getText5(name, ...rest) {
//     return '';
// }
// console.log(getText5('Mike', 1, 2, 3));

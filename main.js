/* Задание 1 */
// function checkAdmin(user) {
//     if (user === 'Шамиль') {
//         return `user admin true, Welcome ${user}`
//     } else {
//         return 'false, not correct user'
//     }
// }
//
// console.log(checkAdmin('Никита'))

/* Задание 2 */
// function monthCheck(month) {
//     if (month <= 28) {
//         return `today is ${month} of february`
//     } else {
//         return  `on february only 28 day, your day is ${month} of another month`
//     }
// }
//
// console.log(monthCheck(29))

/* Задание 3 */
// function numEq(num) {
//     if (num === 50) {
//         return `${num} is equal of 50`
//     } else {
//         return `${num} is not correct`
//     }
// }
//
// console.log(numEq(50))

/* Задание 4 */
// function personBase(user, age) {
//     if (user === 'Шамиль' && age === 16) {
//         return `${user} ${age}, welcome`
//     } else {
//         return  `${user} ${age}, rejected`
//     }
// }
//
// console.log(personBase('Шамиль', 16));

/* Задание 5 */
// function nameMinLength(user) {
//     if (user.length >= 3) {
//         return `«${user}» name is accepted`
//     } else {
//         return `«${user}» name is too short (min 3)`
//     }
// }
// console.log(nameMinLength('Шамиль'))

/* Задание 6 */
// function nameMaxLength(user) {
//     if (user.length > 5) {
//         return `«${user}» name is too long (max 5)`
//     } else if (user.length <= 5) {
//         return `«${user}» name is accepted`
//     }
// }
// console.log(nameMaxLength('Шамиль'))

/* Задание 7 */
// function mustNum(num) {
//     if (num === 20) {
//         return 'True'
//     } else {
//         return  'False'
//     }
// }
//
// console.log(mustNum(20))

/* Задание 8 */
// function tString(age) {
//     if (typeof age === 'string') {
//         return `${age}, now it is a string!`
//     } else {
//         return `${age} must be a string`
//     }
// }
//
// console.log(tString(12))

/* Задание 9 */
// function mustOlder(age) {
//     if (age >= 23) {
//         return 'All Good!'
//     } else {
//         return `age must be older than 23`
//     }
// }
//
// console.log(mustOlder(23))

/* Задание 10 */
// function weekFn(day) {
//     let mon = 'monday';
//     let tue = 'tuesday';
//     let wed = 'wednesday';
//     let thur = 'thursday';
//     let fri = 'friday'
//     let sat = 'saturday';
//     let san = 'sunday'
//     if (day === 1) {
//         return `today is ${mon}!`;
//     } else if (day === 2) {
//         return `today is ${tue}!`;
//     }
//     else if (day === 3) {
//         return `today is ${wed}!`;
//     }
//     else if (day === 4) {
//         return `today is ${thur}!`;
//     }
//     else if (day === 5) {
//         return `today is ${fri}!`;
//     }
//     else if (day === 6) {
//         return `today is ${sat}!`;
//     }
//     else if (day === 7) {
//         return `today is ${san}!`;
//     }
//     else if(day > 7) {
//         return  'max days of week is 7!'
//     }
// }
// console.log(weekFn(1))
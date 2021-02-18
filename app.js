// const fs = require('fs');
// const path = require("path");
// const dirName2000 = path.join(__dirname, 'dir', '2000')
// const dirName1800 = path.join(__dirname, 'dir', '1800')
// const Test = path.join(__dirname, 'dir', '1800', 'Alina.txt')
//
// const randomFile = path.join(__dirname + '/randomFile')
// fs.readdir(dirName2000, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files)
//     files.map(fileName => {
//         console.log(fileName)
//         fs.rename(path.join(__dirname,'dir','2000',fileName), path.join(__dirname,'dir','1800',fileName) ,err => {
//     if (err) {
//         console.log(err);
//     }
// })
//     })
// })
// Перемістив з папки 2000 все в 18000)

// fs.readFile(Test, (err, data) => {
//     if (JSON.parse(data).gender == 'female') {
//         console.log(JSON.parse(data).gender);   --------Тест чи нормально витягнеться гендер
//         console.log('ok')
//     }
// })
//
// fs.readdir(dirName1800, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files)
//     files.map(fileName => {
//         fs.readFile(path.join(dirName1800,fileName) , (err, data) => {
//             if (JSON.parse(data).gender == 'male') {
//                 console.log(JSON.parse(data).gender);
//                 console.log('ok')
//
//
//         fs.rename(path.join(__dirname,'dir','1800',fileName), path.join(__dirname,'dir','2000',fileName), err => {
//             if (err) {
//                 console.log(err);
//             }
//         })
//     }else{
//                 console.log('it is female')}
// })
//     })
// })
// Завдання з зірочкою
// function sort(link) {
//     fs.readdir(link, (err, files) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//
//         files.forEach(fileName => {
//             const pathWithFile = path.join(link, fileName)
//             fs.stat(pathWithFile, (err1, stats) => {
//                 if (stats.isDirectory()) {
//                     console.log(true)
//                     return sort(pathWithFile)
//
//
//                 }
//                 console.log(false)
//                 const pathSortFile = path.join(__dirname, 'sortFile', fileName)
//                 fs.rename(pathWithFile, pathSortFile,
//                     err => {
//                         if (err) {
//                             console.log(err);
//                             return;
//                         }
//                     })
//
//             })
//         })
//     });
// }
//
// sort(randomFile)
// практика------------------------------------------------------------------
// практичне
// - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
//     { name: 'olya', gender: 'female', age: 20 }
//         ...
// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках
// const arr=[{ name: 'olya', gender: 'female', age: 40 },{ name: 'maria', gender: 'female', age: 20 },{ name: 'solomiya', gender: 'female', age: 19 },{ name: 'karina', gender: 'female', age: 15 },{ name: 'max', gender: 'male', age: 16 },{ name: 'oleg', gender: 'male', age: 30 },{ name: 'andrii', gender: 'male', age: 42 },{ name: 'alina', gender: 'female', age: 14 },{ name: 'yurii', gender: 'male', age: 21 },{ name: 'stepan', gender: 'male', age: 50 }]

// arr.map(value => {
//     fs.writeFile(path.join(__dirname,'pr','data',value.name ), JSON.stringify(value)  , err => {
//     if (err) {
//         console.log(err);
//
//     }
// })
//     console.log(value.name )
// })
// const dataLink =path.join(__dirname,'pr','data')
// fs.readdir(dataLink, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files)
//     files.map(fileName => {
//         fs.readFile(path.join(dataLink,fileName) , (err, data) => {
//             if (JSON.parse(data).gender == 'male' &&JSON.parse(data).age > 20) {
//                 console.log(JSON.parse(data).gender);
//         fs.rename(path.join(dataLink,fileName), path.join(__dirname,'pr','manOlder20',fileName), err => {
//             if (err) {
//                 console.log(err);
//             }
//         })
//     } else if (JSON.parse(data).gender == 'male' && JSON.parse(data).age <= 20) {
//                 console.log(JSON.parse(data).gender);
//                 fs.rename(path.join(dataLink,fileName), path.join(__dirname,'pr','manYounger20',fileName), err => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 })
//             }else if (JSON.parse(data).gender == 'female' && JSON.parse(data).age > 20) {
//                 console.log(JSON.parse(data).gender);
//                 fs.rename(path.join(dataLink,fileName), path.join(__dirname,'pr','womanOlder20',fileName), err => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 })
//             }else {
//                 console.log(JSON.parse(data).gender);
//                 fs.rename(path.join(dataLink,fileName), path.join(__dirname,'pr','womanYounger20',fileName), err => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 })
//             }
// })
//     })
// })

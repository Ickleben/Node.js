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
// Перемістив з папки 2000 все в 18000

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
//                         }
//                     })
//
//             })
//         })
//     });
// }
//
// sort(randomFile)

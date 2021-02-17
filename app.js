const fs = require('fs');
const dirName2000 = __dirname + '/dir/2000'
const dirName1800 = __dirname + '/dir/1800'
// const Test = __dirname + '/dir/1800/Alina.txt'
const randomFile = __dirname + '/randomFile'
// fs.readdir(dirName2000, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files)
//     files.map(fileName => {
//         console.log(fileName)
//         fs.rename(`${__dirname}/dir/2000/${fileName}`, `${__dirname}/dir/1800/${fileName}` ,err => {
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
//         fs.readFile(`${dirName1800}/${fileName}` , (err, data) => {
//             if (JSON.parse(data).gender == 'male') {
//                 console.log(JSON.parse(data).gender);
//                 console.log('ok')
//
//
//         fs.rename(`${__dirname}/dir/1800/${fileName}`, `${__dirname}/dir/2000/${fileName}`, err => {
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
//             fs.stat(link + `/${fileName}`, (err1, stats) => {
//                 if (stats.isDirectory() == false) {
//                     console.log(false)
//                     fs.rename(`${link}/${fileName}`, `${__dirname}/sortFile/${fileName}`,
//                             err => {
//                         if (err) {
//                             console.log(err);
//                         }
//                     })
//                 } else if (stats.isDirectory() == true) {
//                     console.log(true)
//                     console.log('asddasd')
//                     sort(link += `/${fileName}`)
//                     console.log(link)
//                 }
//             })
//         })
//     });
// }
//
// sort(randomFile)

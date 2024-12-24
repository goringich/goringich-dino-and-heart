// const fs = require('fs')
// // const parse = require('node-html-parser').parse
// const path = require('path')
// const {src, dest} = require("gulp");

// const htmlDir = path.resolve('./html')
// const files = fs.readdirSync(htmlDir)

// for (let file of files) {
//   if (path.extname(file) === '.html') {
//     fs.readFile(path.resolve(htmlDir, file), (err, html) => {
//         const root = parse(html);
//         // const body = root.querySelector("body")
//         let x = `
//           <section class="section1">
//             <a href="pageScroll.html" class="btngr">Следующая страница</a>
//           </section>
//         `
//         // NodeList
//         const html1n = Buffer.from(html).toString()
//         html = $.parseHTML( html1n )
//         const body = `${html1n}`
//         console.log(body);
//     })
//   }
// }

// function givMeFiles (dir, files){
    
//   files = files || [];
//   let allFiles = fs.readdirSync(dir);
//   for (let i = 0; i < allFiles.length; i++){
//       let name = dir + '/' + allFiles[i];
//       if (fs.statSync(name).isDirectory()){
//           givMeFiles (name, files);
//       } else {
//           files.push(name);
//       }
//   }
//   return files;
//   console.log(files);
// };
// givMeFiles ("C:/projects/приколы-css-js/gulp4-project/src/assets/images/onewidth/")

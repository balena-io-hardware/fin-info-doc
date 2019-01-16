const markdownpdf = require("markdown-pdf");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync('config.json'));


createOutputDirectories(config)
.then (() => {
    "use strict";
    for (var document of config.documents) {
      let sourceCwd = document.source.substring(0, document.source.lastIndexOf("/") + 1);
      let destinationFolder =document.source.substring(document.source.lastIndexOf("/") + 1, document.source.length);
      fs.createReadStream(document.source)
      .pipe(markdownpdf({"cwd":sourceCwd,"cssPath": __dirname + "/" + config.css,"remarkable": { html: true, breaks: true }}))
      .pipe(fs.createWriteStream(__dirname + "/" + document.destination + "/" + destinationFolder.replace(".md", ".pdf")));
    }
  })
  .catch(console.error);

function createOutputDirectories(config) {
  "use strict";
  return new Promise((resolve, reject) => {
    for (var document of config.documents) {
      fs.promises.mkdir(document.destination, { recursive: true })
      .then (() => {
        resolve();Q
      })
      .catch(reject);
    }
  });
}

const markdownpdf = require("markdown-pdf");
const fs = require("fs");

const config = JSON.parse(fs.readFileSync('config.json'));

fs.promises.mkdir(config.destination, { recursive: true })
  .then (() => {
    "use strict";
    for (var source of config.sources) {
      let sourceCwd = source.substring(0, source.lastIndexOf("/") + 1);
      let destinationFolder =source.substring(source.lastIndexOf("/") + 1, source.length);
      fs.createReadStream(source)
      .pipe(markdownpdf({"cwd":sourceCwd,"cssPath": __dirname + "/" + config.css}))
      .pipe(fs.createWriteStream(__dirname + "/" + config.destination + "/" + destinationFolder.replace(".md", ".pdf")));
    }
  })
  .catch(console.error);

# balenaFin repository
Official documentation repository for the [balenaFin board](https://balenafin.io).  
Get it now from the official balenaFin [store](https://store.balena.io/).

## Directory structure

    .
    ├── documentation
    │   ├── CAD                          # 2d & 3D files for balenaFin and accessories
    │   ├── PDF                          # PDF files generated from markdown source using the builder
    │   └── markdown                     # balenaFin and accessories documentation source files
    ├── software                         # Linux config files for accessing balenaFin HW
    │   ├── dt-blob
    │   ├── overlay                      # Device tree overlay for Linux kernel
    │   └── drivers                      # Device drivers for radio, etc.
    ├── examples                         # Example code for the balenaFin
    ├── config.json                      # PDF generator files
    ├── index.js                         # PDF generator files
    └── package.json                     # PDF generator files

## Generated documentation

All files inside `documentation/CAD` and `documentation/PDF` are official balenaFin documentation. 
They are automatically generated from markdown files in `documentation/markdown`. 

## Building PDF releases

All PDF documentation is generated automatically from markdown files. To install the PDF generator, clone the repository and run `npm install`

`config.json` allows to define the document sources and their destination folder, along with custom overall styling

Once `config.json` is configured, run `npm start` to generate the PDF


### Project specific syntax

#### Page breaks

Creating a page-break on the destination PDF. 
It's important to leave a blank line above and below. 

```html

<div class="page-break"></div>

```

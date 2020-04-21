// Parse EAN13
EAN13 = document.querySelector("meta[itemprop='gtin8']").getAttribute("content");
console.log(EAN13)

// Load JsBarcode
var DOM_img = document.createElement("img");
DOM_img.id = "barcode"
document.body.appendChild(DOM_img);

// Append Barcode
/* JsBarcode("#barcode", EAN13, {
    format: "auto",
    margin: 3,
    lastChar: " ",
    height: 50
}); */

if (EAN13.length == 13) {
    JsBarcode("#barcode", EAN13, {
        format: "EAN13",
        margin: 3,
        lastChar: " ",
        height: 50
    });
} else {
    JsBarcode("#barcode", EAN13, {
        format: "UPC",
        margin: 3,
        lastChar: " ",
        height: 50
    });
}
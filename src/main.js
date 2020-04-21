// Parse EAN13
THEBARCODE = document.querySelector("meta[itemprop='gtin8']").getAttribute("content");

// Load JsBarcode
var DOM_img = document.createElement("img");
DOM_img.id = "barcode"
document.body.appendChild(DOM_img);

// Append Barcode
if (THEBARCODE.length == 13) {
    JsBarcode("#barcode", THEBARCODE, {
        format: "EAN13",
        margin: 3,
        lastChar: " ",
        height: 50
    });
} else {
    JsBarcode("#barcode", THEBARCODE, {
        format: "UPC",
        margin: 3,
        lastChar: " ",
        height: 50
    });
}
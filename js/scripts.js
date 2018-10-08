

// embed PDF
var options = {
    height: "700px",
    page: '2',
    pdfOpenParams: {
        view: 'FitV',
        pagemode: 'thumbs',
        search: 'lorem ipsum'
    }
};
PDFObject.embed("pdf/lecture_01.pdf", "#pdfContainer", options);
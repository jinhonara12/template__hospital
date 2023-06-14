window.addEventListener('load', function () {
    var allElements = document.querySelectorAll('.include-file');
    console.log(allElements)
    Array.prototype.forEach.call(allElements, function (el) {
        let includePath = el.dataset.includePath;
        if (includePath) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.response;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});
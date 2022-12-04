(function (document,offset, delay) {
    let beforeTop = document.scrollingElement.scrollTop;
    document.scrollingElement.scrollTop = 0;
    setTimeout(function () {
        let scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#kotvymenu',
            offset: offset
        });
        document.scrollingElement.scrollTop = beforeTop;
    },delay);
})(document,10,1000);
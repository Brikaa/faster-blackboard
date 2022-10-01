const callback = (_, observer) => {
    if (document.getElementById('content')) {
        observer.disconnect();
        Array.from(document.getElementsByTagName('A'))
            .filter((a) => a.href.includes('bbcswebdav'))
            .forEach((a) => {
                const new_anchor = document.createElement('a');
                new_anchor.href = a.href;
                new_anchor.innerHTML = a.innerHTML;
                a.parentElement.replaceChild(new_anchor, a);
            });
        observer.observe(document, config);
    }
};
const config = { childList: true, subtree: true };
const observer = new MutationObserver(callback);
observer.observe(document, config);

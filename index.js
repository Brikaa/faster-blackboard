Array.from(document.getElementsByTagName('A'))
    .filter((a) => a.href.includes('bbcswebdav'))
    .forEach((a) => {
        const new_anchor = document.createElement('a');
        new_anchor.href = a.href;
        new_anchor.innerHTML = a.innerHTML;
        a.parentElement.replaceChild(new_anchor, a);
    });

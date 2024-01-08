console.log("TROLLED");

function replaceWithTroll() {

    let images = document.getElementsByTagName("img");

    for (elt of images) {

        elt.src = chrome.extension.getURL("troll.gif");

    }

}

Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');

    console.log("replace images with troll now")

    replaceWithTroll();
});
let pagenum = 1;
let playerOpen = 0;
let darkmode = 0;

document.getElementById(`next`).onclick = function(){
    pagenum = pagenum + 1
    pagenum >= 605 ? pagenum = 604 : pagenum = pagenum;
    document.getElementById(`myiframe`).setAttribute("src", `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`)
}
document.getElementById(`back`).onclick = function(){
    pagenum = pagenum - 1
    pagenum <= 0 ? pagenum = 1 : pagenum = pagenum;
    document.getElementById(`myiframe`).setAttribute("src", `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`)
}
document.getElementById(`goto`).onclick = function(){
    pagenum = document.getElementById(`pagenumber`).value;
    pagenum <= 0 ? pagenum = 1 : pagenum = pagenum;
    pagenum >= 605 ? pagenum = 604 : pagenum = pagenum;
    document.getElementById(`myiframe`).setAttribute("src", `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`)
    document.getElementById(`pagenumber`).value = "";
}

document.getElementById(`player`).onclick = function(){
    if(playerOpen == 0){
        document.getElementById(`myiframe`).style.height = `calc(100% - 46px)`;
        playerOpen = 1
    }
    else if(playerOpen == 1){
        document.getElementById(`myiframe`).style.height = `100%`;
        playerOpen = 0
    }
}

document.getElementById(`dark`).onclick = function(){
    if(darkmode == 0){
        document.getElementById(`myiframe`).style.filter = `invert(100%) hue-rotate(180deg) contrast(125%)`;
        darkmode = 1
    }
    else if(darkmode == 1){
        document.getElementById(`myiframe`).style.filter = `none`;
        darkmode = 0
    }
}
let pagenum = 1;

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
let pagenum = 1;

document.getElementById(`next`).onclick = function(){
    pagenum = pagenum + 1
    document.getElementById(`myiframe`).setAttribute("src", `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`)
}
document.getElementById(`back`).onclick = function(){
    pagenum = pagenum - 1
    document.getElementById(`myiframe`).setAttribute("src", `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`)
}
document.getElementById(`goto`).onclick = function(){
    pagenum = document.getElementById(`pagenumber`).value;
    document.getElementById(`myiframe`).setAttribute("src", `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`)
    document.getElementById(`pagenumber`).value = "";
}
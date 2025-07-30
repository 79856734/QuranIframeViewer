let pagenum = 1;
let playerOpen = 0;
let darkmode = 0;

const surahButtons = document.querySelectorAll('.surah-btn');
if (surahButtons.length > 0) {
  surahButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.getAttribute('data-page'), 10);
      sessionStorage.setItem('quranPage', page);
      window.location.href = 'index.html';
    });
  });
} else {
  const stored = sessionStorage.getItem('quranPage');
  if (stored) {
    pagenum = parseInt(stored, 10);
    sessionStorage.removeItem('quranPage');
  }
  
  const iframe = document.getElementById('myiframe');
  if (iframe) {
    iframe.setAttribute('src', `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`);
  }

  document.getElementById('next').onclick = function(){
    pagenum++;
    pagenum = pagenum >= 605 ? 604 : pagenum;
    iframe.setAttribute('src', `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`);
  };

  document.getElementById('back').onclick = function(){
    pagenum--;
    pagenum = pagenum <= 0 ? 1 : pagenum;
    iframe.setAttribute('src', `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`);
  };

  document.getElementById('goto').onclick = function(){
    const input = document.getElementById('pagenumber');
    pagenum = parseInt(input.value, 10);
    pagenum = pagenum <= 0 ? 1 : pagenum;
    pagenum = pagenum >= 605 ? 604 : pagenum;
    iframe.setAttribute('src', `https://www.easyquran-eg.com/qrhafs/page/${pagenum}`);
    input.value = '';
  };

  document.getElementById('player').onclick = function(){
    if (playerOpen === 0) {
      iframe.style.height = 'calc(100% - 46px)';
      playerOpen = 1;
    } else {
      iframe.style.height = '100%';
      playerOpen = 0;
    }
  };

  document.getElementById('dark').onclick = function(){
    if (darkmode === 0) {
      iframe.style.filter = 'invert(100%) hue-rotate(180deg) contrast(110%)';
      darkmode = 1;
    } else {
      iframe.style.filter = 'none';
      darkmode = 0;
    }
  };
}

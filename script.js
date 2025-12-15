function toggleTheme() { document.body.classList.toggle('dark-mode'); }

const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
lightbox.addEventListener('click', e => { if(e.target !== e.currentTarget) return; lightbox.style.display='none'; });

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    let lbImg = document.createElement('img');
    lbImg.src = img.src;
    lightbox.innerHTML = '';
    lightbox.appendChild(lbImg);
  });
});

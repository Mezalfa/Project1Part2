function scrollToUpload() {
  document.getElementById("upload").scrollIntoView({ behavior: "smooth" });
}

function showResult() {
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  resultBox.classList.remove("d-none");
  resultText.textContent = "Your outfit resembles 1970s Bohemian Chic style!";
}

(function () {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  const shadowOnScroll = () => {
    if (window.scrollY > 4) nav.classList.add('shadow-sm');
    else nav.classList.remove('shadow-sm');
  };

  shadowOnScroll();
  window.addEventListener('scroll', shadowOnScroll);
})();

(function () {
  const uploadInput = document.getElementById('photoUpload');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resultBox = document.getElementById('resultBox');
  const uploadSection = document.getElementById('upload');

  if (!uploadInput || !analyzeBtn) return;

  // Disable analyze button until file chosen
  analyzeBtn.disabled = !uploadInput.files || uploadInput.files.length === 0;

  // When file selected, enable analyze and show file name
  uploadInput.addEventListener('change', () => {
    analyzeBtn.disabled = !(uploadInput.files && uploadInput.files[0]);

    let info = document.getElementById('fileInfoInline');
    if (!info) {
      info = document.createElement('div');
      info.id = 'fileInfoInline';
      info.className = 'text-muted small mt-2';
      uploadInput.insertAdjacentElement('afterend', info);
    }
    info.textContent = uploadInput.files[0]
      ? `Selected: ${uploadInput.files[0].name}`
      : '';
  });

  // Drag and drop styling + functionality
  const inputWrap = uploadInput.closest('.text-center') || uploadSection;
  if (inputWrap) {
    ['dragenter', 'dragover'].forEach(ev =>
      inputWrap.addEventListener(ev, e => {
        e.preventDefault();
        e.stopPropagation();
        uploadInput.classList.add('is-valid');
      })
    );

    ['dragleave', 'dragend', 'drop'].forEach(ev =>
      inputWrap.addEventListener(ev, e => {
        e.preventDefault();
        e.stopPropagation();
        uploadInput.classList.remove('is-valid');
      })
    );

    inputWrap.addEventListener('drop', e => {
      const file = e.dataTransfer?.files?.[0];
      if (file) {
        const dt = new DataTransfer();
        dt.items.add(file);
        uploadInput.files = dt.files;
        uploadInput.dispatchEvent(new Event('change'));
      }
    });
  }

  analyzeBtn.addEventListener('click', showResult);
})();

(function () {
  const nav = document.querySelector('.navbar.fixed-top');
  if (!nav) return;

  const setPadding = () => {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  };

  window.addEventListener('load', setPadding);
  window.addEventListener('resize', setPadding);
})();



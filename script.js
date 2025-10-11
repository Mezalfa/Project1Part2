
function scrollToUpload() {
    document.getElementById("upload")?.scrollIntoView({ behavior: "smooth" });
}


function showResult() {
    const resultBox = document.getElementById("resultBox");
    const input = document.getElementById("photoUpload");
    const resultText = document.getElementById("resultText");
    
    if (input && input.files.length > 0) {
        resultText.textContent = `You uploaded: ${input.files[0].name}`;
    } else {
        resultText.textContent = "Your outfit resembles 1970s Bohemian Chic style!";
    }
    
    resultBox?.classList.remove("d-none");
}


function showThankYou(event) {
    event.preventDefault();
    const form = document.querySelector("form");
    const thankYou = document.getElementById("thankYou");
    form?.classList.add("d-none");
    thankYou?.classList.remove("d-none");
}

(function () {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    
    const shadowOnScroll = () => {
        if (window.scrollY > 4) {
            nav.classList.add('shadow-sm');
        } else {
            nav.classList.remove('shadow-sm');
        }
    };
    
    shadowOnScroll();
    window.addEventListener('scroll', shadowOnScroll);
})();


(function () {
    const uploadInput = document.getElementById('photoUpload');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    if (!uploadInput || !analyzeBtn) return;
    
    analyzeBtn.disabled = true;
    
    uploadInput.addEventListener('change', () => {
        analyzeBtn.disabled = !uploadInput.files || uploadInput.files.length === 0;
        
    
        let info = document.getElementById('fileInfoInline');
        if (!info) {
            info = document.createElement('div');
            info.id = 'fileInfoInline';
            info.className = 'text-muted small mt-2';
            uploadInput.insertAdjacentElement('afterend', info);
        }
        info.textContent = uploadInput.files[0] ? `Selected: ${uploadInput.files[0].name}` : '';
    });
    
    
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




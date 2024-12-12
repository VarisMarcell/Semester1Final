/* Code by Mr. Tooley */

// Setting our variables
const htmlInfo = document.getElementById('info-1');
const cssInfo = document.getElementById('info-2');
const jsInfo = document.getElementById('info-3');

const htmlBtn = document.getElementById('btn-1');
const cssBtn = document.getElementById('btn-2');
const jsBtn = document.getElementById('btn-3');


// Set the funtions to be called when buttons pressed
function toggleHTMLInfo() {
    htmlInfo.classList.toggle('hidden');
}
function toggleCSSInfo() {
    cssInfo.classList.toggle('hidden');
}
function toggleJSInfo() {
    jsInfo.classList.toggle('hidden');
}

// Event Listeners
htmlBtn.addEventListener('click', toggleHTMLInfo);
cssBtn.addEventListener('click', toggleCSSInfo);
jsBtn.addEventListener('click', toggleJSInfo);

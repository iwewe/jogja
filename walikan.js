const originalInput = document.getElementById('original');
const resultInput = document.getElementById('kewalik');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const charCount = document.getElementById('char-count');
const copyStatus = document.getElementById('copy-status');

function walik() {
  const result = walikString(originalInput.value);
  resultInput.value = result;
  updateCount();
}

function walikString(aString) {
  if (!aString) return '';

  const lower = aString.toLowerCase();
  const last = lower.length;
  let result = '';

  for (let i = 0; i < last; i++) {
    let pertama = 'n';
    let keketelu = lower.charAt(i);
    let ketelu = '';
    let mbalik = '';
    let mandeg = 'n';

    if (i === 0) {
      if (keketelu === 'a') {
        mbalik = 'pa';
        pertama = 'y';
        mandeg = 'y';
      }
      if (keketelu === 'e') {
        mbalik = 'pe';
        pertama = 'y';
        mandeg = 'y';
      }
      if (keketelu === 'i') {
        mbalik = 'pi';
        pertama = 'y';
        mandeg = 'y';
      }
      if (keketelu === 'o') {
        mbalik = 'po';
        pertama = 'y';
        mandeg = 'y';
      }
      if (keketelu === 'u') {
        mbalik = 'pu';
        pertama = 'y';
        mandeg = 'y';
      }
      if (keketelu === 'p') {
        mbalik = 'h';
        pertama = 'y';
        mandeg = 'y';
      }
    }

    if (i < last - 1) {
      ketelu = lower.charAt(i + 1);
      if (keketelu === 'n' && ketelu === 'y') {
        mbalik = 'k';
        pertama = 'y';
      }
      if (keketelu === 'n' && ketelu === 'g') {
        mbalik = 'l';
        pertama = 'y';
      }
      if (keketelu === 'd' && ketelu === 'h') {
        mbalik = 'n';
        pertama = 'y';
      }
      if (keketelu === 't' && ketelu === 'h') {
        mbalik = 'w';
        pertama = 'y';
      }
    }

    if (i === last - 1) {
      if (keketelu === 't') {
        mbalik = 'n';
        pertama = 'y';
      }
    }

    if (pertama === 'y') {
      result += mbalik;
      if (mandeg === 'n') i++;
    } else {
      result += walikChar(lower.charAt(i));
    }
  }
  return result;
}

function walikChar(c) {
  switch (c) {
    case 'a':
      return 'a';
    case 'b':
      return 's';
    case 'c':
      return 'j';
    case 'd':
      return 'm';
    case 'e':
      return 'e';
    case 'f':
      return 'h';
    case 'g':
      return 't';
    case 'h':
      return 'p';
    case 'i':
      return 'i';
    case 'j':
      return 'c';
    case 'k':
      return 'ny';
    case 'l':
      return 'ng';
    case 'm':
      return 'd';
    case 'n':
      return 'dh';
    case 'o':
      return 'o';
    case 'p':
      return 'h';
    case 'q':
      return 's';
    case 'r':
      return 'y';
    case 's':
      return 'b';
    case 't':
      return 'g';
    case 'u':
      return 'u';
    case 'v':
      return 'h';
    case 'w':
      return 'th';
    case 'x':
      return 'x';
    case 'y':
      return 'r';
    case 'z':
      return 'z';
    default:
      return c;
  }
}

function updateCount() {
  const count = originalInput.value.length;
  charCount.textContent = `${count} karakter`;
}

function copyResult() {
  if (!resultInput.value) {
    copyStatus.textContent = 'Tidak ada teks untuk disalin.';
    return;
  }
  navigator.clipboard?.writeText(resultInput.value)
    .then(() => (copyStatus.textContent = 'Tersalin!'))
    .catch(() => (copyStatus.textContent = 'Gagal menyalin, coba manual.'));
}

function clearFields() {
  originalInput.value = '';
  resultInput.value = '';
  copyStatus.textContent = '';
  updateCount();
  originalInput.focus();
}

originalInput.addEventListener('input', walik);
copyBtn.addEventListener('click', copyResult);
clearBtn.addEventListener('click', clearFields);

// Seed contoh awal
originalInput.value = 'Sugeng rawuh ing kutha Yogyakarta, ayo mangan gudeg bareng!';
walik();
originalInput.focus();

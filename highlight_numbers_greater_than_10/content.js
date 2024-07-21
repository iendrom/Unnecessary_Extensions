// content.js

function highlightNumbers(element) {
  const regex = /\b\d+\b/g;

  if (element.nodeType === Node.TEXT_NODE) {
    const parent = element.parentNode;
    const matches = element.textContent.match(regex);
    if (matches) {
      const newContent = element.textContent.replace(regex, (match) => {
        const number = parseInt(match, 10);
        if (number > 10) {
          return `<span class="highlight">${number}</span>`;
        }
        return match;
      });
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newContent;
      while (tempDiv.firstChild) {
        parent.insertBefore(tempDiv.firstChild, element);
      }
      parent.removeChild(element);
    }
  } else {
    for (let i = 0; i < element.childNodes.length; i++) {
      highlightNumbers(element.childNodes[i]);
    }
  }
}

// Body içindeki tüm metin düğümlerini gez
highlightNumbers(document.body);

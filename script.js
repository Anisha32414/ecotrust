/* script.js */
// 🌐 Language Switcher Functionality
function switchLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(elem => {
    elem.innerText = elem.getAttribute(`data-${lang}`);
  });
}

const languageSelect = document.getElementById('languageSwitcher');
if (languageSelect) {
  languageSelect.addEventListener('change', (e) => switchLanguage(e.target.value));
}



  function switchLanguage(lang) {
    const elements = document.querySelectorAll("[data-en][data-hi]");
    
    elements.forEach(el => {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", el.getAttribute(`data-${lang}`));
      } else {
        el.textContent = el.getAttribute(`data-${lang}`);
      }
    });
  }

  function showEnglishMenu() {
    switchLanguage('en');
  }

  function showHindiMenu() {
    switchLanguage('hi');
  }




function checkWebsite(type) {
  const url = document.getElementById('websiteUrl').value;
  if (!url) {
    alert('Please enter a website URL.');
    return;
  }
  window.location.href = `result.html?url=${encodeURIComponent(url)}&type=${type}`;
}

  




 


function getQueryParams() {
  const params = {};
  window.location.search.substring(1).split("&").forEach(pair => {
    const [key, value] = pair.split("=");
    params[decodeURIComponent(key)] = decodeURIComponent(value || "");
  });
  return params;
}



 
  function toggleMenu() {
    const menu = document.getElementById('menuItems');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }


  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Change image every 3 seconds
  setInterval(nextSlide, 3000);




function displayReport() {
  const params = getQueryParams();
  const url = params.url || "N/A";
  const type = params.type || "N/A";
  document.getElementById('urlResult').textContent = url;

  const reportContainer = document.getElementById('reportContainer');
  reportContainer.innerHTML = `
    <h3>${type === 'sustainability' ? '🌱 Sustainability Report' : '🔐 Digital Legitimacy Report'}</h3>
    <p>This is a mock report for <strong>${url}</strong>.</p>
    <ul>
      <li>Status: Secure</li>
      <li>SSL: Valid</li>
      <li>Eco Certification: Detected</li>
    </ul>
  `;
}

let currentFontSize = 100; // percentage

function setFontSize(action) {
  if (action === 'increase' && currentFontSize < 150) {
    currentFontSize += 10;
  } else if (action === 'decrease' && currentFontSize > 70) {
    currentFontSize -= 10;
  } else if (action === 'reset') {
    currentFontSize = 100;
  }

  document.body.style.fontSize = currentFontSize + '%';
}

function downloadReport() {
  const reportText = document.getElementById('reportContainer').innerText;
  const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "EcoTrust_Report.txt";
  link.click();
}

if (window.location.pathname.includes("result.html")) {
  window.onload = displayReport;
}



  function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formattedDate = now.toLocaleString('en-IN', options);
    document.getElementById('datetime').textContent = formattedDate;
  }

  // Update every second
  setInterval(updateDateTime, 1000);
  updateDateTime(); // initial call





                                                                                            /*typewritter*/

  function typeWriter(text, elementId, speed) {
  let i = 0;
  const el = document.getElementById(elementId);
  el.textContent = ""; // clear previous content

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

function startTypewriter(lang) {
  const el = document.getElementById("typewriter");
  const text = el.getAttribute(`data-${lang}`);
  typeWriter(text, "typewriter", 50);
}

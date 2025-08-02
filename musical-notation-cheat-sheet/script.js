// Accessibility and user experience enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Remove loading message when content is ready
  const loadingElement = document.querySelector('.loading');
  if (loadingElement) {
    loadingElement.remove();
  }
  
  // Add keyboard navigation support
  document.addEventListener('keydown', function(e) {
    // Escape key to close any open dialogs or return to top
    if (e.key === 'Escape') {
      document.getElementById('main-content').focus();
    }
  });
});

// Verify that ABCJS library is available
console.log('ABCJS library:', ABCJS);

// Fetch and render the ABC notation file
fetch('musical-notation-cheat-sheet.abc')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(abcText => {
    console.log('ABC file loaded successfully');
    ABCJS.renderAbc("sheet-music", abcText, {
      responsive: "resize",
      add_classes: true,
      format: {
        titlefont: "Arial 16 bold",
        gchordfont: "Arial 12",
        vocalfont: "Arial 12",
        annotationfont: "Arial 12",
        measurefont: "Arial 12",
        partsfont: "Arial 12",
        repeatfont: "Arial 12",
        tempofont: "Arial 12",
        wordsfont: "Arial 12",
        timesigfont: "Arial 12",
        cleffont: "Arial 12",
        gracefont: "Arial 12",
        footerfont: "Arial 12",
        headerfont: "Arial 12"
      }
    });
    
    // Add print-friendly classes after rendering (using setTimeout to ensure rendering is complete)
    setTimeout(function() {
      const sheetMusic = document.getElementById('sheet-music');
      const svgElements = sheetMusic.querySelectorAll('svg');
      
      svgElements.forEach(function(svg) {
        svg.classList.add('print-friendly-staff');
        svg.style.setProperty('page-break-inside', 'avoid', 'important');
        svg.style.setProperty('page-break-before', 'auto', 'important');
        svg.style.setProperty('page-break-after', 'auto', 'important');
        svg.style.setProperty('break-inside', 'avoid', 'important');
        svg.style.setProperty('break-before', 'auto', 'important');
        svg.style.setProperty('break-after', 'auto', 'important');
        
        // Apply to all child elements
        const allElements = svg.querySelectorAll('*');
        allElements.forEach(function(element) {
          element.style.setProperty('page-break-inside', 'avoid', 'important');
          element.style.setProperty('break-inside', 'avoid', 'important');
        });
      });
    }, 100);
  })
  .catch(error => {
    console.error('Error loading ABC file:', error);
    const sheetMusic = document.getElementById('sheet-music');
    sheetMusic.innerHTML = `
      <div class="error" role="alert" aria-live="assertive">
        <h2>Error Loading Sheet Music</h2>
        <p>Unable to load the musical notation: ${error.message}</p>
        <p>Please check your internet connection and try refreshing the page.</p>
      </div>
    `;
  }); 
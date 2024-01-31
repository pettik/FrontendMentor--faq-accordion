const firstRows = document.querySelectorAll('.first-row');

// Iterate through each "first-row" element
firstRows.forEach(row => {
   // Add a click event listener to each "first-row" element
   row.addEventListener('click', () => {
      // Toggle the class "open" on the parent ".accordion" element
      const accordion = row.closest('.accordion');
      accordion.classList.toggle('open');

      // Toggle the source of the icon image
      const icon = row.querySelector('.icon img');
      if (accordion.classList.contains('open')) {
         icon.src = 'assets/images/icon-minus.svg';
      } else {
         icon.src = 'assets/images/icon-plus.svg';
      }
   });
});

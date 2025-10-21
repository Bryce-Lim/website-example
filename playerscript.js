// Get all tournament rows
const tournamentRows = document.querySelectorAll('.tournament-row');
        
// Add event listeners to each row
tournamentRows.forEach(row => {
    // Add hover effect when mouse enters
    row.addEventListener('mouseenter', () => {
        row.classList.add('hovered');
    });
    
    // Remove hover effect when mouse leaves
    row.addEventListener('mouseleave', () => {
        row.classList.remove('hovered');
    });
});
document.addEventListener('DOMContentLoaded', loadReports);

function loadReports() {
  fetch('http://localhost:8080/reports')
    .then(response => response.json())
    .then(data => {
      document.getElementById('revenue').textContent = $${data.totalRevenue};
      document.getElementById('highProducts').textContent = data.highDemandProducts.join(', ');
      document.getElementById('salesPerMonth').textContent = data.totalSalesThisMonth;
    })
    .catch(error => console.error('Error loading reports:', error));
}
// Components logic for Interactive Calculus Study Book

document.addEventListener('DOMContentLoaded', () => {
    const dashboardOverlay = document.getElementById('dashboard-overlay');
    const closeDashboardBtn = document.getElementById('close-dashboard');

    // Currently, we don't have a button to open the dashboard, let's add one if needed, or just provide the logic
    window.toggleDashboard = function() {
        if (dashboardOverlay) {
            dashboardOverlay.classList.toggle('hidden');
        }
    };

    if (closeDashboardBtn) {
        closeDashboardBtn.addEventListener('click', () => {
            dashboardOverlay.classList.add('hidden');
        });
    }
});

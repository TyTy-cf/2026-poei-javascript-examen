window.addEventListener("load", () => {
    const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabPanes.forEach(pane => pane.classList.remove('show', 'active'));

            const targetSelector = tab.getAttribute('data-bs-target');
            const targetPane = document.querySelector(targetSelector);

            if (targetPane) {
                targetPane.classList.add('show', 'active');
            }
        });
    });
});
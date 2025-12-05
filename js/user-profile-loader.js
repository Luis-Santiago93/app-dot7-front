function setupActiveNavigation(navSelector = '#mainNav') {
    $(`${navSelector} .nav-link`).click(function() {
        $(`${navSelector} .nav-item`).removeClass('active');
        $(this).closest('.nav-item').addClass('active');
    });

    const currentPage = location.pathname.split('/').pop();
    $(`${navSelector} .nav-link`).each(function() {
        if ($(this).attr('href').endsWith(currentPage)) {
            $(this).closest('.nav-item').addClass('active');
            return false;
        }
    });
}

$(document).ready(function() {

    const userData = JSON.parse(localStorage.getItem('user_info'));
    const appData = JSON.parse(localStorage.getItem('apps_info'));

    if (userData && appData) {

        const generateInitials = (name) => {
            if (!name) return 'A';
            
            const names = name.split(' ');
            let initials = names[0].charAt(0).toUpperCase();
            
            if (names.length > 1) {
                initials += names[names.length - 1].charAt(0).toUpperCase();
            }
            
            return initials;
        };

        const initials = generateInitials(userData.username);

        $('.navbar-nav .nav-link.dropdown-toggle').text(initials);

        $('.dropdown-header').text(userData.username || 'Usuario');

        let roleText = "Rol no definido";

        if (Array.isArray(appData) && appData.length > 0) {

            const authApp = appData.find(a => a.app_id === 2);

            if (authApp && Array.isArray(authApp.roles) && authApp.roles.length > 0) {
                roleText = authApp.roles.join(", "); 
            }
        }

        $('.dropdown-item-text.small').text(roleText);
    }
    else {
        console.error('No se encontraron datos del usuario en localStorage');
    }

    setupActiveNavigation();
    
});
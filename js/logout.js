function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';')[0];
    return null;
}

$(function() {
    $(document).on('click', '#logoutButton', async function(e) {
        e.preventDefault();

        const accessToken = getCookie('access_token');
        const refreshToken = getCookie('refresh_token');

        if (!accessToken) {
            window.location.href = "index.php";
            return;
        }

        const headers = {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        };

        try {

            await $.ajax({
                url: `${CONFIG.apiAuth}/logout`,
                type: "DELETE",
                headers
            });

            if (refreshToken) {
                await $.ajax({
                    url: `${CONFIG.apiAuth}/logout-refresh`,
                    type: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${refreshToken}`,
                        "Content-Type": "application/json"
                    }
                });
            }

        } catch (err) {
            console.warn("Error al cerrar sesión (el token puede estar expirado):", err);
        }

        localStorage.removeItem('apps_info');
        localStorage.removeItem('user_info');

        document.cookie = 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict';
        document.cookie = 'refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict';

        window.location.href = 'index.php';
    });
});

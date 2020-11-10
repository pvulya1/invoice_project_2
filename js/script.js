

window.addEventListener('DOMContentLoaded', () => {
    const settings = document.querySelector('.settings_menu'),
    settings_logo = document.querySelector('.top_nav_settings');
    settings_logo.addEventListener('click', () => {
        settings.classList.toggle('settings_menu_active');
        settings_logo.classList.toggle('top_nav_settings_active');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.profile_dropdown'),
    profile_link = document.querySelector('.profile_link'),
    profile_logo = document.querySelector('.profile_logo');
    profile_link.addEventListener('click', () => {
        profile.classList.toggle('profile_dropdown_active');
        profile_link.classList.toggle('profile_link_active');
        profile_logo.classList.toggle('profile_logo_active');
    });
    profile_logo.addEventListener('click', () => {
        profile.classList.toggle('profile_dropdown_active');
        profile_logo.classList.toggle('profile_logo_active');
        profile_link.classList.toggle('profile_link_active');
    });
});
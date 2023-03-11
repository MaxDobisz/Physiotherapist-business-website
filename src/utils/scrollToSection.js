export const scrollToSection = (elId, offset) => {
    const section = document.getElementById(elId);
    const top = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top + offset, behavior: 'smooth' });
};
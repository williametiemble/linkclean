function supprimerSuggestionDivs() {
    const divs = document.querySelectorAll('.feed-shared-update-v2');

    divs.forEach(div => {
        const headerTextDiv = div.querySelector('.update-components-header__text-view');

        if (headerTextDiv && headerTextDiv.textContent.includes('Suggestions')) {
            div.remove();
        }
    });
}

document.addEventListener('DOMContentLoaded', supprimerSuggestionDivs);

const observer = new MutationObserver(supprimerSuggestionDivs);
observer.observe(document.body, { childList: true, subtree: true });

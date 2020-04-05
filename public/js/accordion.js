const tabs = document.querySelector('.learn-tab');

const openTab = tab => {
    const content = tab.childNodes[3];
    const contentHeight = content.scrollHeight;
    content.style.height = contentHeight + 'px';
};

const closeOtherTabs = (tabs, openTab) => {
    tabs.forEach(tab => {
        if (tab === openTab) {
            const content = tab.childNodes[3];
            content.style.height = 0;
        }
    });
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        openTab(tab);
        closeOtherTabs(tabs, tab);
    });
});
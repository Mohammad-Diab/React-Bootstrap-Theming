const Functions = () => {

    const getTheme = () => {
        const name = getFromLocalStorage('themeName', 'A');
        const isDark = getFromLocalStorage('darkTheme', false);
        return { name, isDark };
    };

    const setTheme = (theme) => {
        if (theme) {
            setIntoLocalStorage('themeName', theme.name);
            setIntoLocalStorage('darkTheme', theme.isDark);
            return true;
        }
        return false;
    };

    const applyTheme = (theme) => {
        const htmlTag = document.querySelector('html');
        htmlTag.classList.add(`theme${theme.name}`);
        if (theme.isDark) {
            htmlTag.classList.add('dark');
        }
    };
    const getFromLocalStorage = (key, defaulValue) => {
        if (key) {
            let item = localStorage.getItem(key);
            if (item !== null) {
                return JSON.parse(item);
            }
        }
        return defaulValue;
    };
    const setIntoLocalStorage = (key, value) => {
        if (key && value !== undefined) {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }

    return {
        getTheme,
        setTheme,
        applyTheme,
        getFromLocalStorage,
        setIntoLocalStorage
    };
}

export default Functions();
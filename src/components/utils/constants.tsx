export const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const userData = () => JSON.parse(localStorage.getItem("newsUser") || '');
export const newsData = () => JSON.parse(localStorage.getItem("newsData") || '');
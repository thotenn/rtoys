export const saveInSessionStorage = (state, sessionName) => {
    try {
        sessionStorage.setItem(sessionName, JSON.stringify(state));
        return { ...state };
    } catch (e) {
        console.log('error.saveInSessionStorage: ', e);
        sessionStorage.removeItem(sessionName);
    }
}
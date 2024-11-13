const authService = {
    login: (username, password) => {
        if (username === 'user' && password === 'password') {
            localStorage.setItem('user', JSON.stringify({ name: username }));
            return true;
        }
        return false;
    },
    logout: () => {
        localStorage.removeItem('user');
    },
    getCurrentUser: () => JSON.parse(localStorage.getItem('user')),
};

export default authService;
import Axios from 'axios';

const AxiosService = {
    init() {
        this.axios = Axios.create({
            headers: { 'Content-Type': 'application/json' },
        });
    },

    async get(basePath, path, withAuth = true, query = null) {
        let queryString = '';
        if (query && query instanceof Object) {
            Object.entries(query).forEach(([key, value], index) => {
                queryString += index > 0 ? '&' : '?';
                queryString += `${key}=${value}`;
            });
        }
        return this.axios.get(path + queryString, {
            headers: withAuth ? this.authorizationHeader() : {},
            baseURL: basePath,
        });
    },

    async post(basePath, path, body = {}, withAuth = true, query = null) {
        let queryString = '';
        if (query && query instanceof Object) {
            Object.entries(query).forEach(([key, value], index) => {
                queryString += index > 0 ? '&' : '?';
                queryString += `${key}=${value}`;
            });
        }
        return this.axios.post(path + queryString, body, {
            headers: withAuth ? this.authorizationHeader() : {},
            baseURL: basePath,
        });
    },

    async put(basePath, path, body = {}, withAuth = true) {
        return this.axios.put(path, body, {
            headers: withAuth ? this.authorizationHeader() : {},
            baseURL: basePath,
        });
    },

    async delete(basePath, path, withAuth = true) {
        return this.axios.delete(path, {
            headers: withAuth ? this.authorizationHeader() : {},
            baseURL: basePath,
        });
    },

    /**
     * Creates an authorization header if ther is a token.
     * Returns an empty object otherwise.
     */
    authorizationHeader() {
        // const user = AuthService.getUser();
        // if (user && user.token) {
        //     return { Authorization: `Bearer ${user.token}` };
        // }

        return {};
    },
};

export default AxiosService;

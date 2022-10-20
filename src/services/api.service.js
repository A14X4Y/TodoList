class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post),
            });
            return useRequest(request);
        } catch (error) {
            console.error(error);
        }
    }

    async fetchPost() {
        try {
            const request = new Request(`${this.url}/posts.json`, {
                method: 'get'
            });
            return useRequest(request);
        } catch (error) {
            console.log(error);
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request);
    return await response.json();

}

export const apiService = new ApiService('https://todolist-8f9ce-default-rtdb.europe-west1.firebasedatabase.app/')
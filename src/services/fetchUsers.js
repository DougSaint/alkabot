


export const fetchAllUsers = async () => {
    const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
    const data = await fetch(USERS_URL)
    const result = await data.json();
    return result;
};

export const fetchUser = async ( id ) => {
    const USER_URL = `https://jsonplaceholder.typicode.com/users/${id}`
    const data = await fetch(USER_URL);
    const result = data.json();
    return result;
}
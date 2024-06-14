export const url = "https://insylvis-webshop-1670bf22117e.herokuapp.com/api"

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    };

    return headers;
};
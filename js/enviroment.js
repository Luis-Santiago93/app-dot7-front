const isLocal = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

const CONFIG = {
    apiLessons: isLocal
        ? "http://localhost:5001/api/v1.0"         
        : "https://lessons.dot7.com.mx/api/v1.0",

    apiAuth: isLocal
        ? "http://localhost:5000/api/auth"
        : "https://security.dot7.com.mx/api/auth"
};

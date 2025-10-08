const API_URL = "http://localhost:8000/api";

// ---- USER REGISTER ----
export const register = async (userData) => {
    try {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const text = await res.text();
            console.error("Non-JSON response:", text);
            return { success: false, message: "Server returned invalid response" };
        }

        const data = await res.json();

        return data; // Return the data as-is (includes success field from backend)

    } catch (error) {
        console.error("Error while registering:", error);
        return { success: false, message: "Network error or server unreachable" };
    }
};

// ---- USER LOGIN ----
export const login = async (userData) => {
    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const text = await res.text();
            console.error("Non-JSON response:", text);
            return { success: false, message: "Server returned invalid response" };
        }

        const data = await res.json();
        return data; // Return the API response directly (with success and message)

    } catch (error) {
        console.error("Error while logging in:", error);
        return { success: false, message: "Network error or server unreachable" };
    }
};


// ---- SOCIAL LOGIN ----
export const socialLogin = async (provider, accessToken) => {
    try {
        const res = await fetch(`${API_URL}/auth/${provider}/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ access_token: accessToken }),
        });

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const text = await res.text();
            console.error("Non-JSON response:", text);
            return { success: false, message: "Server returned invalid response" };
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Social login error:", error);
        return { success: false, message: "Network error or server unreachable" };
    }
};

// ---- FORGET PASSWORD ----
export const forgotPassword = async (email) => {
    try {
        const res = await fetch(`${API_URL}/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Forgot password error:", error);
        return { success: false, message: "Network error or server unreachable" };
    }
};

// ---- RESET PASSWORD ----
export const resetPassword = async (formData) => {
    try {
        const res = await fetch(`${API_URL}/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Reset password error:", error);
        return { success: false, message: "Network error or server unreachable" };
    }
};

// ---- USER LOGOUT ----
export const logout = async () => {
    const token = localStorage.getItem("auth_token");
    try {
        const res = await fetch(`${API_URL}/logout`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
        });

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const text = await res.text();
            console.error("Non-JSON response:", text);
            return { success: false, message: "Server returned invalid response" };
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Logout error:", error);
        return { success: false, message: "Network error or server unreachable" };
    }
};



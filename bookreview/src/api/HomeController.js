import axios from "axios";

const API_URL = process.env.REACT_APP_UAT_API_ENDPOINT;

export const BookReviewAPI = async () => {
    try {
        const res = await axios.get(API_URL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        if (res.data && res.data.books) {
            return {
                success: true,
                books: res.data.books
            };
        }
        
        return {
            success: false,
            books: Array.isArray(res.data) ? res.data : []
        };
        
    } catch (e) {
        console.error("Error:", e);
        return {
            success: false,
            books: []
        };
    }
};
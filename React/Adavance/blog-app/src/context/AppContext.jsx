import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    // Data fetching
    async function fetchBlogPost(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPage(data.totalPages);
        } catch (err) {
            console.error("Error in fetching data:", err);
            setPage(1);
            setPost([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPost(page);
    }

    useEffect(() => {
        fetchBlogPost();
    }, []);

    const value = {
        post,
        setPost,
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogPost,
        handlePageChange
    };

    // console.log(totalPage);
    
    // Step 2
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

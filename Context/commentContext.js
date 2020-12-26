import React, { createContext, useState } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({children}) => {
    const [commentsList, setCommentList] = useState([]);
    
    return(
        <CommentContext.Provider value={[commentsList, setCommentList]}>
            {children}
        </CommentContext.Provider>
    )
}
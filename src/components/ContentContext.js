import React, { useEffect, useState, createContext } from 'react';
import Projects from './Projects';

// context (shares provider data to components)
export const ContentContext = createContext();

// provider (holds the data for context to share)
export const ContentProvider = (props) => {
    const [content, setContent] = useState();

    useEffect(() => {
        setContent(<Projects />)
    }, [])

    // initial axios call. runs once (dependency array)
    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <ContentContext.Provider value={[content, setContent]}>
            {props.children}
        </ContentContext.Provider>
    )
}
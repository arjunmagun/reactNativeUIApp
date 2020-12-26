import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'

export const PhotoContext = createContext(); 

export function PhotoProvider({ children }) {
    const [photoUri, setPhotoUri] = useState("");
    return (
        <PhotoContext.Provider value={[photoUri, setPhotoUri]}>
            {children}
        </PhotoContext.Provider>
    )
}

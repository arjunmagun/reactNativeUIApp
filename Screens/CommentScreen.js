import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { CommentContext } from '../Context/commentContext';
import { LoremPicsum } from "react-lorem-picsum";

const { width } = Dimensions.get('window')

export default function CommentScreen() {
    const [commentsList, setCommentList] = useContext(CommentContext);
    
    return (
        <View style={styles.container}>
        {commentsList.map((comments, index)=> {
            return (
                <View style={styles.commentContainer}>
                <Text key={index} style={styles.commentText}>{comments}</Text>
                </View>
            )
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    commentContainer: {
        marginVertical: 1,
        width: width,
        height: 70,
        backgroundColor: "#cfd3ce",
    },
    commentText: {
        fontSize: 15,
        marginHorizontal: 5,
        marginVertical: 25,
    }
})
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, Image, Keyboard } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {sendPushNotification} from './Notifications';
import { set } from 'react-native-reanimated';
import { CommentContext } from '../Context/commentContext';


let posts = [
    {
        key: 1,
        imageUrl: "https://images.unsplash.com/photo-1606765244834-9d05ae7f8a6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        totalLikes: 40,
        isLiked: false,
        comments: []
    },
    {
        key: 2,
        imageUrl: "https://images.unsplash.com/photo-1606765252437-c3255afc2493?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        totalLikes: 50,
        isLiked: false
    }
]

export default function HomeScreen({ navigation }) {
    const [isLiked, setIsLiked] = useState(false);
    const [like, setLikes] = useState(0)
    const [comment, setComment] = useState("");
    const [commentsList, setCommentList] = useContext(CommentContext);

    function handleLikes(post){
        post.isLiked= !post.isLiked;
        setIsLiked(post.isLiked)
        {post.isLiked ? setLikes(-1) : setLikes(1)}
        post.totalLikes = post.totalLikes + like
    }


    const handleChange = () => {
        if(comment !== ""){
            setCommentList([...commentsList, comment])
            setComment("");
        }
        console.log(commentsList);
    }
    

    return (
        <ScrollView>
        {posts.map(post=>{
            return (
            <View key={post.key} style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.image}
                    source={{uri: post.imageUrl}}
                />
            </TouchableOpacity>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={() => handleLikes(post)}>
                        {post.isLiked ? 
                        <>
                        <AntDesign name="heart" size={35}/>
                        </>
                        : 
                        <>
                        <AntDesign name="hearto" size={35} />
                        </>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=> navigation.push("Comments")}>
                        <AntDesign name="message1" size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=> console.log("Shared")}>
                        <MaterialCommunityIcons name="share-outline" size={35} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.likeText}>
                    {post.totalLikes} likes
                </Text>
                <View style={styles.commentInput}>
                    <TextInput 
                        placeholder="Comment"
                        onChangeText={text=> setComment(text)}
                        value={comment}
                        onSubmitEditing={handleChange}
                    />
                </View>
            </View>
            )
        })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfd3ce",
        height: 600,
        width: 350,
        borderRadius: 10,
        margin: 20,
    },
    image: {
        width: 300,
        height: 400,
        margin: 25,
        borderRadius: 5,
    },
    btns: {
        marginLeft: 25,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    btn: {
        paddingRight: 5
    },
    commentInput: {
        width: 300,
        height: 40,
        marginLeft: 25,
        backgroundColor: "#eeeeee",
        borderRadius: 20,
        padding: 5,
        marginVertical: 10 
    },
    likeText: {
        fontSize: 15,
        marginHorizontal: 25,
        color: "#222831",
        paddingVertical: 2
    }
})

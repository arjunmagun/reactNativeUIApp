import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions, ImageBackground, Image, Button, Platform } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './ProfileStyles';
import { NotifyMe } from './Notifications';

const { width, height } = Dimensions.get('window')


export default function Profile() {
    const [isFollow, setIsFollow] = useState(false);
    const [followers, setFollowers] = useState(100);

    const handleFollow = () => {
        setIsFollow(!isFollow)
        {isFollow ? setFollowers(followers - 1) : setFollowers(followers + 1)}
    }
    

    const Uri = "https://images.unsplash.com/photo-1606633538914-cf18d8cf26a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80";
    let postUri = "https://picsum.photos/200/300";
    return (
        <ScrollView style={styles.mainContainer}>
        <SafeAreaView style={styles.innermain}>
            <ImageBackground source={{uri: Uri}} style={styles.bgImage} blurRadius={1.5} />
            <Image source={{uri: Uri}} style={styles.profileImg} borderRadius={width/ 4} />
            <View style={styles.profileDetails}>
            <View>
                <View style={styles.name}>
                    <Text style={styles.userName}>Arjun magun</Text>
                </View>
                <Text style={styles.userBio}>This is my bio and i am building this app</Text>
                <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}} >
                    <TouchableOpacity onPress={handleFollow}>
                        <Text style={styles.followBtn} >{isFollow ? "Unfollow" : "Follow" }</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.msgBtn}><AntDesign name="message1" size={40} /></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.followDetails}>
                    <View style={styles.followDetailText}>
                        <Text 
                            style={{...styles.followText, fontSize: 30, fontWeight: "700"}}
                        >
                            70
                        </Text>
                        <Text style={styles.followText}>Following</Text>
                    </View>

                    <View style={styles.followDetailText}>
                        <Text 
                            style={{...styles.followText, fontSize: 30, fontWeight: "700"}}
                        >
                            {followers}
                        </Text>
                        <Text style={styles.followText}>Followers</Text>
                    </View>

                    <View style={{...styles.followDetailText, borderRightWidth: 0}}>
                        <Text 
                            style={{...styles.followText, fontSize: 30, fontWeight: "700"}}
                        >
                            15
                        </Text>
                        <Text style={styles.followText}>Posts</Text>
                    </View>
                </View>
                <Text style={styles.PostText}>Posts</Text>
                <View style={styles.postsContainer}>
                    <Image style={styles.posts} source={{uri: postUri}} />
                    <Image style={styles.posts} source={{uri: postUri}} />
                    <Image style={styles.posts} source={{uri: postUri}} />
                    <Image style={styles.posts} source={{uri: postUri}} />
                </View>
            </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

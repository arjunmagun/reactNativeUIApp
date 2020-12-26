import { StyleSheet,Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    innermain: {
    },
    bgImage: {
        width: width,
        height: height / 5,
        zIndex: -1,
    },
    profileImg: {
        width: width / 2,
        height: height / 4 ,
        position: 'absolute',
        left: width / 4,
        marginTop: 50,
        zIndex: 1
    },
    profileDetails: {
        backgroundColor: "#eeeeee",
        width: width,
        height: height ,
    },
    name: {
        marginTop: height / 8,
        textAlign: 'center',
        alignSelf: 'center'
    },
    userName: {
        fontSize: 30,
        fontWeight: '700'
    },
    userBio: {
        fontSize: 15,
        marginTop: height / 100,
        textAlign: 'center',
        width: width / 1.1,
        alignSelf: 'center',
    },
    followBtn: {
        backgroundColor: "#51adcf",
        width: width / 2,
        height: 45,
        margin: 10,
        borderRadius: 50,
        fontSize: 30,
        padding: 5,
        textAlign: 'center',
        color: '#fbf6f0'
    },
    msgBtn: {
        margin: 10,
    },
    followDetails: {
        margin: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    followDetailText: {
        borderRightColor: "#212121",
        borderRightWidth: 0.5,
        width: 115,
        textAlign: 'center'
    },
    followText: {
        textAlign: 'center',
        opacity: 0.8,
    },
    postsContainer: {
        margin: 20,
        flexDirection: 'row',
        flexWrap: "wrap",
        marginBottom: 150
    },
    PostText: {
        fontSize: 30,
        fontWeight: '700',
        opacity: 0.5,
        marginHorizontal: 20
    },
    posts: {
        height: height / 7,
        width: width / 3.46,
        margin: 2,
    }
})
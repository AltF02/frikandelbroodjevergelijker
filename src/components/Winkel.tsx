import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const profileImg ="https://reactnativemaster.com/wp-content/uploads/2019/11/React-native-master-logo-only.png"

export default class Winkel extends React.Component<WinkelProps, any> {
    winkel_logos: {
        ah: string,
        dirk: string,
        jumbo: string,
        plus: string,
        lidl: string,
        spar: string
    }
    logo: string
    constructor(props: any) {
        super(props);
        this.winkel_logos = {
            ah: require('./../img/1200px-Albert_Heijn_Logo.svg.png'),
            dirk: require('./../img/dirk_van_den_broek.png'),
            jumbo: require('./../img/search-algemeen.png'),
            plus: require('./../img/plus.png'),
            lidl: require('./../img/Lidl_logo.png'),
            spar: require('./../img/cropped-SparIcon.png')
        }
        // @ts-ignore
        this.logo = this.winkel_logos[this.props.winkel]
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.card} onPress={() => alert("Yeet")}>
                    <View style={styles.header}>
                        {/* @ts-ignore */}
                        <Image style={styles.profileImg} source={this.logo} />
                        <Text style={{fontWeight: "bold", fontSize: 18}}>{this.props.winkel.charAt(0).toUpperCase() + this.props.winkel.slice(1)}</Text>
                    </View>
                    <Text style={{color: "gray"}}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
        alignItems: "center",
        //position: "absolute",
        alignSelf: 'center'
    },
    card: {
        height: 150,
        width: "95%",
        minWidth: "95%",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 10,
        padding: 10,
    },
    profileImg: {
      width: 30,
      height: 30,
      borderRadius: 50,
      marginRight: 10,
    },
    header: {
        flexDirection: "row"
    }
})

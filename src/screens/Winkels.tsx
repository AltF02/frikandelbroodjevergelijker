import React from "react";
import {Text, Spinner, View, Content} from "native-base";
import WinkelCard from "../components/WinkelCard";
import {RefreshControl, SafeAreaView, ScrollView} from "react-native";
import Constants from "expo-constants";

export default class Winkels extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            isRefreshing: false
        }

    }

    fetchJSON() {

        fetch('http://192.168.178.17:5000/winkels')
            .then(response => response.json())
            .then((json) => {
                this.setState({
                    data: json.winkels
                })
            })
            .catch((error) => console.error(error))
            .finally(() => this.setState({loading: false}));
    }

    componentDidMount() {
        this.fetchJSON()
    }
    // <Text key={item.winkel}>{item.winkel}, {item.prijs.toFixed(2)}€, {item.gram}g</Text>
    render() {
        return (
            <SafeAreaView>
                <View>
                    {this.state.loading ? <Spinner color="blue"/> : (
                        <View>
                            <ScrollView
                                contentContainerStyle={{marginTop: Constants.statusBarHeight}}
                            >
                                {this.state.data.map(function (item: any) {
                                    return <WinkelCard winkel={item.winkel} key={item.winkel} text={item.prijs.toFixed(2) + '€,' + item.gram + 'g'}/>

                                })
                                }
                            </ScrollView>
                        </View>

                    )}
                </View>
            </SafeAreaView>
        )
    }
}

import React from "react";
import {Text, Spinner, View, Content} from "native-base";
import Winkel from "../components/Winkel";
import {ScrollView} from "react-native";

export default class Winkels extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }

    }
    componentDidMount() {
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
    // <Text key={item.winkel}>{item.winkel}, {item.prijs.toFixed(2)}€, {item.gram}g</Text>
    render() {
        return (
            <View>
                <View>
                    {this.state.loading ? <Spinner color="blue"/> : (
                        <View>
                            <ScrollView>
                                {this.state.data.map(function (item: any) {
                                    return <Winkel winkel={item.winkel} key={item.winkel} text={item.prijs.toFixed(2) + '€,' + item.gram + 'g'}/>

                                })
                                }
                            </ScrollView>
                        </View>

                    )}
                </View>
            </View>
        )
    }
}

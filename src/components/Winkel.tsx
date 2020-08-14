import React from "react";
import { ActivityIndicator, View, FlatList, Text} from "react-native";

export default class Winkel extends React.Component<any, any> {
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
    render() {
        return (
            <View style={{ flex: 1, padding: 50 }}>
                {this.state.loading ? <ActivityIndicator/> : (
                    <View>
                        <Text style={{paddingTop: 30}}>{JSON.stringify(this.state.data)}</Text>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item) => item.winkel}
                            renderItem={({ item }) => (
                                <Text>{item.winkel}, {item.prijs}, {item.gram}</Text>
                            )}
                        />
                    </View>

                )}
                <Text>{this.state.loading.toString()}</Text>
            </View>
        )
    }
}
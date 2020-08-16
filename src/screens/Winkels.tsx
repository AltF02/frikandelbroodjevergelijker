import React from "react";
import { Text, Spinner, View } from "native-base";

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
    render() {
        return (
            <View style={{ flex: 1, padding: 50 }}>
                {this.state.loading ? <Spinner color="blue"/> : (
                    <View style={{padding: 30}}>
                        {this.state.data.map(function (item: any) {
                                return <Text key={item.winkel}>{item.winkel}, {item.prijs.toFixed(2)}€, {item.gram}g</Text>
                            })
                        }
                    </View>

                )}
            </View>
        )
    }
}

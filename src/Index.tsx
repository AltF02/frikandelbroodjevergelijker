import * as Font from 'expo-font'
import { AppLoading } from "expo";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Winkels from "./screens/Winkels";
import Bonus from "./screens/Bonus";
import Footer from "./components/Footer";

const Stack = createStackNavigator();
export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ready: false
        }

    }

    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({ready: true})
    }

    render() {
        if (!this.state.ready) {
          return <AppLoading />;
        }
        return (
            <NavigationContainer>
                <Footer/>
            </NavigationContainer>
        );
    }
}

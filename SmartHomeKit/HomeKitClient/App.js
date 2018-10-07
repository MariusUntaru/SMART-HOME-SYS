import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Button, ButtonGroup, Slider } from 'react-native-elements'; // 0.17.0
import { ColorWheel } from 'react-native-color-wheel';


import "@expo/vector-icons"; // 5.2.0

export default class App extends React.Component {
  state = {
    index: 0,
    value: 100
  }
  
  updateIndex = (index) => {
    this.setState({index})
  }
  
  render() {
    const turnOnButton = () => 
      <Button
        large
        style={{alignSelf:'stretch'}}
        backgroundColor= 'limegreen'
        icon={{name: 'lightbulb-outline'}}
        title='Turn on' />

    const turnOffButton = () => 
      <Button
        large
        backgroundColor= 'red'
        icon={{name: 'highlight-off'}}
        title='Turn off' />


    const buttons = [{element: turnOnButton}, {element: turnOffButton}]
    return (
      <View style={styles.container}>
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.state.index}
        selectedBackgroundColor={buttons[this.selectedIndex]}
        buttons = {buttons} />
    
      <Button
        large
        style={{alignSelf:'stretch'}}
        backgroundColor= 'white'
        color='black'
        icon={{name: 'lightbulb-outline', color: 'black'}}
        title='White' />
  <Button
        large
        style={{alignSelf:'stretch'}}
        backgroundColor= 'red'
        icon={{name: 'lightbulb-outline'}}
        title='Red' />
  <Button
        large
        style={{alignSelf:'stretch'}}
        backgroundColor= 'limegreen'
        icon={{name: 'lightbulb-outline'}}
        title='Green' />
  <Button
        large
        style={{alignSelf:'stretch'}}
        backgroundColor= 'blue'
        icon={{name: 'lightbulb-outline'}}
        title='Blue' />

        <Slider
          style={{marginHorizontal: 30}}
          minimumValue={1}
          maximumValue={100}
          step={1}
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text style={{textAlign:'center'}}>Brightness: {this.state.value}</Text>

        <ColorWheel
          initialColor="#ffffff"
          onColorChange={color => console.log({color})}
          style={{ marginLeft: Dimensions.get('window').width / 2 - 100, padding: 0, height: 200, width: 200 }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',
  },
});
import React, { Component } from 'react';
import { Image, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import { Container, Content, Text, Button, Icon, Item, Input, View } from 'native-base';

import styles from './styles';
import commonColor from '../../../native-base-theme/variables/commonColor';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0,
      },
      username: '',
      email: '',
      password: ''
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
  }

  onRegister() {
    console.log("In register");
    fetch('https://fb857cd0.ngrok.io/register', {
    // fetch('https://polar-forest-14512.herokuapp.com/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
      * make sure to check for responseJson.success! */
      if(responseJson.success){
        console.log("Register success")
        Actions.login();
      }
    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log('Error in register', err);
    });
  }

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={commonColor.statusBarColor}
          barStyle="light-content"
        />
        <Image source={require('../../../images/glow2.png')} style={styles.background} >
          <Content padder>
            <Text style={styles.signupHeader}>
                                    CREATE ACCOUNT
                                </Text>
            <View style={styles.signupContainer}>
              <Item rounded style={styles.inputGrp}>
                <Icon name="person" />
                <Input
                  placeholder="Username" style={styles.input}
                  placeholderTextColor="#FFF"
                  onChangeText={ (username) => this.setState({ username: username }) }
                />
              </Item>

              <Item rounded style={styles.inputGrp}>
                <Icon name="mail-open" />
                <Input
                  placeholder="Email" style={styles.input}
                  placeholderTextColor="#FFF"
                  onChangeText={ (email) => this.setState({ email: email }) }
                />
              </Item>

              <Item rounded style={styles.inputGrp}>
                <Icon name="unlock" />
                <Input
                  placeholder="Password" secureTextEntry style={styles.input}
                  placeholderTextColor="#FFF"
                  onChangeText={ (password) => this.setState({ password: password }) }
                />
              </Item>

              <Button
                rounded bordered block
                // onPress={() => Actions.pop()}
                onPress={ () => {this.onRegister()} }
                style={styles.signupBtn}
              >
                <Text style={{ color: '#FFF' }}>Continue</Text>
              </Button>

              <Button block transparent style={{ marginTop: 10 }}>
                <Text style={styles.termsText}>Terms & Conditions</Text>
              </Button>
            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

export default connect()(SignUp);

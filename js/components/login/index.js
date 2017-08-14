import React, { Component } from 'react';
import { Image, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Item, Input, Button, Icon, View, Left, Right } from 'native-base';

import styles from './styles';
import commonColor from '../../../native-base-theme/variables/commonColor';

const bg = require('../../../images/Landing.png');
const logo = require('../../../images/LifeFlower.png');

class Login extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
  }

  onLogin() {
    console.log("In login");
    // fetch('https://localhost:3000/login', {
    fetch('https://polar-forest-14512.herokuapp.com/login', {
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
      // console.log(responseJson)
      if(responseJson.success) {
        console.log("Login success");
        Actions.walkthrough({ username: this.state.username, password: this.state.password })
      }
      else {
        console.log("Login failed");
      }
    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log('Error in login', err);
    });
  }

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={commonColor.statusBarColor}
          barStyle="light-content"
        />
        <Content scrollEnabled={true} bounces={false}>
          <Image source={bg} style={styles.background} >
            <Image source={logo} style={[Platform.OS === 'android' ? styles.aShadow : styles.iosShadow, {'opacity': 0}]} />

            <View style={styles.bg}>
              <Item rounded style={styles.inputGrp}>
                <Icon name="person" />
                <Input
                  placeholder="Username"
                  onChangeText={username => this.setState({ username })}
                  placeholderTextColor="#000000"
                  style={styles.input}
                />
              </Item>

              <Item rounded style={styles.inputGrp}>
                <Icon name="unlock" />
                <Input
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#000000"
                  onChangeText={password => this.setState({ password })}
                  style={styles.input}
                />
              </Item>

              <Button
                rounded primary block large
                style={styles.loginBtn}
                // onPress={() => Actions.walkthrough({ username: this.state.username, password: this.state.password })}
                onPress={ () => {this.onLogin()} }
              >
                <Text style={Platform.OS === 'android' ? { fontSize: 16, textAlign: 'center', top: -5 } : { fontSize: 16, fontWeight: '900' }}>Get Started</Text>
              </Button>

              <View style={styles.otherLinksContainer}>
                <Left>
                  <Button transparent style={{ alignSelf: 'flex-start' }} onPress={() => Actions.signUp()}>
                    <Text style={styles.helpBtns}>
                          Create Account
                      </Text>
                  </Button>
                </Left>
                <Right>
                  <Button transparent style={{ alignSelf: 'flex-end' }} onPress={() => Actions.needhelp()}>
                    <Text style={styles.helpBtns}>
                          Need Help?
                      </Text>
                  </Button>
                </Right>
              </View>
            </View>

          </Image>

        </Content>
      </Container>
    );
  }
}


function bindActions(dispatch) {
  return {
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);

import React, { Component } from 'react';
import { Image, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import { Container, Content, Text, Button, Icon, Item, Input, View, Header, Form, } from 'native-base';

import styles from './styles';
import commonColor from '../../../native-base-theme/variables/commonColor';

class NewProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0,
      },
      name: '',
      description: ''
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
  }

  onNewProject() {
    console.log("In onNewProject");

    if(this.state.name) {
      fetch('https://0a4f6e79.ngrok.io/project/new', {
      // fetch('https://polar-forest-14512.herokuapp.com/project/new', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          description: this.state.description,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
        /* do something with responseJson and go back to the Login view but
        * make sure to check for responseJson.success! */
        if(responseJson.success){
          Actions.profile()
        }
      })
      .catch((err) => {
        /* do something if there was an error with fetching */
        console.log('Error in newProject', err);
      });
    }

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
                                    New Project
                                </Text>
            <View style={styles.signupContainer}>


      <Content>
        <Form>
          <Item>
            <Input
              placeholder="Name"
              onChangeText={ (name) => this.setState({ name: name }) }
            />
          </Item>
          <Item last>
            <Input
              placeholder="Description"
              onChangeText={ (description) => this.setState({ description: description }) }
            />
          </Item>
          <Item last>
            <Input placeholder="Add Cover Photo" />
          </Item>
          <Item last>
            <Input placeholder="Add Content" />
          </Item>
        </Form>
      </Content>

      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        // onPress={() => Actions.story()}
        onPress={() => this.onNewProject()}
      >
          <Text> Create Project </Text>
      </TouchableOpacity>

            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

export default connect()(NewProject);

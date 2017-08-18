import React, { Component } from 'react';
import { Image, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import { Container, Content, Text, Button, Icon, Item, Input, View, Header, Form, Picker} from 'native-base';

import styles from './styles';
import commonColor from '../../../native-base-theme/variables/commonColor';

const PickerItem = Picker.Item

class SearchCollab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0,
      },
      contributor: ''
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
  }

  onNewCollaborator() {
    console.log(this.state.contributor, this.props.project);
    fetch('https://7906d89c.ngrok.io/add_contributor', {
      // fetch('https://polar-forest-14512.herokuapp.com/project/new', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contributor: this.state.contributor,
        project: this.props.project,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("responseJson in searchCollab", responseJson);
      /* do something with responseJson and go back to the Login view but
      * make sure to check for responseJson.success! */
      if(responseJson.success){
        Actions.story({project: responseJson.project2})
      }
    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log('Error in searchCollab', err);
    });
  }

  onValueChange(value: string) {
   this.setState({
     selected1: value
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
          <Content >
            <Text style={styles.signupHeader}>Add Collaborator</Text>
            <View style={styles.signupContainer}>


      <Content>
        <Form>
          <Item last style={styles.itemContainer} >
            <Icon name='ios-search' />
            <Input
              placeholder="Add Collaborator"
              onChangeText={ (contributor) => this.setState({ contributor: contributor }) }
              style={{color: '#FFF'}}
            />
          </Item>
        </Form>
      </Content>

      <TouchableOpacity
        style={styles.createProj}
        // onPress={() => Actions.story()}
        onPress={() => this.onNewCollaborator()}
      >
          <Text> Submit </Text>
      </TouchableOpacity>

            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

export default connect()(SearchCollab);

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
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
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
            <Input placeholder="Name" />
          </Item>
          <Item last>
            <Input placeholder="Description" />
          </Item>
          <Item last>
            <Input placeholder="Add Cover Photo" />
          </Item>
          <Item last>
            <Input placeholder="Add Content" />
          </Item>
        </Form>
      </Content>

      <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.story()}>
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

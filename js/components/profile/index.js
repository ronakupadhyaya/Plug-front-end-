

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Thumbnail, Icon, ActionSheet, Button } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';
import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const images = [
  require('../../../images/NewsIcons/1.jpg'),
  require('../../../images/NewsIcons/2.jpg'),
  require('../../../images/NewsIcons/3.jpg'),
  require('../../../images/NewsIcons/4.jpg'),
  require('../../../images/NewsIcons/5.jpg'),
  require('../../../images/NewsIcons/6.jpg'),
  require('../../../images/NewsIcons/7.jpg'),
  require('../../../images/NewsIcons/8.jpg'),
  require('../../../images/NewsIcons/9.jpg'),
  require('../../../images/NewsIcons/10.jpg'),
  require('../../../images/NewsIcons/11.jpg'),
  require('../../../images/NewsIcons/12.jpg'),
]

var PROFILEBUTTONS = [
  { text: "Upload Cover Photo", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Change Description", icon: "analytics", iconColor: "#f42ced" },
  { text: "Edit Social Media Handles", icon: "analytics", iconColor: "#f42ced" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];

var CANCEL_INDEX = 4;


class Profile extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentWillMount() {

    // fetch('https://polar-forest-14512.herokuapp.com/projects')
    fetch('https://0a4f6e79.ngrok.io/projects')
    .then((responseJson) => {
      return responseJson.json();
    })
    .then((responseJson) => {
      console.log("componentDidMount", responseJson);
      this.setState({
        projects: responseJson.projects
      });
    })
    .catch((err) => {
      console.log('Error in profile', err);
    });

  }

  render() {
    console.log("In render", this.state);
    return (
      <Container>
        <Image source={require('../../../images/glow2.png')} style={styles.container} >
          <HeaderContent />

          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.profileInfoContainer}>
              <TouchableOpacity style={{ alignSelf: 'center' }}>
                <Thumbnail source={require('../../../images/contacts/theWest.png')} style={styles.profilePic}> 
                <Button style={{ alignSelf: 'center', backgroundColor: 'transparent', flex: 1, width: 100 }}
                    onPress={() =>
                      ActionSheet.show(
              {
                options: PROFILEBUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                title: 'Testing ActionSheet',
              },
              buttonIndex => {
                this.setState({ clicked: PROFILEBUTTONS[buttonIndex] });
              }
            )}
                >
            {/* <Icon name="ios-settings-outline" /> */}
          </Button>
                </Thumbnail>
              </TouchableOpacity>
              <View style={styles.profileInfo}>
                <TouchableOpacity>
                  <Text style={styles.profileUser}>Jilani Ghafur</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text note style={styles.profileUserInfo}>Finesse Master</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity>
        
                </TouchableOpacity> */}

                <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }} onPress={() => Actions.newProject()}>


                 <Icon name="ios-add" />

                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.linkTabs}>
              <Grid>
                <Col>
                  {/* <TouchableOpacity style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>13</Text>
                    <Text note style={styles.linkTabs_tabName}>Comments</Text>
                  </TouchableOpacity> */}
                </Col>
                <Col>
                  {/* <TouchableOpacity style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>12</Text>
                    <Text note style={styles.linkTabs_tabName}>Channels</Text>
                  </TouchableOpacity> */}
                </Col>
                <Col>
                  {/* <TouchableOpacity style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>52</Text>
                    <Text note style={styles.linkTabs_tabName}>Bookmarks</Text>
                  </TouchableOpacity> */}
                </Col>
              </Grid>
            </View>
            <View style={{ backgroundColor: '#fff' }}>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.home()}>
                <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.newsImage} />
                <View style={styles.newsContent}>
                  <Text numberOfLines={2} style={styles.newsHeader}>
                                        As DJ Khaled once said, don't ever play yourself
                                    </Text>
                  <Grid style={{ marginTop: 25 }}>
                    <Col>
                      <TouchableOpacity>
                        <Text style={styles.newsLink}>CDC</Text>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity style={styles.newsTypeView}>
                        <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                      </TouchableOpacity>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.home()}>
                <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.newsImage} />
                <View style={styles.newsContent}>
                  <Text numberOfLines={2} style={styles.newsHeader}>
                                        This will be dope shit bro
                                    </Text>
                  <Grid style={{ marginTop: 25 }}>
                    <Col>
                      <TouchableOpacity>
                        <Text style={styles.newsLink}>SPACE.com</Text>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity style={styles.newsTypeView}>
                        <Text style={styles.newsTypeText}>SCIENCE</Text>
                      </TouchableOpacity>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.home()}>
                <Image source={require('../../../images/NewsIcons/4.jpg')} style={styles.newsImage} />
                <View style={styles.newsContent}>
                  <Text numberOfLines={2} style={styles.newsHeader}>Flames bruh</Text>
                  <Grid style={{ marginTop: 25 }}>
                    <Col>
                      <TouchableOpacity>
                        <Text style={styles.newsLink}>SKY.com</Text>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity style={styles.newsTypeView}>
                        <Text style={styles.newsTypeText}>WORLD</Text>
                      </TouchableOpacity>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.home()}>
                <Image source={require('../../../images/NewsIcons/10.jpg')} style={styles.newsImage} />
                <View style={styles.newsContent}>
                  <Text numberOfLines={2} style={styles.newsHeader}>
                                        Trust me Danny
                                    </Text>
                  <Grid style={{ marginTop: 25 }}>
                    <Col>
                      <TouchableOpacity>
                        <Text style={styles.newsLink}>ANI.com</Text>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity style={styles.newsTypeView}>
                        <Text style={styles.newsTypeText}>ANIMATION</Text>
                      </TouchableOpacity>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.home()}>
                <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.newsImage} />
                <View style={styles.newsContent}>
                  <Text numberOfLines={2} style={styles.newsHeader}>
                                     Front end is the wave
                                    </Text>
                  <Grid style={{ marginTop: 25 }}>
                    <Col>
                      <TouchableOpacity>
                        <Text style={styles.newsLink}>STYLE.com</Text>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity style={styles.newsTypeView}>
                        <Text style={styles.newsTypeText}>FASHION</Text>
                      </TouchableOpacity>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.home()}>
                <Image source={require('../../../images/NewsIcons/12.jpg')} style={styles.newsImage} />
                <View style={styles.newsContent}>
                  <Text numberOfLines={2} style={styles.newsHeader}>I dont fux with lames</Text>
                  <Grid style={{ marginTop: 25 }}>
                    <Col>
                      <TouchableOpacity>
                        <Text style={styles.newsLink}>ART.com</Text>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity style={styles.newsTypeView}>
                        <Text style={styles.newsTypeText}>ART</Text>
                      </TouchableOpacity>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              {this.state.projects.map((project, i) => {
                console.log("Project", project, i);
                var intImageUrl = parseInt(project.channel.imageUrl);
                console.log("intImageUrl", intImageUrl, typeof(intImageUrl));
                return (<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.story({project: project})}>
                  {/* <Image source={require('../../../images/NewsIcons/12.jpg')} style={styles.newsImage} /> */}
                  <Image source={images[intImageUrl - 1]} style={styles.newsImage} />
                  <View style={styles.newsContent}>
                    <Text numberOfLines={2} style={styles.newsHeader}>{project.name}</Text>
                    <Grid style={{ marginTop: 25 }}>
                      <Col>
                        <TouchableOpacity>
                          {/* <Text style={styles.newsLink}>ART.com</Text> */}
                          <Text style={styles.newsLink}>{project.channel.category}.com</Text>
                        </TouchableOpacity>
                      </Col>
                      <Col>
                        <TouchableOpacity style={styles.newsTypeView}>
                          {/* <Text style={styles.newsTypeText}>ART</Text> */}
                          <Text style={styles.newsTypeText}>{project.channel.category}</Text>
                        </TouchableOpacity>
                      </Col>
                    </Grid>
                  </View>
                </TouchableOpacity>
                )
              })
            }
            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Profile);

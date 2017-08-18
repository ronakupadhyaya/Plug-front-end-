import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, Slider, Dimensions, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Body, ActionSheet} from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import Lightbox from 'react-native-lightbox';
import Modal from 'react-native-simple-modal';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';
import { ImagePicker } from 'expo';

import theme from '../../themes/base-theme';
import styles from './styles';

var EDITPROJECTBUTTONS = [
  { text: "Change Project Photo", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Change Description", icon: "analytics", iconColor: "#f42ced" },
  { text: "Add Collaborators", icon: "analytics", iconColor: "#f42ced" },
  { text: "Edit Content", icon: "analytics", iconColor: "#f42ced" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 4;
var CANCEL_INDEX = 5;


const deviceWidth = Dimensions.get('window').width;
const primary = require('../../themes/variable').brandPrimary;

const renderPagination = (index, total, context) => (
  <View style={{ position: 'absolute', bottom: -25, right: 10 }}>
    <Text>
      <Text style={{ color: '#007aff', fontSize: 20 }}>
        {index + 1}
      </Text>
                /{total}
    </Text>
  </View>
    );

class Story extends Component {


  constructor(props) {
    super(props);
    this.state = {
      animationType: 'slideInDown',
      open: false,
      value: 0,
      image: null,
      modalVisible: false,
      important: []
    };
  }

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  componentWillMount() {
    console.log("Story");
    if(this.props.project) {
        console.log("componentWillMount", this.props.project);
    }

    fetch('https://4b11eba2.ngrok.io/contributors', {
      // fetch('https://polar-forest-14512.herokuapp.com/project/new', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        project: this.props.project,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("responseJson in story", responseJson);
      /* do something with responseJson and go back to the Login view but
      * make sure to check for responseJson.success! */
      if(responseJson.success){
        console.log(responseJson);

      }
    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log('Error in story', err);
    });


  }

  modalO() {
    this.setState({ open: true });
  }

  modalX() {
    this.setState({ open: false });
  }

  _pickImage = async () => {
   let result = await ImagePicker.launchImageLibraryAsync({
     allowsEditing: true,
     aspect: [4, 3],
   });

   console.log(result);

   if (!result.cancelled) {
     this.setState({ image: result.uri });

   }
 };

 setModalVisible(visible) {
   this.setState({modalVisible: visible});
 }

  render() {
    let { image } = this.state;
    console.log("Image", image);
    return (

      <Container style={{ backgroundColor: '#fff' }}>


        <Image source={require('../../../images/glow2.png')} style={styles.container} >
          <Header>
            <Body style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon active name="arrow-back" style={styles.headerIcons} />
              </Button>
              <Button transparent onPress={() => Actions.comments()}>
                <Icon name="chatboxes" style={styles.headerIcons} />
              </Button>
              <Button transparent onPress={() => this.modalO()}>
                <Text style={styles.headerTextIcon}>Aa</Text>
              </Button>
              <Button transparent>
                <Icon name="bookmarks" style={styles.headerIcons} />
              </Button>
              <Button transparent>
                <Icon name="download" style={styles.headerIcons} />
              </Button>
            </Body>
          </Header>

          <Content showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
              <View >
                {/* <Image source={require('../../../images/NewsIcons/5.jpg')} style={styles.newsPoster}> */}
                {/* {!image &&
                <Image source={require('../../../images/NewsIcons/5.jpg')} style={styles.newsPoster} />}
                {image &&
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} style={styles.newsPoster} />} */}
                {image ? (
                  <Image source={{ uri: image }}  style={styles.newsPoster} >
                    <TouchableOpacity>
                      <View style={styles.newsPosterContent}>
                        <Text numberOfLines={2} style={styles.newsPosterHeader}>
                          Flat App Theme
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Image>
                ) : (
                  <Image source={require('../../../images/NewsIcons/5.jpg')} style={styles.newsPoster} >
                  <TouchableOpacity>
                    <View style={styles.newsPosterContent}>
                      <Text numberOfLines={2} style={styles.newsPosterHeader}>
                        Flat App Theme
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Image>
              )}
                  {/* <TouchableOpacity>
                    <View style={styles.newsPosterContent}>
                      <Text numberOfLines={2} style={styles.newsPosterHeader}>
                          Flat App Theme
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Image> */}
              </View>
                <View style={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity>
                  <Button
                    transparent
                    onPress={() =>
                ActionSheet.show(
                {
                options: EDITPROJECTBUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: 'Testing ActionSheet',
                },
                buttonIndex => {
                  if(buttonIndex === 0){
                    this._pickImage();
                  }
                  else if(buttonIndex === 2){
                    Actions.searchCollab({project: this.props.project});
                  }
                this.setState({ clicked: EDITPROJECTBUTTONS[buttonIndex] });
                }
                )}
                >
                <Icon name="ios-add" />
                </Button>
                </TouchableOpacity>
                <View style={styles.newsContent}>
                    <Col>
                      <TouchableOpacity style={styles.newsTypeView}>
                        <Text style={styles.newsTypeText}>PHOTOSHOOT</Text>
                      </TouchableOpacity>
                    </Col>
                  {/* </Grid> */}
                   <Text>
                    Santa Monica
                  </Text>
                  <Text style={styles.newsHeader}>
                    A bright shoot in SM. Show with a Sony A7 w/ a 50mm 1.8 lens
                  </Text>
                </View>

                {/* <View style={{ padding: 20 }}> */}
                  <View style={styles.newsCommentContainer}>
                    <Text style={styles.newsComment}>
                      Ronak - stylist
                    </Text>
                    <Text style={styles.newsComment}>
                      Beyonce - Model
                    </Text>
                    <Text style={styles.newsComment}>
                      Jilando - photographer
                    </Text>
                    {this.}
                  </View>
                  {/* <Text style={styles.newsHeader}>
                    ok
                  </Text> */}
                  {/* <View style={{ paddingBottom: 20 }}>
                    <Text style={styles.newsHeader}>
                     ok
                  </Text>
                  </View> */}
                  {/* <View style={{ paddingBottom: 20, paddingTop: 10 }}>
                    <Text style={styles.newsHeader}>
                        got it
                    </Text>
                  </View> */}
                {/* </View> */}

                <View style={styles.wrapper}>
                  <Swiper
                    height={230}
                    width={deviceWidth + 5}
                    loop
                    dot={<View style={styles.swiperDot} />}
                    activeDot={<View
                      style={styles.swiperActiveDot}
                      showsButtons
                    />}
                  >
                    <View style={styles.slide}>
                      <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/1.jpg')} />
                    </View>
                    <View style={styles.slide}>
                      <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/3.jpg')} />
                    </View>
                    <View style={styles.slide}>
                      <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/4.jpg')} />
                    </View>
                    <View style={styles.slide}>
                      <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/5.jpg')} />
                    </View>
                  </Swiper>
                </View>

                <View style={{ alignSelf: 'center' }}>
                  <Button transparent iconRight onPress={() => Actions.popTo('home')} textStyle={{ color: '#222', fontWeight: '700' }}>
                    <Text>NEXT STORY</Text>
                    <Icon name="ios-arrow-forward" style={styles.forwardBtn} />
                  </Button>
                </View>
              </View>
            </View>
          </Content>

          <Modal
            offset={this.state.offset}
            open={this.state.open}
            modalDidOpen={() => console.log('modal did open')}
            modalDidClose={() => this.setState({ open: false })}
            onRequestClose={() => this.setState({ open: false })}
            style={styles.modal}
          >

            <View>
              <View style={styles.modalContentBox}>
                <Grid style={{ flex: 10, padding: 20 }}>
                  <Col style={{ paddingLeft: 30 }}>
                    <Button transparent style={styles.dayButton}>
                      <Icon
                        name="ios-sunny-outline"
                        style={{ color: primary, fontSize: 26 }}
                      />
                    </Button>
                  </Col>
                  <Col style={{ paddingLeft: 80 }}>
                    <Button transparent style={styles.nightButton}>
                      <Icon
                        name="ios-moon-outline"
                        style={{ fontSize: 26, color: '#fff' }}
                      />
                    </Button>
                  </Col>
                </Grid>
              </View>
              <View style={styles.modalContentBox}>
                <Grid style={{ padding: 20, paddingBottom: 15, justifyContent: 'center' }}>
                  <Col>
                    <Text
                      style={Platform.OS === 'android' ?
                                                { fontSize: 12, marginTop: 8 } :
                                                { fontSize: 12, marginTop: 8 }}
                    >
                                            CHOOSE TYPESPACE
                                        </Text>
                  </Col>
                  <Col>
                    <Button transparent iconRight style={{ marginTop: -5 }}>
                      <Text style={{ color: '#FFF' }}>SANS SERIF</Text>
                      <Icon name="ios-arrow-forward" style={{ fontSize: 28 }} />
                    </Button>
                  </Col>
                </Grid>
              </View>
              <View>
                <Grid style={{ flexDirection: 'row', paddingTop: 20 }}>
                  <Col>
                    <Text style={styles.modalSmallText}>A</Text>
                  </Col>
                  <Col style={{ alignSelf: 'flex-end' }}>
                    <Text style={styles.modalLargeText}>A</Text>
                  </Col>
                </Grid>
                <Slider
                  {...this.props} minimumTrackTintColor="#fff"
                  onValueChange={value => this.setState({ value })}
                />
              </View>
            </View>
          </Modal>
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

export default connect(mapStateToProps, bindAction)(Story);

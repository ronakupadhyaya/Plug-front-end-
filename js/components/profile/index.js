

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Thumbnail } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';
import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

class Profile extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container>
        <Image source={require('../../../images/glow2.png')} style={styles.container} >
          <HeaderContent />

          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.profileInfoContainer}>
              <TouchableOpacity style={{ alignSelf: 'center' }}>
                <Thumbnail source={require('../../../images/contacts/theWest.png')} style={styles.profilePic} />
              </TouchableOpacity>
              <View style={styles.profileInfo}>
                <TouchableOpacity>
                  <Text style={styles.profileUser}>Jilani Ghafur</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text note style={styles.profileUserInfo}>Finesse Master</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.linkTabs}>
              <Grid>
                <Col>
                  <TouchableOpacity style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>13</Text>
                    <Text note style={styles.linkTabs_tabName}>Comments</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>12</Text>
                    <Text note style={styles.linkTabs_tabName}>Channels</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>52</Text>
                    <Text note style={styles.linkTabs_tabName}>Bookmarks</Text>
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
            <View style={{ backgroundColor: '#fff' }}>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.home()}>
                <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.newsImage} />
                <View style={styles.newsContent}>
                  <Text numberOfLines={2} style={styles.newsHeader}>
                                        As DK Khaled once said, don't you ever play yourself
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

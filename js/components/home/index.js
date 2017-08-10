
import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Card, Left, Body, Right } from 'native-base';

import { Grid, Col } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';


import styles from './styles';

const deviceWidth = Dimensions.get('window').width;
const headerLogo = require('../../../images/WhiteFlower.png');


class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header>
          <Left>
            <Button
              transparent
              style={styles.btnHeader}
              onPress={() => Actions.login({ type: ActionConst.RESET  })}
            >
              <Icon active name="power" />
            </Button>
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right>
            <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>

        <Content showsVerticalScrollIndicator={false}>
          <View>
            <View>
              <Swiper
                height={330}
                width={deviceWidth + 3}
                loop
                dot={<View style={styles.swiperDot} />}
                activeDot={<View
                  style={styles.swiperActiveDot}
                  showsButtons
                />}
              >
                <TouchableOpacity activeOpacity={1} onPress={() => Actions.story()} style={styles.slide}>
                  <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/1.jpg')} >
                    <View style={styles.swiperTextContent} >
                      <Text numberOfLines={2} style={styles.newsPosterHeader}>
                         This will be dope shit bro
                        </Text>
                      <Grid style={styles.swiperContentBox}>
                        <Col style={{ flexDirection: 'row' }}>
                          <TouchableOpacity>
                            <Text style={styles.newsPosterLink}>SPACE.com</Text>
                          </TouchableOpacity>
                          <Icon name="ios-time-outline" style={styles.headertimeIcon} />
                          <Text style={styles.newsPosterLink}>20m ago</Text>
                        </Col>
                        <Col>
                          <TouchableOpacity style={styles.newsPosterTypeView}>
                            <Text style={styles.newsPosterTypeText}>SCIENCE</Text>
                          </TouchableOpacity>
                        </Col>
                      </Grid>
                    </View>
                  </Image>
                </TouchableOpacity>

                <TouchableOpacity  activeOpacity={1} onPress={() => Actions.story()} style={styles.slide}>
                  <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/3.jpg')}>
                    <View style={styles.swiperTextContent}>
                      <Text numberOfLines={2} style={styles.newsPosterHeader}>
                            Plus more dope shit
                        </Text>
                      <Grid style={styles.swiperContentBox}>
                        <Col style={{ flexDirection: 'row' }}>
                          <TouchableOpacity>
                            <Text style={styles.newsPosterLink}>CDC</Text>
                          </TouchableOpacity>
                          <Icon name="ios-time-outline" style={styles.headertimeIcon} />
                          <Text style={styles.newsPosterLink}>2hr ago</Text>
                        </Col>
                        <Col>
                          <TouchableOpacity style={styles.newsPosterTypeView}>
                            <Text style={styles.newsPosterTypeText}>ENVIRONMENT</Text>
                          </TouchableOpacity>
                        </Col>
                      </Grid>
                    </View>
                  </Image>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => Actions.story()} style={styles.slide}>
                  <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/4.jpg')}>
                    <View style={styles.swiperTextContent}>
                      <Text numberOfLines={2} style={styles.newsPosterHeader}>
                            And then even more
                        </Text>
                      <Grid style={styles.swiperContentBox}>
                        <Col style={{ flexDirection: 'row' }}>
                          <TouchableOpacity>
                            <Text style={styles.newsPosterLink}>SKY.com</Text>
                          </TouchableOpacity>
                          <Icon name="ios-time-outline" style={styles.headertimeIcon} />
                          <Text style={styles.newsPosterLink}>1day ago</Text>
                        </Col>
                        <Col>
                          <TouchableOpacity style={styles.newsPosterTypeView}>
                            <Text style={styles.newsPosterTypeText}>WORLD</Text>
                          </TouchableOpacity>
                        </Col>
                      </Grid>
                    </View>
                  </Image>
                </TouchableOpacity>
              </Swiper>
            </View>
          </View>

          <Card style={{ backgroundColor: '#fff', marginTop: 0, marginRight: 0 }}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.story()}>
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                      FIRE CONTENT
                  </Text>
                <Grid style={styles.swiperContentBox}>
                  <Col style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>CDC</Text>
                    </TouchableOpacity>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>1h ago</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.story()}>
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                      HEAT, FLAMES, DAB
                  </Text>
                <Grid style={styles.swiperContentBox}>
                  <Col style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>SPACE.com</Text>
                    </TouchableOpacity>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>5h ago</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>SCIENCE</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.story()}>
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                     twice as dank as before
                  </Text>
                <Grid style={styles.swiperContentBox}>
                  <Col style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>SKY.com</Text>
                    </TouchableOpacity>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>2days ago</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>WORLD</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.story()}>
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                      fam
                  </Text>
                <Grid style={styles.swiperContentBox}>
                  <Col style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>ESPN</Text>
                    </TouchableOpacity>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>12days ago</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>SPORTS</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.story()}>
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                      Like look, it's flame get used to it
                  </Text>
                <Grid style={styles.swiperContentBox}>
                  <Col style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>ART.com</Text>
                    </TouchableOpacity>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>23days ago</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>ART</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Actions.story()}>
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                     don't you ever get it twisted
                  </Text>
                <Grid style={styles.swiperContentBox}>
                  <Col style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>Money.com</Text>
                    </TouchableOpacity>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>2months ago</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>FINANCE</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
          </Card>
        </Content>
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

export default connect(mapStateToProps, bindAction)(Home);

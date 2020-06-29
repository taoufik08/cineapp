import 'react-native-gesture-handler';
import React from 'react'
import {StyleSheet, View, Image,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as RootNavigation from '../Navigation/RootNavigation.js';
import { getImageFromApi } from '../API/TMDB'
import FilmDetail from '../Components/FilmDetail'

class FilmItem extends React.Component {

  render () {
        const data=this.props.film;
        const {film} = this.props;
    return (


                <TouchableOpacity style={styles.main_container} onPress={() => RootNavigation.navigate('Details', { data: data }) } >
                      <Image
                          style={styles.image}
                          source={{uri: getImageFromApi(data.poster_path)}}
                      />
                      <View style={styles.content_container}>
                          <View style={styles.content_header}>
                              <View>
                                  <Text style={styles.header_title}>{data.title}</Text>
                              </View>
                              <View>
                                  <Text style={styles.header_note}><Icon name='star' style={{color:'gold'}}/> {data.vote_average}</Text>
                              </View>
                          </View>
                          <View style={styles.content_body}>
                              <Text style={styles.description} numberOfLines={6}>{data.overview}</Text>
                          </View>
                          <View style={styles.content_footer}>
                              <Text style={styles.date}>{data.release_date}</Text>
                          </View>
                      </View>
                </TouchableOpacity>


    )
  }
}

const styles = StyleSheet.create ({
    main_container: {
        flexDirection :'row',
        height: 200,
        margin:5,
        padding: 5,
        backgroundColor:'#E4E3EE',
        borderRadius:7,
    },
    image: {
        flex:2,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex :4,
    },
    content_header: {
        flex :2,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    header_title: {
        flex: 1,
        flexWrap:'wrap',
    },
    header_note: {
    },
    content_body: {
        flex :6,
    },
    content_footer: {
        flex :1,
        alignSelf: 'flex-end',
    }
})

export default FilmItem

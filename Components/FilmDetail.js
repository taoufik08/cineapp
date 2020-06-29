
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Button, Icon } from 'native-base';
import { getImageFromApi } from '../API/TMDB'

class DetailsScreen extends React.Component {
  render () {
        const data=this.props;
        const nav = data.navigation
        const film = data.route.params.data
        console.log(film);
    return (

      <View style={{flex:1}}>
            <View style={styles.main_container}>
              <Image
                  style={styles.image}
                  source={{uri: getImageFromApi(film.poster_path)}}
              />
              <View style={styles.content_container}>
                  <View style={styles.content_header}>
                      <View>
                          <Text style={styles.header_title}>Titre: {film.title}</Text>
                      </View>
                      <View>
                          <Text style={styles.header_note}><Icon name='star' style={{color:'gold'}}/> {film.vote_average}</Text>
                      </View>
                  </View>
                  <View style={styles.content_body}>
                    <Text style={styles.header_title}>Titre original: {film.original_title}</Text>
                  </View>
                  <View style={styles.content_footer}>
                      <Text style={styles.date}>Date de sortie: {film.release_date}</Text>
                  </View>
              </View>
            </View>
            <View style={styles.second_container}>
                <View style={styles.content_body}>
                    <Text style={styles.description} >{film.overview}</Text>
                </View>
            </View>
      </View>


    )
  }
}

const styles = StyleSheet.create ({
    main_container: {
        flexDirection :'row',
        flex:2,
        margin:5,
        marginBottom:0,
        padding:5,
        backgroundColor:'#E4E3EE',
        borderRadius:7,
    },
    second_container: {
        flexDirection :'row',
        flex:3,
        padding:10,
        backgroundColor:'#E4E3EE',
        borderRadius:7,
    },
    image: {
        flex:2,
        height: 180,
        backgroundColor: 'gray'
    },
    content_container: {
        flex :4,
        padding:5,
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
export default DetailsScreen;

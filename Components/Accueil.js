import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet,View,TextInput, Button,FlatList,Text, ActivityIndicator } from 'react-native';
import Movies from './Movies'
import {getFilms} from '../API/TMDB'

class Accueil extends React.Component {

  constructor(props) {
        super(props);

        this.state = {
            movies : [],
            isLoading : false
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () =>  {
        this.setState({isLoading:true})
        getFilms().then(data =>  {
            this.setState({
                movies: data.results,
                isLoading: false,
            })
        }).catch(error => {
            console.log(error)
        });
    }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
      }

  render() {

        console.log(this.props)

      return (

                        <View style={styles.main_container}>
                            <FlatList
                                keyExtractor={(item) => item.id.toString()}
                                data={this.state.movies}
                                renderItem={({item}) =>
                                    <Movies film={item} />}
                            />
                            {this._displayLoading()}
                        </View>

      )
  }
}

const styles=StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default Accueil

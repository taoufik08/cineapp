import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet,View,TextInput, Button,FlatList,Text, ActivityIndicator } from 'react-native';
import FilmItem from './FilmItem'
import {getFilmsFromSearchedText} from '../API/TMDB'

class Search extends React.Component {
  constructor(props){
    super(props)
    this.searchedText= ""
    this.page = 0
    this.totalPages = 0
    this.state= {
      films : [],
      isLoading: false
    }
  }
      _searchTextInputChanged(text) {
        this.searchedText= text
    }

  _loadFilms (){
        if (this.searchedText.length > 0) {
          this.setState({isLoading:true})
          getFilmsFromSearchedText(this.searchedText, this.page+1).then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films: [...this.state.films, ...data.results],
            isLoading:false
            })
          })
        }
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
  _searchFilms(){
    this.page= 0
    this.totalPages= 0
    this.setState({
      films: []
    },() => {
        console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
        this._loadFilms()
      }
    )
  }

  render() {

      return (

          <View style={styles.main_container}>
            <View style={styles.search}>
                <TextInput
                    style={styles.textinput}
                    placeHolder='titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />
                <Button title='search' onPress={ () => this._searchFilms() } />
            </View>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                      if (this.page < this.totalPages) {
                        this._loadFilms()
                      }
                    }}

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
    flex:4,
    marginLeft: 5,
    marginRight: 5,
    height: 35,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    borderRadius:10,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  search:{
    flexDirection:'row',
  }
})
export default Search

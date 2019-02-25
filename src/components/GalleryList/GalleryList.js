import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
class GalleryList extends Component{
    state={
        galleryL:[],

        
    }
    componentDidMount() {
        this.getGallery();
    }
getGallery=()=>{
    axios({
        method: 'GET',
        url: '/gallery'
    }).then((response) => {
        this.setState({
            
            galleryL: response.data
        })
    })
}

    render(){
        console.log(this.state.galleryL)
        return(
            <Grid container spacing={24}>

                    {this.state.galleryL.map(taco=> (<GalleryItem getGallery={this.getGallery} key={taco.id} taco={taco} />))}

</Grid>


        )
    }
}
export default GalleryList

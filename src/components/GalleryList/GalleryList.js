import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios'
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
<div>
<ul>
                    {this.state.galleryL.map(taco=> (<GalleryItem taco={taco} />))}
</ul>
</div>


        )
    }
}
export default GalleryList

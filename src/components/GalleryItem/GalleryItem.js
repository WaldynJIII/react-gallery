import React, { Component } from 'react';

import axios from 'axios'
import { createRequireFromPath } from 'module';
class GalleryItem extends Component{
    state={

    }
    putLikes=()=>{
        console.log('clicked')
        axios({
            method: 'PUT',
            url: `/gallery/like/`+`${this.props.id}`,
            
        }).then((response) => {
            this.props.getGallery()

    }
        )}
render(){
    return(
    <div>
    
                <img src={this.props.taco.path} alt={this.props.taco.descritption}/>  
                <p>{this.props.taco.likes}</p>
       <button onClick={this.putLikes}>love</button>
    
        </div>
        )
}






}
export default GalleryItem
import React, { Component } from 'react';

import axios from 'axios'

class GalleryItem extends Component{
    state={
clicked: 'false'
    }
    putLikes=()=>{
        console.log('clicked')
        axios({
            method: 'PUT',
            url: '/gallery/like/' + this.props.key,
            
        }).then((response) => {
            this.props.getGallery()

    }
        )}
        switchImg=()=>{
            if(this.state.clicke === 'true'){
            this.setState({
                clicked: 'false'
            })
            this.props.getGallery()}
           else if(this.state.clicked === 'false'){
                this.setState({
                    clicked: 'true'
                })
                this.props.getGallery()
        }
    }
render(){
    console.log(this.props.key)
    if(this.state.clicked === 'false'){
    return(
    <div>
    
                <img src={this.props.taco.path} alt={this.props.taco.descritption} onClick={this.switchImg}/>  
                <p>{this.props.taco.likes}</p>
       <button onClick={this.putLikes} >love</button>
    
        </div>
        )
}
else if(this.state.clicked === 'true'){
    return(
        <div>

            <p onClick={this.switchImg}>{this.props.taco.descritption} </p>
            <p>{this.props.taco.likes}</p>
            <button onClick={this.putLikes} value={this.props.key}>love</button>

        </div>
)}
}






}
export default GalleryItem
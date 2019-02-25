import React, { Component } from 'react';

import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class GalleryItem extends Component{
    state={
clicked: false
    }
    putLikes=()=>{
        console.log(this.props.taco.id)
        axios({
            method: 'PUT',
            url: `/gallery/like/${this.props.taco.id}`,
            
        }).then((response) => {
            this.props.getGallery()

    }
        )}
        switchImg=()=>{
            if(this.state.clicked === true){
            this.setState({
                clicked: false
            })
                this.props.getGallery()
           }
           else if(this.state.clicked === false){
                this.setState({
                    clicked: true
                })
                this.props.getGallery()
        }
    }
render(){
   let des=  this.props.taco.descritption 
    console.log(this.props.taco.id)
    if(this.state.clicked === false){
    return(
        <Grid item md={3}>
            <Card className="item-card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={this.props.taco.description}
                        className="item-img"
                        height="340"
                        image={this.props.taco.path}
                       
                    />
                <CardActions>

                    <Button onClick={this.switchImg}>Click for description</Button>

                </CardActions>
                    <CardContent>
                        
                        <Typography component="p">
                            {this.props.taco.likes}
                        </Typography>
                       
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button onClick={this.putLikes}>Love</Button>

                </CardActions>
            </Card>
        </Grid>
    
                
       
        )
}
else {
    return(
        <Grid item md={3}>
            <Card className="item-card">
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.taco.description}
                        </Typography>
                       
                    <CardActions>

                        <Button onClick={this.switchImg}>Click for Picture</Button>

                    </CardActions>
                        <Typography component="p">
                            {this.props.taco.likes}
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button onClick={this.putLikes}>Love</Button>

                </CardActions>
            </Card>
        </Grid>

            
)}
}






}
export default GalleryItem
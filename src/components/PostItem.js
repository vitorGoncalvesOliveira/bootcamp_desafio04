import React , { Component } from 'react'

class PostItem extends Component {
  
  constructor(props){
    super(props)
    console.log(props)
  }   
  
  render(){
    return (
    <>
    <div >
      <div style={{ float: "left"}}>
        <img className="img-perfil" src={this.props.post.author.avatar}/>
      </div>
      <div>
        <h3> { this.props.post.author.name } </h3>
        <p> { this.props.post.date } </p>
      </div>      
    </div>
    <div style={{ paddingTop: '30px'}}>
      <p>{ this.props.post.content } </p>
    </div>
    <div>
      { this.props.post.comments.map( comment => {
      return(
      <div style={{ paddingTop:"20px", paddingBottom:"25px"}}>
      <div style={{ float: "left"}}>
          <img className="img-perfil-coment" src={comment.author.avatar}/>
        </div>
        <div>        
      <p> <b> { comment.author.name } </b> {comment.content}</p>
      </div>
      </div>)
      }
        )
      } 

    </div>
    </>
    )
  }  

}

export default PostItem;
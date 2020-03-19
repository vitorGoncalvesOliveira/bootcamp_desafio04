import React , { Component } from 'react'

class PostItem extends Component {
  
  constructor(props){
    super(props)    
  }   
  
  
  
  render(){
    return (
    <>
    <div  className="flex-container">
      <div>
        <img className="img-perfil" src={this.props.post.author.avatar}/>
      </div>
      <div style={{ paddingTop:"6px" , marginBottom:"20px"}}>
        <h3> { this.props.post.author.name } </h3>
        <p style={{ fontSize:12}}> { this.props.post.date } </p>
      </div>      
    </div>
    <div style={{ marginBottom:"10px", paddingBottom:"20px"}}>
      <p style={{ fontSize:18}}>{ this.props.post.content } </p>
    </div>
    <div style={{paddingBottom:"20px"}}>
      { this.props.post.comments.map( comment => {
      return(
        <div key={comment.id} className="flex-container" >
          <div >
            <img className="img-perfil-coment" src={comment.author.avatar}/>
          </div>
          <div style={{ padding:"10px", borderRadius:"20px", backgroundColor:"#B8B8B8"}}>        
            <p> <b> { comment.author.name } </b> {comment.content}</p>
          </div>
        </div> 
        )    
        })
      }
    </div>
    </>
    )
  }  

}

export default PostItem;
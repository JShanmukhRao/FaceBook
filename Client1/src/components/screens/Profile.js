import React, { Component } from "react"

class Profile extends Component{
   
    render(){
        return(
            <div style={{maxWidth:"550px",margin:"0px auto"}}>
                 <div
                    style={{
                        display:"flex",
                        justifyContent:"space-around",
                        margin:"18px auto",
                        borderBottom:"1px solid"
                    }}
                 >
                     <div>
                         <img style={{width:"160px" ,height:"160px",borderRadius:"80px"}}
                          src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                     </div>
                     <div>
                         <h5>Shubham Rao</h5>
                         <div 
                           style={
                               {
                                   display:"flex",
                                   justifyContent:"space-between",
                                   width:"108%"
                               }
                           }
                         >
                             <h6>40 post</h6>
                             <h6>40 following</h6>
                             <h6>40 following</h6>
                         </div>
                     </div>
                    
                 </div>
                    
                    <div className="gallery">
                    <img className="item"
                         src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                         <img className="item"
                         src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                         <img className="item"
                         src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                         <img className="item"
                         src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                         <img className="item"
                         src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                         <img className="item"
                         src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                         
                    </div>



                    </div>
      
          )
    }
    
}
export default Profile;

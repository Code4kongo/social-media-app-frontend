import React from 'react'
import UserImage from '../../images/resources/user-pro-img.png'

const UserSocialMediaLink = (props) => {

    const {   socialmedialink , picture , country , email, phone, address } = props

    return ( 
        <div className="col-lg-3">
								
        <div className="main-left-sidebar">
            
            <div className="user_profile">
                
                <div className="user-pro-img">
                    <img src={UserImage} alt={picture}/>
                    <div className="add-dp" id="OpenImgUpload">
                        <input type="file" id="file"/>
                        <label htmlFor="file"><i className="fas fa-camera"></i></label>												
                    </div>
                </div>
                <div className="user_pro_status">
                    <ul className="social_links" >
                        <li>
                            <h4> <b>Email : </b> {email}</h4>  
                        </li>
                        <li>
                           <h4> <b>Country :</b> {country} </h4> 
                        </li>
                        <li>
                            <h4> <b>Phone :</b> {phone} </h4> 
                        </li>
                        <li>
                            <h4> <b>Address :</b> {address}</h4> 
                        </li>
                    </ul>
                </div>
                <ul className="social_links">
                    <li><a href="/" title=""><i className="la la-globe"></i> www.example.com</a></li>
                    <li><a href="/" title=""><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</a></li>
                    <li><a href="/" title=""><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</a></li>
                    <li><a href="/" title=""><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</a></li>
                    <li><a href="/" title=""><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</a></li>
                    <li><a href="/" title=""><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</a></li>
                    <li><a href="/" title=""><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</a></li>
                    <li><a href="/" title=""><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</a></li>
                </ul>
            </div>
        </div>
    </div>
     );
}
 
export default UserSocialMediaLink;
import React, { Component } from "react";
import UsersSocialMediaLinks from "../../components/SocialMediaLink/SocialMediaLink";
import UserFeed from "../../components/PersonalFeed/PersonalFeed";
import UserInfo from "../../components/PersonalInfo/PersonalInfo";
import UserCover from '../../images/resources/cover-img.jpg'
import FeedIcon from '../../images/ic1.png'
import InfoIcon from '../../images/ic2.png'

export class MainUserProfil extends Component {
  render() {
    return (

        <React.Fragment>

        <section className="cover-sec">
            <img src={UserCover} alt=""/>
            <div className="add-pic-box">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12 col-sm-12">					
                            <input type="file" id="file"/>
                            <label htmlFor="file">Change Image</label>				
                        </div>
                    </div>
                </div>
            </div>
        </section>

		<main>
			<div className="main-section">
				<div className="container">
					<div className="main-section-data">
						<div className="row">
                            <UsersSocialMediaLinks />

                        <div class="col-lg-9">
                        <div class="main-ws-sec">

                            <div class="user-tab-sec rewivew">
                                    <h3>John Doe</h3>
                                    <div class="star-descp">
                                        <span>Graphic Designer at Self Employed</span>
                                    </div>
                                    
                                    <div class="tab-feed st2 settingjb">
                                        <ul>
                                        <li data-tab="feed-dd" class="active">
                                            <a href="/" title="">
                                            <img src={FeedIcon} alt="" />
                                            <span>Feed</span>
                                            </a>
                                        </li>
                                        <li data-tab="info-dd">
                                            <a href="/" title="">
                                            <img src={InfoIcon} alt="" />
                                            <span>Info</span>
                                            </a>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                            <UserInfo />
                            <UserFeed />
                            <UserFeed />
                            <UserFeed />

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </React.Fragment>
    );
  }
}

export default MainUserProfil;
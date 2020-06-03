import React,{Component} from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
        const {link,image}=props.socialProfile;
        return(
            <div style={{display:'inline-block', width:100,margin:10}}>
                <a href={link}><img src={image} alt='Social-Profile' style={{width:30,height:30}}/></a>
            </div>
        )
    }
const SocialProfiles = () =>(
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE =>{
                            return<SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                        }
                            )
                    }
                </div>
            </div>
        )
export default SocialProfiles;
import * as React from 'react';
import Splash from "../../components/splash/splash";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class SplashContainer extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <Splash />
         );
    }
}
 
export default SplashContainer;
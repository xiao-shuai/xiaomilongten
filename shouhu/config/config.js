import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Shouhu from '../shouhu/Shouhu'
import Wenti from '../shouhu/Wenti'
import My from '../shouhu/My'
import Record from '../shouhu/Record'
import About from '../shouhu/About'
import Feedback from '../shouhu/Feedback'
import Login from '../shouhu/Login'
import Xie from  '../shouhu/Xie'
const SHOUHU=createStackNavigator({
    Shouhu:{screen:Shouhu},
    Wenti:{screen:Wenti},
    Record:{screen:Record},
    My:{screen:My},
    About:{screen:About},
    Feedback:{screen:Feedback},
    Login:{screen:Login},
    Xie:{screen:Xie},
})

export default createAppContainer(SHOUHU)

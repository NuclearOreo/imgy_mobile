import { createBottomTabNavigator, createAppContainer} from 'react-navigation';

import home from '../screens/home';
import profile from '../screens/Profile';
import newPost from '../screens/newPost';

const Tabs = createBottomTabNavigator({
    home: {
        screen: home,
        navigationOptions: {
            tabBarLabel: 'Home',
        }
    },
    newPost: {
        screen: newPost,
        navigationOptions: {
            tabBarLabel: 'New Post'
        }
    },
    profile: {
        screen: profile,
        navigationOptions: {
            tabBarLabel: 'Profile'
        }
    }
});

export const AppContainer = createAppContainer(Tabs);
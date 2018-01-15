import React from 'react';
import Main from './app/Main';
import Detail from './app/Detail';
import { StackNavigator } from 'react-navigation';

const ScreenDecider = StackNavigator({
  Main: { screen: Main },
  Detail: { screen: Detail },
});
export default class App extends React.Component {
	render() {

		return (
			<ScreenDecider/>
		);
	}
}
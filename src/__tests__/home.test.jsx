import React from 'react';
import { mount } from 'enzyme';
import home from 'home';

describe('home', () => {
		it('renders without crashing', () => {
				mount(<home />);
		});
});

import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/index';

describe('Home Component', () => {
  it('Should render Home', () => {
    const component = renderer.create(
      <Home />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
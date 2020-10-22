import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../layout';

describe('Layout Component', () => {
  it('Should render Layout', () => {
    const component = renderer.create(
      <Layout />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
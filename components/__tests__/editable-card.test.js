import React from 'react';
import renderer from 'react-test-renderer';
import EditableCard from '../editable-card';

describe('Card Component', () => {
  it('Should render Card', () => {
    const component = renderer.create(
      <EditableCard />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
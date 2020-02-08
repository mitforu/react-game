import React from 'react';
import Square from './Square.js';
import renderer from 'react-test-renderer';

test('Check the function component tree', () => {
    const component = renderer.create(
        <Square
        onClick={() => console.log("clicked")}
        value = {1}
        >Square</Square>,
      );

      let tree = component.toJSON();
      tree.props.onClick();
});
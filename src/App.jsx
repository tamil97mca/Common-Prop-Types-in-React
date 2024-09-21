// App.jsx
import React from 'react';
import PropTypes from 'prop-types';

// Example of string PropType
const StringComponent = ({ text }) => {
  return <p>String: {text}</p>;
};

StringComponent.propTypes = {
  text: PropTypes.string.isRequired, // Expects a string
};

// Example of number PropType
const NumberComponent = ({ count }) => {
  return <p>Number: {count}</p>;
};

NumberComponent.propTypes = {
  count: PropTypes.number.isRequired, // Expects a number
};

// Example of boolean PropType
const BooleanComponent = ({ isActive }) => {
  return <p>Boolean: {isActive ? 'Active' : 'Inactive'}</p>;
};

BooleanComponent.propTypes = {
  isActive: PropTypes.bool.isRequired, // Expects a boolean
};

// Example of array PropType
const ArrayComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

ArrayComponent.propTypes = {
  items: PropTypes.array.isRequired, // Expects an array
};

// Example of object PropType
const ObjectComponent = ({ user }) => {
  return <p>Object: {user.name}</p>;
};

ObjectComponent.propTypes = {
  user: PropTypes.object.isRequired, // Expects an object
};

// Example of function PropType
const FunctionComponent = ({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
};

FunctionComponent.propTypes = {
  onClick: PropTypes.func.isRequired, // Expects a function
};

// Example of node PropType
const NodeComponent = ({ children }) => {
  return <div>Node: {children}</div>;
};

NodeComponent.propTypes = {
  children: PropTypes.node.isRequired, // Expects anything that can be rendered
};

// Example of element PropType
const ElementComponent = ({ element }) => {
  return <div>Element: {element}</div>;
};

ElementComponent.propTypes = {
  element: PropTypes.element.isRequired, // Expects a React element
};

// Example of oneOf PropType
const OneOfComponent = ({ status }) => {
  return <p>Status: {status}</p>;
};

OneOfComponent.propTypes = {
  status: PropTypes.oneOf(['online', 'offline', 'away']).isRequired, // Expects one of the specified values
};

// Example of shape PropType
const ShapeComponent = ({ person }) => {
  return (
    <p>
      Name: {person.name}, Age: {person.age}
    </p>
  );
};

ShapeComponent.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired, // Name should be a string
    age: PropTypes.number.isRequired, // Age should be a number
  }).isRequired, // Expects an object with a specific shape
};

// Main App Component demonstrating all the above components
const App = () => {
  return (
    <div>
      <h1>PropTypes Examples</h1>
      <StringComponent text="Hello, World!" />
      <NumberComponent count={42} />
      <BooleanComponent isActive={true} />
      <ArrayComponent items={['Item 1', 'Item 2', 'Item 3']} />
      <ObjectComponent user={{ name: 'John Doe', age: 30 }} />
      <FunctionComponent onClick={() => alert('Button clicked!')} />
      <NodeComponent>
        <span>This is a node (can be text, number, or element)</span>
      </NodeComponent>
      <ElementComponent element={<strong>This is a React element</strong>} />
      <OneOfComponent status="online" />
      <ShapeComponent person={{ name: 'Alice', age: 25 }} />
    </div>
  );
};

export default App;

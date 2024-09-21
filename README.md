# prop-types

**prop-types** is a library used in React to specify the types of props a component should receive and validate them during runtime. It helps catch bugs by ensuring that the props passed to components match the expected types and shapes, making your code more robust, readable, and easier to maintain.

## Key Features of prop-types:

- **Type Checking:** Helps check if the props passed to a component are of the correct type, such as string, number, array, object, etc.

- **Runtime Validation:** Unlike TypeScript, which checks types at compile time, prop-types performs validation at runtime. If the wrong type is passed, it logs a warning in the console but does not stop the application from running.

- **Documentation:** Makes components self-documenting because it clearly defines what props are expected and their types.

## Common Prop Types:

- **PropTypes.string** - Expects a string.
- **PropTypes.number** - Expects a number.
- **PropTypes.bool** - Expects a boolean.
- **PropTypes.array** - Expects an array.
- **PropTypes.object** - Expects an object.
- **PropTypes.func** - Expects a function.
- **PropTypes.node** - Expects anything that can be rendered (numbers, strings, elements, arrays, etc.).
- **PropTypes.element** - Expects a React element.
- **PropTypes.oneOf(['value1', 'value2'])** - Expects one of the specified values.
- **PropTypes.shape({...})** - Expects an object with a specific shape.

## Why Use prop-types?

- **Error Prevention:** Helps avoid errors caused by passing incorrect data types to components.

- **Enhanced Readability:** Makes your components' API clearer and easier to understand.

- **Better Debugging:** Provides warnings in the console when props don't match the expected types, helping catch bugs early in development.

Overall, prop-types is a lightweight and effective tool for adding type safety to your React components without requiring a full type-checking system like TypeScript.

# App.jsx with PropTypes Examples:

## Explanation of Each Example

### 1. `PropTypes.string`
- **Component**: `StringComponent`
- **Description**: Expects a string; in this example, it renders the `text` prop as a paragraph.

### 2. `PropTypes.number`
- **Component**: `NumberComponent`
- **Description**: Expects a number; it displays the `count` prop.

### 3. `PropTypes.bool`
- **Component**: `BooleanComponent`
- **Description**: Expects a boolean; it shows whether the state is active or inactive.

### 4. `PropTypes.array`
- **Component**: `ArrayComponent`
- **Description**: Expects an array and renders it as a list of items.

### 5. `PropTypes.object`
- **Component**: `ObjectComponent`
- **Description**: Expects an object; displays the `name` property of the object.

### 6. `PropTypes.func`
- **Component**: `FunctionComponent`
- **Description**: Expects a function and triggers it when the button is clicked.

### 7. `PropTypes.node`
- **Component**: `NodeComponent`
- **Description**: Expects any renderable content like strings, numbers, or elements.

### 8. `PropTypes.element`
- **Component**: `ElementComponent`
- **Description**: Expects a valid React element; in this case, it renders a `strong` element.

### 9. `PropTypes.oneOf(['value1', 'value2'])`
- **Component**: `OneOfComponent`
- **Description**: Expects one value from a specified set; here, it expects `status` to be either "online," "offline," or "away."

### 10. `PropTypes.shape({...})`
- **Component**: `ShapeComponent`
- **Description**: Expects an object with a specific shape; here, an object with `name` as a string and `age` as a number.

These examples demonstrate how to use each of these common PropTypes in a React component, ensuring that the props passed to components are of the expected type and shape.
```
# React Basic Tooltip

A lightweight, customizable React tooltip component with multiple positioning options and themes.

## Demo

Check out the [live demo](https://tanselberkant.github.io/react-basic-tooltip/) to see the tooltip in action.

## Features

- 🎨 8 Different positioning options
- 🌈 Dark/Light theme support
- 📦 Lightweight package size
- 🔧 Easy customization
- 💨 Tailwind CSS support
- 🎯 TypeScript support
- ⚡️ Zero dependencies (except React)

## Installation

```bash
npm install react-basic-tooltip
# or
yarn add react-basic-tooltip
```

## Usage

```jsx
import Tooltip from "react-basic-tooltip";

function App() {
  return (
    <Tooltip content="Hello World!" position="top-center">
      <button>Hover me!</button>
    </Tooltip>
  );
}
```

## Props

| Prop      | Type              | Default      | Description        |
| --------- | ----------------- | ------------ | ------------------ |
| content   | ReactNode         | -            | Tooltip content    |
| position  | TooltipPosition   | 'top-center' | Tooltip position   |
| color     | 'dark' \| 'white' | 'dark'       | Tooltip theme      |
| width     | number \| string  | -            | Custom width       |
| className | string            | -            | Additional classes |

### Available Positions

- `top-left`
- `top-center`
- `top-right`
- `right`
- `bottom-right`
- `bottom-center`
- `bottom-left`
- `left`

## Examples

### Different Positions

```jsx
<Tooltip position="top-left" content="Top Left">
  <button>Hover me</button>
</Tooltip>
```

### Custom Width

```jsx
<Tooltip content="Custom width tooltip" width={200}>
  <button>Wide tooltip</button>
</Tooltip>
```

### Theme Variants

```jsx
<Tooltip content="Light theme" color="white">
  <button>Light</button>
</Tooltip>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

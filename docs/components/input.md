# Input

`Input` 渲染一个最基础的受控 `<input type="text">`，不包含额外样式和复杂功能。

## 基础使用

```jsx
const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(event) => setValue(event.target.value)}
/>;
```

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string` | `''` | 输入框当前值 |
| `onChange` | `function` | - | 输入变化时接收 React 事件 |

## 当前限制

- 当前只支持文本输入。
- 当前不开放 `placeholder`、`disabled`、`type` 等额外 props。
- 这是受控组件，调用方需要在 `onChange` 中更新传入的 `value`。

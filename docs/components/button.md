# Button

`Button` 渲染一个原生 `<button type="button">`，内容通过 `children` 传入。

## 基础使用

```jsx
<Button onClick={() => console.log('clicked')}>提交</Button>
```

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | 按钮显示内容 |
| `variant` | `string` | `'primary'` | 可选 `primary`、`default`、`success`、`warning`、`danger`、`neutral` |
| `disabled` | `boolean` | `false` | 是否禁用按钮 |
| `onClick` | `function` | - | 原生按钮点击时调用 |

## 当前限制

- 当前只提供基础颜色语义，没有尺寸、outline 等变体。
- 按钮类型固定为 `button`。

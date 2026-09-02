# Form

`Form` 是一个最简单的原生 `<form>` 包装器。它只负责组织 `children` 并把提交事件交给 `onSubmit`，不负责字段状态、校验或数据请求。

## 基础使用

```jsx
const [value, setValue] = useState('');

<Form
  onSubmit={(event) => {
    event.preventDefault();
    console.log(value);
  }}
>
  <Input
    value={value}
    onChange={(event) => setValue(event.target.value)}
  />
  <button type="submit">提交</button>
</Form>;
```

## Props

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `children` | `ReactNode` | 表单内部的输入组件、按钮或其他内容 |
| `onSubmit` | `function` | 原生表单提交时接收 React FormEvent |

## 为什么不在 Form 内保存输入值

React 中通常由具体页面通过 state 保存字段值：

```jsx
const [value, setValue] = useState('');
```

`Form` 只提供表单结构；`Input` 通过 `value` 和 `onChange` 受控更新；提交时页面可以读取自己的 state。

## 当前限制

- 不内置字段注册、校验、错误提示和提交状态。
- 不自动收集或转换表单数据。
- 不自动调用 `event.preventDefault()`；需要避免浏览器默认提交时，由使用者在 `onSubmit` 中调用。
- 提交按钮由使用者作为 `children` 传入。

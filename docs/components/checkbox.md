# Checkbox

`Checkbox` 封装原生复选框，通过 `checked` 和 `onChange` 组成 React 受控状态。

## 基础使用

```jsx
const [checked, setChecked] = useState(false);

<Checkbox
  value="agreement"
  checked={checked}
  onChange={(event) => setChecked(event.target.checked)}
>
  同意协议
</Checkbox>;
```

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | 复选框标签内容 |
| `checked` | `boolean` | `false` | 当前是否选中 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `value` | `string` | - | 当前选项的业务值 |
| `onChange` | `function` | - | 用户改变选中状态时接收 React 事件 |

## “其他”选项

当 `children` 严格等于字符串 `其他` 且 `checked` 为 `true` 时，组件显示补充输入框：

```jsx
<Checkbox checked={otherChecked} onChange={handleOtherChange}>
  其他
</Checkbox>
```

取消选中后补充输入框会被移除，其未公开的内部输入内容也随之清空。

## 当前限制

- “其他”判断依赖固定中文文本，尚未抽象成独立 prop。
- 补充输入框暂时没有公共 value 或 onChange。
- 这是受控组件，调用方需要在 `onChange` 中更新 `checked`。

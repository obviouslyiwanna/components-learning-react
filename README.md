# component-learning-react

一个用于学习 React 组件设计的最小组件项目。组件视觉和功能范围与同级的原生 Web Components 项目 `component-learning` 对应，但 API 使用 React 的 props、受控状态和 `children`。

## 开始运行

```bash
npm install
npm run dev
```

生产构建和测试：

```bash
npm run build
npm test
```

## 使用组件

```jsx
import { Button, Card, Checkbox, Form, Input, Tag } from './components';

<Button variant="primary">提交</Button>
<Input value={value} onChange={handleChange} />
<Checkbox checked={checked} value="agreement" onChange={handleChange}>
  同意协议
</Checkbox>
<Tag>推荐</Tag>
<Card title="卡片标题">卡片正文</Card>
<Form onSubmit={handleSubmit}>表单内容</Form>
```

## 组件

| 组件 | 用途 | API 文档 |
| --- | --- | --- |
| `Button` | 基础按钮和颜色语义 | [Button](docs/components/button.md) |
| `Input` | 最小受控文本输入框 | [Input](docs/components/input.md) |
| `Checkbox` | 受控选中、禁用和值 | [Checkbox](docs/components/checkbox.md) |
| `Form` | 组织表单内容并处理提交事件 | [Form](docs/components/form.md) |
| `Tag` | 展示轻量标签内容 | [Tag](docs/components/tag.md) |
| `Card` | 展示标题和正文区域 | [Card](docs/components/card.md) |

## 与原生版的对应关系

| 原生 Web Component | React 组件 |
| --- | --- |
| Attribute / Property | props |
| 默认插槽 | `children` |
| `title` 具名插槽 | `title` prop |
| 自定义 `change` 事件 | `onChange` 回调接收 React 事件 |
| Property 手动同步 | 父组件通过 state 受控更新 |

组件统一从 `src/components/index.js` 导出。`src/App.jsx` 是全部组件的可运行 Demo。

## 当前范围

- 保持学习项目所需的最小 API，不包含尺寸、主题、表单封装等扩展能力。
- `Input` 和 `Checkbox` 是受控组件，调用方负责保存和更新状态。
- `Form` 不保存字段值，也不内置校验或数据请求。
- `Checkbox` 的“其他”补充输入框暂时没有独立的公共 value 或事件。

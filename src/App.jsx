import { useState } from 'react';
import { Button, Card, Checkbox, Input, Tag } from './components';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [otherChecked, setOtherChecked] = useState(false);

  return (
    <main className="demo">
      <h1>React Component Learning</h1>

      <section className="demo__section">
        <h2>Button</h2>
        <div className="demo__row">
          <Button onClick={() => setCount((currentCount) => currentCount + 1)}>
            点击次数：{count}
          </Button>
          <Button variant="success">成功</Button>
          <Button variant="warning">警告</Button>
          <Button variant="danger">危险</Button>
          <Button variant="neutral">中性</Button>
          <Button disabled>禁用按钮</Button>
        </div>
      </section>

      <section className="demo__section">
        <h2>Input</h2>
        <Input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <p>输入内容：{inputValue}</p>
      </section>

      <section className="demo__section">
        <h2>Checkbox</h2>
        <Checkbox
          value="reading"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        >
          阅读
        </Checkbox>
        <Checkbox
          value="other"
          checked={otherChecked}
          onChange={(event) => setOtherChecked(event.target.checked)}
        >
          其他
        </Checkbox>
        <p>是否选中：{checked ? '是' : '否'}</p>
      </section>

      <section className="demo__section">
        <h2>Tag</h2>
        <Tag>React</Tag>
      </section>

      <section className="demo__section">
        <h2>Card</h2>
        <Card title="基础卡片">这是 Card 的内容。</Card>
      </section>
    </main>
  );
}

export default App;

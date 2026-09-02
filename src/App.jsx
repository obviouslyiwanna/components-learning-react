import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Checkbox from './components/Checkbox/Checkbox';
import Tag from './components/Tag/Tag';
import Card from './components/Card/Card';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <main>
      <h1>React Component Learning</h1>

      <Button onClick={() => setCount(count + 1)}>
        点击次数：{count}
      </Button>

      <Button disabled>禁用按钮</Button>

      <div>
        <Input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <p>输入内容：{inputValue}</p>
      </div>

      <div>
        <Checkbox
          value="reading"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        >
          阅读
        </Checkbox>
        <p>是否选中：{checked ? '是' : '否'}</p>
      </div>

      <Tag>React</Tag>

      <Card title="基础卡片">
        <p>这是 Card 的内容。</p>
      </Card>
    </main>
  );
}

export default App;

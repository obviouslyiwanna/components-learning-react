import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('渲染最基础的文本输入框', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    expect(input.type).toBe('text');
    expect(input.value).toBe('');
  });

  it('通过 value 和 onChange 受控地更新输入值', () => {
    function ControlledInput() {
      const [value, setValue] = useState('初始值');

      return (
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      );
    }

    render(<ControlledInput />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '周末灵感' } });

    expect(input.value).toBe('周末灵感');
  });
});

import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('将 checked、disabled 和 value 传给原生复选框', () => {
    render(
      <Checkbox checked disabled value="reading">
        阅读
      </Checkbox>,
    );

    const checkbox = screen.getByRole('checkbox', { name: '阅读' });

    expect(checkbox.checked).toBe(true);
    expect(checkbox.disabled).toBe(true);
    expect(checkbox.value).toBe('reading');
  });

  it('把用户变更交给 onChange', () => {
    const handleChange = vi.fn((event) => event.target.checked);
    render(
      <Checkbox value="camping" onChange={handleChange}>
        露营
      </Checkbox>,
    );

    fireEvent.click(screen.getByRole('checkbox', { name: '露营' }));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.results[0].value).toBe(true);
  });

  it('受控更新选中状态', () => {
    function ControlledCheckbox() {
      const [checked, setChecked] = useState(false);

      return (
        <Checkbox
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        >
          阅读
        </Checkbox>
      );
    }

    render(<ControlledCheckbox />);

    const checkbox = screen.getByRole('checkbox', { name: '阅读' });
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  it('只在“其他”被选中时显示补充输入框', () => {
    const { rerender } = render(<Checkbox>其他</Checkbox>);

    expect(screen.queryByPlaceholderText('请输入其他内容')).toBeNull();

    rerender(<Checkbox checked>其他</Checkbox>);

    expect(screen.getByPlaceholderText('请输入其他内容')).not.toBeNull();

    rerender(<Checkbox checked>露营</Checkbox>);

    expect(screen.queryByPlaceholderText('请输入其他内容')).toBeNull();
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('渲染按钮内容并默认使用 primary 语义', () => {
    render(<Button>提交</Button>);

    const button = screen.getByRole('button', { name: '提交' });

    expect(button.type).toBe('button');
    expect(button.dataset.variant).toBe('primary');
  });

  it('支持 variant 和 disabled', () => {
    render(
      <Button variant="danger" disabled>
        删除
      </Button>,
    );

    const button = screen.getByRole('button', { name: '删除' });

    expect(button.dataset.variant).toBe('danger');
    expect(button.disabled).toBe(true);
  });

  it('把可用按钮的点击交给 onClick', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>计数</Button>);

    fireEvent.click(screen.getByRole('button', { name: '计数' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

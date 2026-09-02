import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Form from './Form';

describe('Form', () => {
  it('使用原生 form 包裹 children', () => {
    const { container } = render(
      <Form>
        <label>
          姓名
          <input type="text" />
        </label>
      </Form>,
    );

    const form = container.querySelector('form');

    expect(form).not.toBeNull();
    expect(screen.getByRole('textbox', { name: '姓名' })).not.toBeNull();
  });

  it('提交时调用 onSubmit', () => {
    const handleSubmit = vi.fn((event) => {
      event.preventDefault();

      return {
        defaultPrevented: event.defaultPrevented,
        tagName: event.currentTarget.tagName,
      };
    });

    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">提交</button>
      </Form>,
    );

    fireEvent.click(screen.getByRole('button', { name: '提交' }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit.mock.results[0].value).toEqual({
      defaultPrevented: true,
      tagName: 'FORM',
    });
  });
});

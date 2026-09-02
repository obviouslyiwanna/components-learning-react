import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Tag from './Tag';

describe('Tag', () => {
  it('渲染传入的标签内容', () => {
    render(
      <Tag>
        <strong>推荐</strong>
      </Tag>,
    );

    const content = screen.getByText('推荐');

    expect(content.tagName).toBe('STRONG');
    expect(content.parentElement.className).toBe('cl-tag');
  });
});

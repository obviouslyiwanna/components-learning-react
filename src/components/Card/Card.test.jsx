import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card';

describe('Card', () => {
  it('分别渲染 title 和正文内容', () => {
    render(
      <Card title={<strong>周末计划</strong>}>
        <p>去露营</p>
      </Card>,
    );

    const title = screen.getByText('周末计划');
    const content = screen.getByText('去露营');

    expect(title.closest('header').className).toBe('cl-card__title');
    expect(content.closest('section').className).toBe('cl-card__content');
    expect(content.closest('article').className).toBe('cl-card');
  });
});

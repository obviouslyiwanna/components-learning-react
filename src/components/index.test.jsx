import { describe, expect, it } from 'vitest';
import { Button, Card, Checkbox, Form, Input, Tag } from './index';

describe('组件入口', () => {
  it('导出全部公开组件', () => {
    [Button, Card, Checkbox, Form, Input, Tag].forEach((Component) => {
      expect(Component).toBeTypeOf('function');
    });
  });
});

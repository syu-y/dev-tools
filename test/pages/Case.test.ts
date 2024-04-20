import { render, fireEvent, screen } from '@testing-library/svelte';
import Case from '@pages/Case.svelte';

const labelInputCamel = 'From(PascalCase/snake-case/kebab-case)';
const labelOutputCamel = 'To(CamelCase)';
const labelInputSnake = 'From(PascalCase/camelCase/kebab-case)';
const labelOutputSnake = 'To(SnakeCase)';

// テスト準備
const setUp = () => {
  render(Case);
  const inputCamel = screen.getByRole('textbox', {
    name: labelInputCamel,
  }) as HTMLInputElement;

  const outputCamel = screen.getByRole('textbox', {
    name: labelOutputCamel,
  }) as HTMLInputElement;

  const inputSnake = screen.getByRole('textbox', {
    name: labelInputSnake,
  }) as HTMLInputElement;

  const outputSnake = screen.getByRole('textbox', {
    name: labelOutputSnake,
  }) as HTMLInputElement;

  return { inputCamel, outputCamel, inputSnake, outputSnake };
};

describe('Case.svelte', async () => {
  test('入力欄の初期値が空', async () => {
    const result = setUp();
    expect(result.inputCamel.value).toBe('');
    expect(result.outputCamel.value).toBe('');
    expect(result.inputSnake.value).toBe('');
    expect(result.outputSnake.value).toBe('');
  });

  test('パスカルケースからキャメルケースへの変換', async () => {
    const result = setUp();

    // Changeイベント発火
    await fireEvent.change(result.inputCamel, { target: { value: 'UserId' } });

    // 変換後文字列が"userId"と一致するかチェック
    expect(result.outputCamel.value).toBe('userId');
  });

  test('スネークケースからキャメルケースへの変換', async () => {
    const result = setUp();

    // Changeイベント発火
    await fireEvent.change(result.inputCamel, { target: { value: 'user_id' } });

    // 変換後文字列が"userId"と一致するかチェック
    expect(result.outputCamel.value).toBe('userId');
  });

  test('ケバブケースからキャメルケースへの変換', async () => {
    const result = setUp();

    // Changeイベント発火
    await fireEvent.change(result.inputCamel, { target: { value: 'user-id' } });

    // 変換後文字列が"userId"と一致するかチェック
    expect(result.outputCamel.value).toBe('userId');
  });

  test('パスカルケースからスネークケースへの変換', async () => {
    const result = setUp();

    // Changeイベント発火
    await fireEvent.change(result.inputSnake, { target: { value: 'UserId' } });

    // 変換後文字列が"userId"と一致するかチェック
    expect(result.outputSnake.value).toBe('user_id');
  });

  test('キャメルケースからスネークケースへの変換', async () => {
    const result = setUp();

    // Changeイベント発火
    await fireEvent.change(result.inputSnake, { target: { value: 'userId' } });

    // 変換後文字列が"userId"と一致するかチェック
    expect(result.outputSnake.value).toBe('user_id');
  });

  test('ケバブケースからスネークへの変換', async () => {
    const result = setUp();

    // Changeイベント発火
    await fireEvent.change(result.inputSnake, { target: { value: 'user-id' } });

    // 変換後文字列が"userId"と一致するかチェック
    expect(result.outputSnake.value).toBe('user_id');
  });
});

import { StringUtils } from '@/utils/stringUtils';

describe('StringUtils.ts', async () => {
  //　置換
  test('指定位置の文字列置き換え', async () => {
    let originalStr = 'abcdef';
    const replaceStr = '123';
    const replacedStr = StringUtils.strReplaceByIndex(
      originalStr,
      1,
      2,
      replaceStr
    );
    const correctStr = 'a123def';
    expect(replacedStr).toEqual(correctStr);
  });

  // 文字判定
  test('大文字判定', async () => {
    const result = StringUtils.isUpperCase('A');
    expect(result).toBeTruthy();
  });
  test('大文字判定', async () => {
    const result = StringUtils.isUpperCase('a');
    expect(result).toBeFalsy();
  });
  test('小文字判定', async () => {
    const result = StringUtils.isLowerCase('a');
    expect(result).toBeTruthy();
  });
  test('小文字判定', async () => {
    const result = StringUtils.isLowerCase('A');
    expect(result).toBeFalsy();
  });

  // カウント
  test('文字列の長さをカウント', async () => {
    const result = StringUtils.getCharacterLength('ABCDE');
    expect(result).toBe(5);
  });

  test('文字列の長さをカウント（サロゲート文字・異体字考慮）', async () => {
    const surrogatePair = StringUtils.getDisplayCharacterLength('𠮷野家');
    expect(surrogatePair).toBe(3);
    const variousChr = StringUtils.getDisplayCharacterLength('葛城市');
    expect(variousChr).toBe(3);
    const emoji = StringUtils.getDisplayCharacterLength('🌝👍✈');
    expect(emoji).toBe(3);
  });

  test('特定文字列の出現回数をカウント', async () => {
    const result = StringUtils.getSpecificharacterCount('ABXXCDXXEFGXXH', 'XX');
    expect(result).toBe(3);
  });

  test('バイト数をカウント', async () => {
    const result = StringUtils.getBytes('ABCDEFG');
    expect(result).toBe(7);
    const surrogatePair = StringUtils.getBytes('𠮷野家');
    expect(surrogatePair).toBe(10);
    const variousChr = StringUtils.getBytes('葛城市');
    expect(variousChr).toBe(9);
    const emoji = StringUtils.getBytes('🌝👍✈');
    expect(emoji).toBe(11);
  });
});

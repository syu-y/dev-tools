import { StringUtils } from '../../src/utils/stringUtils';

describe('StringUtils.ts', async () => {
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
});

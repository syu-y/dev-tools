export const StringUtils = {
  // 指定位置の文字列置き換え
  strReplaceByIndex: (
    value: string,
    start: number,
    end: number,
    replaceStr: string
  ): string => {
    let before = value.slice(0, start);
    let after = value.slice(end + 1);
    let result = before + replaceStr + after;
    return result;
  },
  // 大文字判定
  isUpperCase: (str: string) => {
    return str === str.toUpperCase() ? true : false;
  },
  // 小文字判定
  isLowerCase: (str: string) => {
    return str === str.toLowerCase() ? true : false;
  },
};

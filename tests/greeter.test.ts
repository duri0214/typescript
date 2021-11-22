// import クラス名 from 相対パス
import { Greeter } from '../src/greeter';

test('test1', () => {
    expect(new Greeter('Taro').getMessage('Merry Christmas')).toBe('Hello Taro Merry Christmas');
});

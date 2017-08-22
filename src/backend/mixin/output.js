import Console from '../../utils/Console';
import test from './test';

class Output {
  @test('HTML')
  static a() {
    Console.log('test');
  }
}


export default new Output();

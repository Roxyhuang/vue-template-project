/* eslint-disable no-param-reassign */
import { Toast } from 'mint-ui';
import Console from './Console';

class ErrorHandler {

  /**
   * @param exception custom exception
   * @returns {boolean} whether it is handled
   */
  handle(exception) {
    if (exception && exception.handled === false) {
      Console.log(`${exception.code}: ${exception.message}!`);

      exception.handled = true;

      switch (exception.code) {
        case -1000:
          this.kick();
          break;
        case -1001:
          ErrorHandler.showError(exception.code, exception.message);
          break;
        case -10000:
          ErrorHandler.showError(exception.code, '您的网络正在发呆，请稍候');
          break;
        default:
          ErrorHandler.showError(exception.code, exception.message);
          break;
      }
      return true;
    }
    return false;
  }

  static kick() {
    Console.log('kicked');
    // TODO
  }

  static showError(errorCode, errorMessage) {
    Console.warn(`${errorCode}: ${errorMessage}`);
    Toast({
      message: `${errorMessage}`,
      position: 'bottom',
      duration: 3000,
    });
  }
}

export default new ErrorHandler();

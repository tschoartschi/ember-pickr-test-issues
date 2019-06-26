import Component from '@ember/component';
import {later} from '@ember/runloop'
export default Component.extend({
  didInsertElement() {
    later(() => this.set('value', '#ff0000'));
  }
});

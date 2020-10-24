import { ISomeService } from './SomeService.interface';

import { API } from '../../utils/API';

class SomeService implements ISomeService {
  public async getData() {
    const res = await API.get('/get/json');
    return res;
  }
}

export default new SomeService();

// global.js
import { Icon } from 'sula';
import { DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.less';

// 注册所需的icon
Icon.iconRegister({
  delete: DeleteOutlined,
});

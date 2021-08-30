import styles from './index.less';
import { CreateForm } from 'sula';

const config = {
  container: {
    type: 'card',
    props: {
      title: '基础信息',
    },
  },
  actionsPosition: 'right',
  itemLayout: {
    span: 8, // span表示每项所占的栅格数
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  },
  mode: 'edit',
  remoteValues: {
    url: 'https://run.mocky.io/v3/c0bd3da5-1148-4d76-9e5f-43944e859caf',
    method: 'POST',
  },
  fields: [
    {
      name: 'name',
      label: '姓名',
      field: {
        type: 'input',
        props: {
          placeholder: '请输入',
        },
      },
    },
    {
      name: 'ages',
      label: '年龄',
      field: {
        type: 'inputnumber',
        props: {
          placeholder: '请输入',
        },
      },
    },
    {
      name: 'address',
      label: '地址',
      field: {
        type: 'textarea',
        props: {
          placeholder: '请输入',
        },
      },
    },
  ],
  submit: {
    url: 'https://run.mocky.io/v3/3be5db89-2c20-40b3-83ab-07b3b0a2b4cf',
    method: 'POST',
  },
};

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <CreateForm {...config} />
    </div>
  );
}

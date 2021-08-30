import React from 'react';
import { QueryTable } from 'sula';

export default () => {
  const config = {
    rowKey: 'id',
    tableProps: {
      // initialDataSource,
    },
    remoteDataSource: {
      url: 'https://run.mocky.io/v3/e75ad7cf-9f57-441e-a60a-1870f25a1fba',
      method: 'GET',
    },
    layout: 'vertical',
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
    ],
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'name',
        title: '姓名',
      },
      {
        key: 'ages',
        title: '年龄',
      },
      {
        key: 'email',
        title: 'Email',
      },
      {
        key: 'address',
        title: '地址',
      },
      {
        key: 'operator',
        title: '操作',
        render: [
          {
            type: 'icon',
            confirm: '确认要删除吗？',
            props: {
              type: 'delete',
            },
            action: [
              {
                type: 'request',
                url: 'https://www.mocky.io/v2/5ed7aa94320000acdc274ac5',
                method: 'POST',
                params: {
                  id: '#{record.id}',
                },
                successMessage: '删除成功',
              },
              'refreshTable', // 刷新表格
            ],
          },
        ],
      },
    ],
  };
  return (
    <div
      style={{ background: 'rgb(241, 242, 246)', padding: 16, marginTop: 16 }}
    >
      <QueryTable {...config} />
    </div>
  );
};

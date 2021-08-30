import React from "react";
import { CreateForm } from "sula";
import { Card } from "antd";

export default () => {
  const config = {
    fields: [
      {
        name: "name",
        label: "姓名",
        field: {
          type: "input",
          props: {
            placeholder: "请输入",
          },
        },
      },
      {
        name: "profession",
        label: "产品",
        field: {
          type: "input",
          props: {
            placeholder: "请输入",
          },
        },
      },
      {
        name: "rooms",
        label: "是否上线",
        valuePropName: "checked",
        field: "switch",
      },
    ],
    remoteValues: {
      url: "https://www.mocky.io/v2/5ed7af12320000a0cc274b00",
      method: "get",
    },
    submit: {
      url: "https://www.mocky.io/v2/5185415ba171ea3a00704eed",
      method: "POST",
    },
  };

  return (
    <Card title="表单模板">
      <CreateForm {...config} />
    </Card>
  );
};

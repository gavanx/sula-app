import React from "react";
import { ModalForm, Button } from "sula";
export default () => {
  const formRef = React.useRef(null);
  const handleClick = () => {
    formRef.current.show({
      title: "弹框标题",
      fields: [
        {
          name: "name",
          label: "姓名",
          field: "input",
        },
      ],
      submit: {
        url: "https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5",
        method: "post",
      },
    });
  };
  return (
    <div>
      <Button onClick={handleClick}>弹框</Button>
      <ModalForm ref={formRef} />
    </div>
  );
};

import { Button, Modal, Label, TextInput } from "flowbite-react";

const CreateModal = () => {
  return (
    // <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal show={true}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-3">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="رقم العميل (ID)" />
            </div>
            <TextInput id="small" type="text" sizing="sm"  placeholder="ID"/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="رقم الهويه" />
            </div>
            <TextInput id="base" type="text" sizing="sm"  placeholder="رقم الهويه"/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="التليفون" />
            </div>
            <TextInput id="large" type="text" sizing="sm" placeholder="التليفون"/>
          </div>
         
          <div className="col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="large" value="اسم العميل" />
            </div>
            <TextInput id="large" type="text" sizing="sm" placeholder="اسم العميل"/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="الصلاحيه" />
            </div>
            <TextInput id="large" type="text" sizing="sm"  />
          </div>
          <div className="col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="large" value="المسوقيين" />
            </div>
            <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                <Dropdown label="المسوقيين" inline>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                </Dropdown>
              </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
      <Button onClick={() => setOpenModal(false)}>I accept</Button>
      <Button color="gray" onClick={() => setOpenModal(false)}>
        Decline
      </Button>
    </Modal.Footer> */}
      <Modal.Footer className="gap-2">
        <Button>اضافه</Button>
        <Button color="gray">اغلاق</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModal;

import { Button, Modal, Label, TextInput } from "flowbite-react";

const CreateModal = () => {
  return (
    // <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal show={true}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="grid max-w-md grid-cols-3 gap-4">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="رقم العميل (ID)" />
            </div>
            <TextInput id="small" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="رقم الهويه" />
            </div>
            <TextInput id="base" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="التلي" />
            </div>
            <TextInput id="large" type="text" sizing="sm" />
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

import { Button, Modal, Label, TextInput } from "flowbite-react";

const CreateModal = () => {
  return (
    // <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal show={true}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Small input" />
            </div>
            <TextInput id="small" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Base input" />
            </div>
            <TextInput id="base" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Large input" />
            </div>
            <TextInput id="large" type="text" sizing="lg" />
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

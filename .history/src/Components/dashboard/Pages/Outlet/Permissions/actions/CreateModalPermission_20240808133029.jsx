import { Button, Modal, Label, TextInput, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPermissionModelModel } from "../../../../../store/SharedStore";

const CreateModalPermission = () => {
  const { PermissionModel } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch();

  return (
    // <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal show={PermissionModel}>
      <Modal.Header
        onClick={() => {
          dispatch(setOpenPermissionModelModel(false));
        }}
      ></Modal.Header>
      <Modal.Body>
        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 grid-rows-3 gap-3">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="اسم المستخدم" />
            </div>
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              placeholder="اسم المستخدم"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="كلمه السر" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="sm"
              placeholder="كلمه السر"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="كلمه السر" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="sm"
              placeholder="كلمه السر"
            />
          </div>
          <Dropdown label="Dropdown">
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Dashboard</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Settings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Sign out</Dropdown.Item>
    </Dropdown>
        </div>
      </Modal.Body>
      <Modal.Footer className="gap-2">
        <Button>اضافه</Button>
        <Button
          color="gray"
          onClick={() => {
            dispatch(setOpenPermissionModelModel(false));
          }}
        >
          اغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModalPermission;

import { Button, Modal, Label, TextInput, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCustomerModel } from "../../../../../store/SharedStore";

const CreateModal = () => {
  const { CustomerModel } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch()

  return (
    // <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal show={CustomerModel}>
      <Modal.Header onClick={()=>{dispatch(setOpenCustomerModel(false))}}></Modal.Header>
      <Modal.Body>
        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 grid-rows-3 gap-3">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="رقم العميل (ID)" />
            </div>
            <TextInput id="small" type="text" sizing="sm" placeholder="ID" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="رقم الهويه" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="sm"
              placeholder="رقم الهويه"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="التليفون" />
            </div>
            <TextInput
              id="large"
              type="text"
              sizing="sm"
              placeholder="التليفون"
            />
          </div>

          <div className="col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="large" value="اسم العميل" />
            </div>
            <TextInput
              id="large"
              type="text"
              sizing="sm"
              placeholder="اسم العميل"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="الصلاحيه" />
            </div>
            <div className="flex justify-around  bg-gray-200 p-1 rounded-lg">
              <Dropdown label="مدير" inline>
                <Dropdown.Item>مسوق</Dropdown.Item>
                <Dropdown.Item>مشرف</Dropdown.Item>
                <Dropdown.Item>عميل</Dropdown.Item>
                <Dropdown.Item>موظف</Dropdown.Item>
                <Dropdown.Item>محاسب</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="large" value="المسوقيين" />
            </div>
            <div className="flex justify-center text-center bg-gray-200 p-1 rounded-lg">
              <Dropdown label="اسلام" inline>
                <Dropdown.Item>عبدالله</Dropdown.Item>
                <Dropdown.Item>محمد</Dropdown.Item>
                <Dropdown.Item>خالد</Dropdown.Item>
                <Dropdown.Item>اسامه</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="gap-2">
        <Button>اضافه</Button>
        <Button color="gray" onClick={()=>{dispatch(setOpenCustomerModel(false))}}>اغلاق</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModalGallery;

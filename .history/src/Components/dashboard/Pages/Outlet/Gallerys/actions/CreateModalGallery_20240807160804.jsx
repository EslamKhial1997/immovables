import { Button, Modal, Label, TextInput, Radio } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenGalleryModel } from "../../../../../store/SharedStore";

const CreateModalGallery = () => {
  const { GalleryModel } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch();

  return (
    <Modal show={GalleryModel}>
      <Modal.Header
        onClick={() => {
          dispatch(setOpenGalleryModel(false));
        }}
      ></Modal.Header>
      <Modal.Body>
        <div className="grid grid-flow-row-dense lg:grid-cols-4 grid-cols-1 grid-rows-3 gap-3">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="المساحه" />
            </div>
            <TextInput id="small" type="text" sizing="sm" placeholder="ID" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="السعر" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="sm"
              placeholder="عدد الغرف"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="عدد دورات المياه" />
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
              <Label htmlFor="large" value="عرض الشارع" />
            </div>
            <TextInput
              id="large"
              type="text"
              sizing="sm"
              placeholder="اسم العميل"
            />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="عدد الغرف" />
            </div>
            <TextInput id="small" type="text" sizing="sm" placeholder="ID" />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="عدد الصالات" />
            </div>
            <TextInput id="small" type="text" sizing="sm" placeholder="ID" />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="عدد الصالات" />
            </div>
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="united-state">United States</Label>
            <Radio id="germany" name="countries" value="Germany" />
          </div>

        
        </div>
      </Modal.Body>
      <Modal.Footer className="gap-2">
        <Button>اضافه</Button>
        <Button
          color="gray"
          onClick={() => {
            dispatch(setOpenGalleryModel(false));
          }}
        >
          اغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModalGallery;

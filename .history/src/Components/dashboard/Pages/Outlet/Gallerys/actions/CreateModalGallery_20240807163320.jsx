import {
  Button,
  Modal,
  Label,
  TextInput,
  Radio,
  Dropdown,
  FileInput,
} from "flowbite-react";
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
        <div className="grid grid-flow-row-dense lg:grid-cols-4  md:gri gap-3">
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

          <div>
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
              <Label htmlFor="small" value="عدد المطابخ" />
            </div>
            <TextInput id="small" type="text" sizing="sm" placeholder="ID" />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="عدد البلكونه" />
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
              <Label htmlFor="small" value="غرفه خادمه" />
            </div>
            <div className="grid grid-cols-2">
              {" "}
              <div>
                {" "}
                <Radio id="germany" name="countries" value="Germany" />{" "}
                <Label htmlFor="small" value="نعم" />
              </div>
              <div>
                {" "}
                <Radio id="germany" name="countries" value="Germany" />{" "}
                <Label htmlFor="small" value="لا" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="مستودع" />
            </div>
            <div className="grid grid-cols-2">
              {" "}
              <div>
                {" "}
                <Radio id="germany" name="countries" value="Germany" />{" "}
                <Label htmlFor="small" value="نعم" />
              </div>
              <div>
                {" "}
                <Radio id="germany" name="countries" value="Germany" />{" "}
                <Label htmlFor="small" value="لا" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="small" value="مصعد" />
            </div>
            <div className="grid grid-cols-2">
              {" "}
              <div>
                {" "}
                <Radio id="germany" name="countries" value="Germany" />{" "}
                <Label htmlFor="small" value="نعم" />
              </div>
              <div>
                {" "}
                <Radio id="germany" name="countries" value="Germany" />{" "}
                <Label htmlFor="small" value="لا" />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="الحاله" />
            </div>
            <div className="flex justify-around  bg-gray-200 p-2 rounded-lg">
              <Dropdown label="متاح" inline>
                <Dropdown.Item>متاح</Dropdown.Item>
                <Dropdown.Item>محجوز</Dropdown.Item>
                <Dropdown.Item>مباع</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="النوع" />
            </div>
            <div className="flex justify-around  bg-gray-200 p-2 rounded-lg">
              <Dropdown label="شقه" inline>
                <Dropdown.Item>شقه</Dropdown.Item>
                <Dropdown.Item>فيلا (200-295)</Dropdown.Item>
                <Dropdown.Item>فيلا (300-450)</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="small" value="الصور" />
            </div>
            <FileInput id="file" helperText="تحميل صور الشقه او الفيلا" />
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

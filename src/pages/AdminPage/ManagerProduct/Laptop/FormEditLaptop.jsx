import { Alert, createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputFieldColorCT from "../../../../components/Form/FormAddProduct/CheckboxField/InputFieldColorCT";
import InputFieldBrand from "../../../../components/Form/FormAddProduct/InputFieldBrand";
import InputFieldDesc from "../../../../components/Form/FormAddProduct/InputFieldDesc";
import InputFieldName from "../../../../components/Form/FormAddProduct/InputFieldName";
import InputFieldOps from "../../../../components/Form/FormAddProduct/InputFieldOps";
import InputFieldPrice from "../../../../components/Form/FormAddProduct/InputFieldPrice";
import InputFieldRam from "../../../../components/Form/FormAddProduct/InputFieldRam";
import InputFieldScreen from "../../../../components/Form/FormAddProduct/InputFieldScreen";
import InputFieldStorage from "../../../../components/Form/FormAddProduct/InputFieldStorage";
import InputFieldType from "../../../../components/Form/FormAddProduct/InputFieldType";
import InputFieldVideoDemo from "../../../../components/Form/FormAddProduct/InputFieldVideoDemo";
import { EDIT_LAPTOP_SAGA } from "../../../../redux/sagas/types/main";
import {
  selectColor,
  selectOpsBrandLaptop,
  selectOpsScreen,
  selectOpsSys,
  selectRamLaptop,
  selectStorageLaptop,
  selectTypeLaptop,
} from "../../../../utils/Settings/data";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51d5",
    },
    secondary: {
      main: "#ffc400",
    },
  },
});

export default function FormEditLaptop(props) {
  const dispatch = useDispatch();
  const { product } = props;
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        name: product?.name,
        images: [],
        description: product?.description,
        brand: product?.brand,
        price: product?.price,
        type: product?.type,
        performance: product?.performance,
        ram: product?.ram,
        storage: product?.storage,
        screen: product?.screen,
        operateSys: product?.operateSys,
        idVideo: product?.idVideo,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Bạn không được bỏ trống"),
        description: Yup.string().required("Bạn không được bỏ trống"),
        brand: Yup.string().required("Bạn không được bỏ trống"),
        price: Yup.string().required("Bạn không được bỏ trống"),
        type: Yup.string().required("Bạn không được bỏ trống"),
        operateSys: Yup.string().required("Bạn không được bỏ trống"),
        ram: Yup.string().required("Bạn không được bỏ trống"),
        storage: Yup.string().required("Bạn không được bỏ trống"),
        idVideo: Yup.string().required("Bạn không được bỏ trống"),
        screen: Yup.string().required("Bạn không được bỏ trống"),
        images: Yup.array().test({
          message: "Sản phẩm phải có ít nhất một màu và hình ảnh",
          test: (arr) => arr.length !== 0,
        }),
      }),
      onSubmit: (values) => {
        dispatch({
          type: EDIT_LAPTOP_SAGA,
          values: {
            ...values,
            _id: product._id,
            oldImgs: product?.images,
          },
        });
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ m: 0.5 }}>
            Cập nhật laptop
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* NAME */}
            <h1 className="font-bold">Tên sản phẩm</h1>
            <InputFieldName
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            {/* END NAME */}

            {/* DESCRIPTION */}
            <h1 className="my-2 font-semibold">Mô tả</h1>
            <InputFieldDesc
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            {/* END DESCRIPTION */}

            {/* BRAND */}
            <div className="grid grid-cols-1 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Nhãn hiệu</h1>
                <InputFieldBrand
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectOpsBrandLaptop}
                />
              </div>
            </div>
            {/* END BRAND  */}
            {/* RAM  + STORAGE */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Ram</h1>
                <InputFieldRam
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectRamLaptop}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Bộ nhớ</h1>
                <InputFieldStorage
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectStorageLaptop}
                />
              </div>
            </div>
            {/* END RAM  + STORAGE */}

            {/* OPERATESYS  + TYPE */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Hệ điều hành</h1>
                <InputFieldOps
                  touched={touched}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  data={selectOpsSys}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Loại laptop</h1>
                <InputFieldType
                  touched={touched}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  data={selectTypeLaptop}
                />
              </div>
            </div>
            {/* END OPERATESYS  + TYPE */}

            {/* PERFOMANCE + PRICE */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Màn hình</h1>
                <InputFieldScreen
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectOpsScreen}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Giá</h1>
                <InputFieldPrice
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                />
              </div>
            </div>
            {/* END PERFOMANCE + PRICE */}

            {/*  VIDEO */}
            <div className="">
              <h1 className="font-bold">ID Video sản phẩm</h1>
              <Alert severity="info">
                Bạn có thể lấy ID này: ptLhOKtyu9U
                <br />
              </Alert>
              <Alert severity="warning" className="mt-2">
                Lưu ý: ID trên chỉ là ID tạm thời cho video demo sản phẩm . Nếu
                muốn lấy id chính xác bạn cần phải lấy
                <a
                  className="text-sky-600 mx-2"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tại đây
                </a>
              </Alert>
              <InputFieldVideoDemo
                touched={touched}
                values={values}
                errors={errors}
                handleChange={handleChange}
              />
            </div>
            {/*  END VIDEO */}

            {/* IMAGES + COLOR */}
            <div className="grid grid-cols-1 ">
              <div className="my-2 font-semibold">
                <h1 className="">Màu sắc và hình ảnh</h1>
                <Alert severity="warning" className="mt-2">
                  Khi chọn màu bạn phải upload ít nhất 1 hình ảnh của sản phẩm
                </Alert>
                <Alert severity="warning" className="mt-2">
                  Khi cập nhật lại sản phẩm bạn phải thêm hình lại từ đầu
                </Alert>
              </div>
              <InputFieldColorCT
                values={values}
                touched={touched}
                errors={errors}
                setFieldValue={setFieldValue}
                data={selectColor}
              />
            </div>
            {/* IMAGES + COLOR */}

            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cập nhật
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

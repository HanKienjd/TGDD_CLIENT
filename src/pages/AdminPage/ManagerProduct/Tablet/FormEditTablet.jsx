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
import InputFieldPerfomance from "../../../../components/Form/FormAddProduct/InputFieldPerfomance";
import InputFieldPrice from "../../../../components/Form/FormAddProduct/InputFieldPrice";
import InputFieldRam from "../../../../components/Form/FormAddProduct/InputFieldRam";
import InputFieldStorage from "../../../../components/Form/FormAddProduct/InputFieldStorage";
import InputFieldType from "../../../../components/Form/FormAddProduct/InputFieldType";
import InputFieldVideoDemo from "../../../../components/Form/FormAddProduct/InputFieldVideoDemo";
import { EDIT_TABLET_SAGA } from "../../../../redux/sagas/types/main";
import {
  selectColor,
  selectOpsBrandTablet,
  selectPerformanceSmartPhone,
  selectRamSmartPhone,
  selectStorageTablet,
  selectTypeSmartPhone,
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

export default function FormEditTablet(props) {
  const dispatch = useDispatch();
  const { product } = props;
  // console.log("product detail: ", product);
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
        idVideo: product?.idVideo,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        description: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        brand: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        price: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        type: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        performance: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        ram: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        storage: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        idVideo: Yup.string().required("B???n kh??ng ???????c b??? tr???ng"),
        images: Yup.array().test({
          message: "S???n ph???m ph???i c?? ??t nh???t m???t m??u v?? h??nh ???nh",
          test: (arr) => arr.length !== 0,
        }),
      }),
      onSubmit: (values) => {
        console.log("values: ", values);
        dispatch({
          type: EDIT_TABLET_SAGA,
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
            C???p nh???t tablet
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* NAME */}
            <h1 className="font-bold">T??n s???n ph???m</h1>
            <InputFieldName
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            {/* END NAME */}

            {/* DESCRIPTION */}
            <h1 className="my-2 font-semibold">M?? t???</h1>
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
                <h1 className="my-2 font-semibold">Nh??n hi???u</h1>
                <InputFieldBrand
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectOpsBrandTablet}
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
                  data={selectRamSmartPhone}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">B??? nh???</h1>
                <InputFieldStorage
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectStorageTablet}
                />
              </div>
            </div>
            {/* END RAM  + STORAGE */}

            {/* TYPE  + CAMERA */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Gi??</h1>
                <InputFieldPrice
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Lo???i ??i???n tho???i</h1>
                <InputFieldType
                  touched={touched}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  data={selectTypeSmartPhone}
                />
              </div>
            </div>
            {/* END TYPE  + CAMERA */}

            {/* PERFOMANCE + PRICE */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Hi???u n??ng</h1>
                <InputFieldPerfomance
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectPerformanceSmartPhone}
                />
              </div>
            </div>
            {/* END PERFOMANCE + PRICE */}

            {/*  VIDEO */}
            <div className="">
              <h1 className="font-bold">ID Video s???n ph???m</h1>
              <Alert severity="info">
                B???n c?? th??? l???y ID n??y: ptLhOKtyu9U
                <br />
              </Alert>
              <Alert severity="warning" className="mt-2">
                L??u ??: ID tr??n ch??? l?? ID t???m th???i cho video demo s???n ph???m . N???u
                mu???n l???y id ch??nh x??c b???n c???n ph???i l???y
                <a
                  className="text-sky-600 mx-2"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  T???i ????y
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
                <h1 className="">M??u s???c v?? h??nh ???nh</h1>
                <Alert severity="warning" className="mt-2">
                  Khi ch???n m??u b???n ph???i upload ??t nh???t 1 h??nh ???nh c???a s???n ph???m
                </Alert>
                <Alert severity="warning" className="mt-2">
                  Khi c???p nh???t l???i s???n ph???m b???n ph???i th??m h??nh l???i t??? ?????u
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
              C???p nh???t
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

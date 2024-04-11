import * as Yup from 'yup';

const personalInfoSchema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email format")
      .required("Email is required"),
    tel: Yup.string().trim().required("Phone number is required"),
    date: Yup.string().trim().required("Date of birth is required"),
});

export default personalInfoSchema;

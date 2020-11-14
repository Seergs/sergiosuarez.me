import { useState, useRef, useEffect } from "react";
function useForm({ initialaValues = {}, onSubmit }) {
  const [values, setValues] = useState(initialaValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialaValues);
      setErrors({});
      setTouched({});
      setOnSubmitting(false);
      setOnBlur(false);
    }

    formRendered.current = false;
  }, [initialaValues]);

  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    e.persist();
    setValues({ ...values, [name]: value });
  }

  function handleBlur(e) {
    const { target } = e;
    const { name } = target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  }

  function handleSubmit(e) {
    if (e) e.preventDefault();
    setErrors({ ...errors });
    onSubmit({ values, errors });
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}

export default useForm;

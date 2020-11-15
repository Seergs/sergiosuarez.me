import { useState } from "react";
function useForm({ initialValues = {}, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    e.persist();
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    if (e) e.preventDefault();

    onSubmit();
  }

  return {
    values,
    isSubmitted,
    setIsSubmitted,
    handleChange,
    handleSubmit,
  };
}

export default useForm;

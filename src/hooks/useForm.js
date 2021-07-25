import { useState } from 'react';

function useForm({ initialValues = {} }) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    e.persist();
    setValues({ ...values, [name]: value });
  }

  return {
    values,

    handleChange,
  };
}

export default useForm;

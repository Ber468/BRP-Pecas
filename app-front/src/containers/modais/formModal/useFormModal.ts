import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
}

export const useFormModal = () => {
  const [open, _setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const handleClose = () => _setOpen(false);
  const handleOpen = () => _setOpen(true);

  const onSubmit = handleSubmit((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data));
        resolve(data);
        handleClose();
      }, 1000);
    });
  });

  return {
    open,
    handleClose,
    handleOpen,
    control,
    onSubmit,
    errors,
    isSubmitting,
  };
};

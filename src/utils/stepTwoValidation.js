export const isStepTwoValid = (formValue) => {
    let errors = {};
    let isValid = true;
  
    if (!formValue.email?.trim()) {
      errors.email = "Имэйл хаягаа оруулна уу";
      isValid = false;
    }
    if (!formValue.phoneNumber?.trim()) {
      errors.phoneNumber = "Утасны дугаараа оруулна уу";
      isValid = false;
    }
    if (!formValue.password?.trim()) {
      errors.password = "Нууц үгээ оруулна уу";
      isValid = false;
    }
    if (formValue.password !== formValue.confirmPassword) {
      errors.confirmPassword = "Нууц үг таарахгүй байна";
      isValid = false;
    }
  
    return { isValid, errors };
  };
  
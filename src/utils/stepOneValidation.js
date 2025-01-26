export const isStepOneValid = (formValue) => {
    let errors = {};
    let isValid = true;
  
    if (!formValue.firstName.trim()) {
      errors.firstName = "Нэрээ оруулна уу";
      isValid = false;
    }
    if (!formValue.lastName.trim()) {
      errors.lastName = "Овгоо оруулна уу";
      isValid = false;
    }
    if (!formValue.userName.trim()) {
      errors.userName = "Хэрэглэгчийн нэрээ оруулна уу";
      isValid = false;
    }
  
    return { isValid, errors };
  };
  
export const isStepThreeValid = (formValue) => {
    let errors = {};
    let isValid = true;
  
    if (!formValue.dateOfBirth?.trim()) {
      errors.dateOfBirth = "Төрсөн огноогоо оруулна уу";
      isValid = false;
    }
    if (!formValue.profileImage) {
      errors.profileImage = "Профайл зургийг оруулна уу";
      isValid = false;
    }
  
    return { isValid, errors };
  };
  
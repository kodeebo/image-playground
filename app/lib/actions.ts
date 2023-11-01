"use server";

export const imageAction = async (formData: FormData) => {
  const rawFormData = Object.fromEntries(formData.entries());
  console.log({ rawFormData });
};

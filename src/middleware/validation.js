export const validate = () => {
  console.log("====================================");
  console.log("validation");
  console.log("====================================");
};

export const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });
    if (error) {
      const messages = error.details.map((detail) => detail.message);
      return res
        .status(400)
        .json({ Message: "Validation Error", details: messages });
    }
    next();
  };
};

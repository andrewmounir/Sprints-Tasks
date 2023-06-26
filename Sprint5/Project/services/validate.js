const z = require("zod");
const validateProduct = (req, res, next) => {
  try {

const emailAndpassword_Validator = z.object({

  email: z.string().email(),
  password: z.string()
  .min(8, 'Password must be at least 8 characters long')
  .refine(value => /[A-Z]/.test(value), 'Password must contain at least 1 uppercase letter')
  .refine(value => /[a-z]/.test(value), 'Password must contain at least 1 lowercase letter')
  .refine(value => /[!@#$%^&*()]/.test(value), 'Password must contain at least 1 special character')



})


    req.body = emailAndpassword_Validator.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json(JSON.parse(error.message));
  }
};

module.exports = { validateProduct };

const z = require("zod");
const validateProduct = (req, res, next) => {
  try {
    const schema = z.object({
      title: z.string(),
      price: z.number(),
      description: z.string(),
      categoryId: z.number(),
      images: z.array(z.string())
    });

    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json(JSON.parse(error.message));
  }
};

module.exports = { validateProduct };

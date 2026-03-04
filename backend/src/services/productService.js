import productRepository from '../repositories/productRepository.js';

const productService = {
    createProduct: async ({ title, description, priceUZS, images }) => {
      if (!title || !description || priceUZS === undefined) {
        throw new Error("title, description, and priceUZS are required");
      }
  
      if (priceUZS < 0) {
        throw new Error("priceUZS must be a positive number");
      }
  
      return await productRepository.create({
        title,
        description,
        priceUZS,
        images: images ?? [],
      });
    },

    getAllProducts: async () => {
      return await productRepository.findAll();
    },

    getProductById: async (id) => {
      const product = await productRepository.findById(id);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    },

    updateProduct: async (id, { title, description, priceUZS, images }) => {
      const existingProduct = await productRepository.findById(id);
      if (!existingProduct) {
        throw new Error("Product not found");
      }

      if (priceUZS !== undefined && priceUZS < 0) {
        throw new Error("priceUZS must be a positive number");
      }

      return await productRepository.update(id, {
        title: title ?? existingProduct.title,
        description: description ?? existingProduct.description,
        priceUZS: priceUZS !== undefined ? priceUZS : existingProduct.priceUZS,
        images: images ?? existingProduct.images,
      });
    },

    deleteProduct: async (id) => {
      const existingProduct = await productRepository.findById(id);
      if (!existingProduct) {
        throw new Error("Product not found");
      }
      return await productRepository.delete(id);
    },
    
  };
  
  export default productService;

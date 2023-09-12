import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    const categories = await prisma.category.findMany();

    // EDIT AND POST
    const { id } = req.params;

    if (id) {
      const product = await prisma.product.findFirst({
        where: {
          id: Number(id),
        },
        include: {
          category: true,
        },
      });

      return res.render("pages/index", {
        products: products,
        categories: categories,
        product: product,
      });
    }

    res.render("pages/index", {
      products: products,
      categories: categories,
      product: undefined,
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
};

export const saveProduct = async (req, res) => {
  try {
    const { id, name, price, amount, category } = req.body;

    if (id) {
      return await updateProduct(id, { name, price, amount, category }, res);
    }

    await prisma.product.create({
      data: {
        name,
        price: Number(price),
        amount: Number(amount),
        categoryId: Number(category),
      },
    });
    res.redirect("/view/products");
  } catch (error) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
};

export const showProduct = async (req, res) => {
  try {
    await getAllProducts(req, res);
    res.redirect("/view/products");
  } catch (error) {
    console.log(error.message);
  } finally {
    prisma.$disconnect();
  }
};

const updateProduct = async (id, { name, price, amount, category }, res) => {
  await prisma.product.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      price: Number(price),
      amount: Number(amount),
      categoryId: Number(category),
    },
  });

  return res.redirect("/view/products");
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    res.redirect("/view/products");
  } catch (error) {
    console.log(error.message);
  } finally {
    prisma.$disconnect();
  }
};

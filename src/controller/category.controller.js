import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.render("pages/category", { categories: categories });
  } catch (error) {
    res.render("pages/category", { error: error.message, categories: null });
  } finally {
    await prisma.$disconnect();
  }
};

export const postCategory = async (req, res) => {
  try {
    const { name } = req.body;
    await prisma.category.createMany({ data: { name: name } });
    res.redirect("/view/categories");
  } catch (error) {
    console.log(error.message);
    res.render("pages/category", { error: error.message, categories: null });
  } finally {
    await prisma.$disconnect();
  }
};

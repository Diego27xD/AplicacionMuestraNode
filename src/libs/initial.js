import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createCategories = async () => {
  try {
    const count = await prisma.category.count();
    if (count > 0) return;
    const values = await prisma.category.createMany({
      data: [{ name: "calzado" }, { name: "pantalones" }, { name: "poleras" }],
    });
    console.log(`Categories created ${values}`);
  } catch (error) {
    console.log(error.message);
  }
};

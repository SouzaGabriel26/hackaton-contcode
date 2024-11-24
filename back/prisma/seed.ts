import { prismaClient } from "../lib/prismaClient";

async function main() {
  await prismaClient.budgetItems.deleteMany();
  await prismaClient.budgets.deleteMany();
  await prismaClient.users.deleteMany();
  await prismaClient.categories.deleteMany();

  await prismaClient.categories.createMany({
    data: [{ name: "Pizzaria" }],
  });
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });

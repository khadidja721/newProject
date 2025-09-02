import prismaClient from "./client.js";

async function main() {
  // Add seed data here as needed
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });


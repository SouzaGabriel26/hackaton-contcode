/*
  Warnings:

  - You are about to drop the column `quantity` on the `budget_items` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `budget_items` table. All the data in the column will be lost.
  - You are about to drop the column `final_date` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `initial_date` on the `budgets` table. All the data in the column will be lost.
  - Added the required column `category` to the `budget_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profit_margin` to the `budget_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_production_price` to the `budget_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_selling_price` to the `budget_items` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `budget_items` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `provided_budget` to the `budgets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "budget_items" DROP COLUMN "quantity",
DROP COLUMN "value",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "profit_margin" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "unit_production_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "unit_selling_price" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "final_date",
DROP COLUMN "initial_date",
ADD COLUMN     "provided_budget" DOUBLE PRECISION NOT NULL;

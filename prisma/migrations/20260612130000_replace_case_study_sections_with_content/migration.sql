-- Merge challenge + solution + results into a single content column
ALTER TABLE "CaseStudy" ADD COLUMN "content" TEXT NOT NULL DEFAULT '';

-- Carry existing data forward as concatenated HTML
UPDATE "CaseStudy"
SET "content" = '<h2>The Challenge</h2>' || "challenge" ||
                '<h2>The Solution</h2>'  || "solution"  ||
                '<h2>The Results</h2>'   || "results";

-- Remove the old columns
ALTER TABLE "CaseStudy" DROP COLUMN "challenge";
ALTER TABLE "CaseStudy" DROP COLUMN "solution";
ALTER TABLE "CaseStudy" DROP COLUMN "results";

-- Drop the temporary default
ALTER TABLE "CaseStudy" ALTER COLUMN "content" DROP DEFAULT;

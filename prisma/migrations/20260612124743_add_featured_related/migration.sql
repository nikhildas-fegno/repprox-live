-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CaseStudy" ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "RelatedBlog" (
    "blogId" TEXT NOT NULL,
    "relatedBlogId" TEXT NOT NULL,

    CONSTRAINT "RelatedBlog_pkey" PRIMARY KEY ("blogId","relatedBlogId")
);

-- CreateTable
CREATE TABLE "RelatedCaseStudy" (
    "caseStudyId" TEXT NOT NULL,
    "relatedCaseStudyId" TEXT NOT NULL,

    CONSTRAINT "RelatedCaseStudy_pkey" PRIMARY KEY ("caseStudyId","relatedCaseStudyId")
);

-- AddForeignKey
ALTER TABLE "RelatedBlog" ADD CONSTRAINT "RelatedBlog_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedBlog" ADD CONSTRAINT "RelatedBlog_relatedBlogId_fkey" FOREIGN KEY ("relatedBlogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedCaseStudy" ADD CONSTRAINT "RelatedCaseStudy_caseStudyId_fkey" FOREIGN KEY ("caseStudyId") REFERENCES "CaseStudy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedCaseStudy" ADD CONSTRAINT "RelatedCaseStudy_relatedCaseStudyId_fkey" FOREIGN KEY ("relatedCaseStudyId") REFERENCES "CaseStudy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

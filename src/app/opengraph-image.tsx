import { ogImageSize, ogImageContentType, renderSocialCard } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "RepPro X — Run the whole business from one connected ERP";

export default function Image() {
  return renderSocialCard("RepPro X · ERP");
}

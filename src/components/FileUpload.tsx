import { updateSearchParameters } from "@/lib/utils";
import { promises as fs } from "fs";
import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function FileUpload() {
  const fileUploadHandler = async (formData: FormData) => {
    "use server";
    const referer = headers().get("referer");
    const file = formData.get("file") as File;

    if (!file || file.size === 0) {
      return { error: "No file was uploaded" };
    }
    try {
      const data = await file.arrayBuffer();
      await fs.writeFile(
        `${process.cwd()}/tmp/${file.name}`,
        Buffer.from(data)
      );
      const search = JSON.stringify(referer)?.split("?")[1];
      updateSearchParameters(
        "fileUpload",
        "success",
        search,
        permanentRedirect
      );
    } catch (error) {
      //   updateSearchParameters(referer, "fileUpload", "error");
    }
  };

  return (
    <form action={fileUploadHandler}>
      <Input type="file" name="file" accept=".png" required />
      <Button>Upload</Button>
    </form>
  );
}

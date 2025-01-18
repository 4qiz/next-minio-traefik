import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import UploadGallery from "./_components/upload-gallery";
import { ScrollArea } from "~/components/ui/scroll-area";
import ThemeToggle from "~/components/shared/theme-toggle";
import UploadForm from "./_components/upload-form";

export const dynamic = "force-dynamic";

export default async function OverViewPage() {
  return (
    <div className="flex flex-col gap-3 md:max-w-4xl">
      <Card className="col-span-1 h-fit">
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <CardTitle>Upload</CardTitle> <ThemeToggle />
          </div>
        </CardHeader>
        <CardContent>
          <UploadForm />
        </CardContent>
      </Card>
      <Card className="">
        <ScrollArea className="h-full">
          <CardHeader>
            <CardTitle>Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <UploadGallery />
          </CardContent>
        </ScrollArea>
      </Card>
    </div>
  );
}

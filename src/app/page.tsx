import AlertMessage from "@/components/AlertMessage";
import Box from "@/components/Box";
import FileUpload from "@/components/FileUpload";

interface HomeProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ params, searchParams }: HomeProps) {
  return (
    <Box>
      <main className="flex gap-y-5 flex-col ">
        <div>
          <h1>Hello, Next.js!</h1>
          <p>Welcome to your new Next.js application.</p>
          <p>
            Get started by editing <code>pages/index.js</code> or adding more
            pages.
          </p>
        </div>

        <FileUpload searchParams={searchParams} />
        <AlertMessage
          title="Success"
          message="Successfully uploaded this file."
          searchParams={searchParams}
        />
        {/* <AlertMessage title="Error" message="Can't upload file!" type="error" />; */}
      </main>
    </Box>
  );
}

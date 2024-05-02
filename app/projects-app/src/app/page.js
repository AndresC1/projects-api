import NavbarComponent from "@/app/Components/NavbarComponent";
import MainLayout from "@/app/Layouts/MainLayout";

export default function Home() {
  return (
      <MainLayout>
          <div className="p-4">
              <h1 className="text-3xl font-bold text-center">Welcome to the Projects App</h1>
              <p className="text-center">This is a simple project management app built with Next.js and Tailwind
                  CSS.</p>
              <p className="text-center">Click the Sign In button to get started.</p>
          </div>
      </MainLayout>
  );
}

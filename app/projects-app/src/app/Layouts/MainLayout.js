import NavbarComponent from "@/app/Components/NavbarComponent";

export default function MainLayout({ children }) {
    return (
        <main className="flex-1 p-4">
            <NavbarComponent/>
            {children}
        </main>
    );
}
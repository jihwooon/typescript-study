export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
          Home Layout
          {children}
        </main>
    );
  }
  
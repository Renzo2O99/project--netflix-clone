import { Logo } from "@/components/Shared/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background container */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-[url('/login/login-bg.jpg')] bg-cover bg-no-repeat opacity-40"
          />
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="px-8 py-5">
          <div className="max-w-7xl mx-auto">
            <Logo />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="bg-black/70 px-8 py-16 sm:px-14">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
import PrivateHeader from '@/components/global/PrivateHeader';
import Container from '@/components/layout/Container';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { getCurrentUserService } from '@/features/auth/lib/services';
import { Toaster } from '@repo/ui/toaster';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userPromise = getCurrentUserService();

  return (
    <AuthProvider userPromise={userPromise}>
      <PrivateHeader />
      <Container tag="main" className="py-6">
        {children}
      </Container>
      <Toaster />
    </AuthProvider>
  );
}

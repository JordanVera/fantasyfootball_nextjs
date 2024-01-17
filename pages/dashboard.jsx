// Example of a protected page
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Appbar from '../components/Appbar';

const Dashboard_Protected = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) signIn(); // Redirect to sign-in if not authenticated
  }, [session, status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Appbar />
      <h1>Protected Page</h1>
      {/* Your protected content here */}
    </div>
  );
};

export default Dashboard_Protected;

// Example of a protected page
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import UserService from '@/services/UserService';
import { UserContext } from '@/context/UserContext';
import { Avatar } from '@material-tailwind/react';
import CheckoutButton from '@/components/buttons/CheckoutButton';

const Dashboard_Protected = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { users, loading } = useContext(UserContext);

  const items = [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    },
  ];

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading

    if (!session) signIn(); // Redirect to sign-in if not authenticated
  }, [session, status, router]);

  useEffect(() => {
    console.log('UZRZ');
    console.log(users);
  }, [users]);

  if (loading || status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1>Protected Page</h1>
      <CheckoutButton items={items} />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Avatar
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users?.map((user) => (
            <tr key={user.id} className="bg-gray-900">
              <td className="px-6 py-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Avatar
                      className="h-10 w-10 rounded-full"
                      src={user.image}
                      alt={user.name.split('')[0]}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-white">
                      {user.name}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {/* Additional user information */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard_Protected;

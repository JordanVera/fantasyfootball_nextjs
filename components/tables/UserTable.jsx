import { useEffect } from 'react';
import { Avatar } from '@material-tailwind/react';

const UserTable = ({ users }) => {
  useEffect(() => {
    console.log('UZRZ');
    console.log(users);
  }, [users]);

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            {Array.from({ length: 18 }).map((_, index) => (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                week {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users?.map((user) => {
            const groupedPicks = user.Picks.reduce((grouped, pick) => {
              (grouped[pick.entryNumber] = grouped[pick.entryNumber] || {})[
                pick.week
              ] = pick;
              return grouped;
            }, {});

            console.log('groupedPicks for user ', user.name);
            console.log(groupedPicks);

            return Array.from({ length: user.bullets }).map((_, index) => (
              <tr key={`${user.id}-${index}`} className="bg-gray-900 w-full">
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
                        {user.name} {`(${index + 1})`}
                      </p>
                    </div>
                  </div>
                </td>

                {Array.from({ length: 18 }).map((_, weekIndex) => (
                  <td className="px-6 py-4 whitespace-nowrap">
                    {groupedPicks[index]?.[weekIndex]?.team}
                  </td>
                ))}
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;

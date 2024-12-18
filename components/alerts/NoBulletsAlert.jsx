import { Alert, Typography } from '@material-tailwind/react';
import { useUser } from '@/context/UserContext';

function IconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function NoBulletsAlert() {
  const { setRegistrationOpen, setOpenPicksDialog } = useUser();

  return (
    <div className="flex items-start justify-between gap-5 p-4 mb-4 text-xs font-medium text-red-500 border-l-4 border-red-500 rounded-r-lg bg-red-500/20">
      <IconSolid />
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">
          You currently do not have any entries.
        </h3>
        <ul className="mt-2 ml-2 list-disc list-inside">
          <li className="text-sm ">
            <button
              onClick={() => {
                setRegistrationOpen(true);
                setOpenPicksDialog(false);
              }}
              className="underline hover:text-white"
            >
              Buy-in to the tournament by clicking here.
            </button>
          </li>
          <li className="text-sm">
            Once you buy-in come back to this modal to make your selections.
          </li>
        </ul>
      </div>
    </div>

    // <Alert
    //   icon={<IconSolid />}
    //   className="mb-5 bg-gradient-to-tl from-orange-600 to-red-500"
    // >
    //   <h3 className="font-bold text-md">
    //     You currently do not have any entries.
    //   </h3>
    //   <ul className="mt-2 ml-2 list-disc list-inside">
    //     <li className="text-sm ">
    //       <button
    //         onClick={() => {
    //           setRegistrationOpen(true);
    //           setOpenPicksDialog(false);
    //         }}
    //         className="underline"
    //       >
    //         Buy-in to the tournament by clicking here.
    //       </button>
    //     </li>
    //     <li className="text-sm">
    //       Once you buy-in come back to this modal to make your selections.
    //     </li>
    //   </ul>
    // </Alert>
  );
}

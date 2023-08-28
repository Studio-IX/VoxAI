import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>This is the dashboard page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="h-full relative bg-[#14131C] items-center flex">
      <div className="h-[95%] w-[99%]">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0">
        <div>
            <Sidebar apiLimitCount={apiLimitCount} />
          </div>
        </div>
        <main className="bg-[#1A1924] h-full rounded-[25px] ml-[350px]">
          <Navbar />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="h-full relative bg-[#14131C] items-center flex px-5 md:px-0">
      <div className=" h-full md:h-[95%] w-full md:w-[99%]">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0">
        <div>
            <Sidebar apiLimitCount={apiLimitCount} />
          </div>
        </div>
        <main className="md:bg-[#1A1924] h-full rounded-[25px] md:ml-[350px]">
          <Navbar />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

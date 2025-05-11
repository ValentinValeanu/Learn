import { Suspense } from "react";
import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchLatestInvoices, fetchCardData } from "@/app/lib/data";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";

const images = Array.from(Array(10).keys());

/*
<div>
    <p className="font-sans text-lg text-center font-bold my-3">Images</p>

    <div className="grid md:grid-cols-2 gap-2 h-full">
    {images.map((key) => (
        <div
        key={key}
        className="relative flex flex-col md:flex-row justify-between align-middle"
        >
        <div className="flex-shrink-1">
            <Image
            src="/dashboard/test.jpg"
            alt="dog"
            height={200}
            width={300}
            objectFit="contain"
            />
        </div>

        <div className="w-full p-3 bg-slate-200">
            <h2 className="text-pink-400">Golden Retriever</h2>

            <p> This is a very pink dog that can bark at you.</p>
        </div>
        </div>
    ))}
    </div>
</div>
*/

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}

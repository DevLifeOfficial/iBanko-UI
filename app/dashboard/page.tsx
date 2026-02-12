import MyCard from '@/components/ui/MyCard'
import FinancialRecord from '@/components/ui/FinancialRecord'
import Transactions from '@/components/ui/Transactions'
import MoneyFlow from '@/components/ui/MoneyFlow'
import SendMoneyTo from '@/components/ui/SendMoneyTo'
import SchedulePayment from '@/components/ui/SchedulePayment'
import AvailableCard from "@/components/ui/AvailableCard";

export default function Page() {
  return (
    <div className="p-2 sm:p-6 w-full">

      <div className="flex flex-col xl:flex-row gap-6">

        <div className="flex-1 space-y-6">
          <MyCard />
          <FinancialRecord />
          <MoneyFlow />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SendMoneyTo />
            <SchedulePayment />
          </div>
        </div>

        <div className="w-full xl:w-95 bg-white rounded-2xl shadow-sm space-y-6 p-2 lg:p-4">
          <Transactions />
          <AvailableCard />
        </div>

      </div>

    </div>
  )
}

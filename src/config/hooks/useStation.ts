import { create } from "zustand";
interface TransactionData {
    beginning_balance: number;
    write_offs_amount: number;
    payment_amount: number;
    latest_balance: number;
}

interface ContractData {
    transaction_data: {
        paid_count: number;
        not_paid_count: number;
        partially_paid_count: number;
    };
    billing_data: {
        taxed: number;
        not_taxed: number;
    };
}

interface typeStation {
    transaction_data: TransactionData[];
    contract_data: ContractData;
    setTransactionData: (data: TransactionData[]) => void;
    setContractData: (data: ContractData) => void;
}

const useStations = create<typeStation>((set) => ({
    transaction_data: [],
    contract_data: {
        transaction_data: {
            paid_count: 0,
            not_paid_count: 0,
            partially_paid_count: 0,
        },
        billing_data: {
            taxed: 0,
            not_taxed: 0,
        },
    },
    setTransactionData: (data) => set(() => ({ transaction_data: data })),
    setContractData: (data) => set(() => ({ contract_data: data })),
}));

export default useStations;

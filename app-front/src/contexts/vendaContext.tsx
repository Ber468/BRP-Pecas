// import { createContext, ReactNode, useContext, useReducer } from 'react';

// type State = {
//     currentVenda: number;
//     data: Date;
//     valorTotal: number;
//     usuario: string;
//     cliente: string;
// };
// type Action = { 
//     type: VendaActions; 
//     payload: any;
// };
// type ContextType = {
//     state: State;
//     dispatch: (action: Action) => void;
// }
// type VendaProviderProps = {
//     children: ReactNode;
// }

// const initialData = {
//     currentVenda: 0,
//     date: new Date(),
//     amount: 0,
//     user: '',
//     client: ''
// }

// export const VendaContext = createContext<ContextType | undefined>(undefined);

// export enum VendaActions {
//     setCurrentVenda,
//     setDate,
//     setAmount,
//     setUser,
//     setClient
// }
// const VendaReducer = (state: State, action: Action) => {
//     switch (action.type) {
//         case VendaActions.setCurrentVenda:
//             return { ...state, currentVenda: action.payload };
//         case VendaActions.setDate:
//             return { ...state, date: action.payload };
//         case VendaActions.setAmount:
//             return { ...state, amount: action.payload };
//         case VendaActions.setUser:
//             return { ...state, user: action.payload };
//         case VendaActions.setClient:
//             return { ...state, client: action.payload };
//         default:
//             return state;
//     }
// }

// export const VendaProvider = ({children}: VendaProviderProps) => {
//     const [state, dispatch] = useReducer(VendaReducer, initialData);
//     const value = { state, dispatch };
//     return (
//         <VendaContext.Provider value={value}>
//             {children}
//         </VendaContext.Provider>
//     );
// }

// export const useVenda = () => {
//     const context = useContext(VendaContext);
//     if(context === undefined) {
//         throw new Error('useVenda precisa ser usado dentro do VendaProvider');
//     }
//     return context;
// };

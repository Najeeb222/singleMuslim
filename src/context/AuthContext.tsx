import { createContext, useContext, ReactNode } from "react";

// Define shape of context value
interface AuthContextType {
    user: boolean;
    // setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context (initial value undefined so we can throw if not inside provider)
const AuthContextData = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // const [user, setUser] = useState<boolean>(false);
    const user=false

    return (
        <AuthContextData.Provider value={{ user }}>
            {children}
        </AuthContextData.Provider>
    );
};

// Hook to consume context
export const useAuth = () => {
    const context = useContext(AuthContextData);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context; // ✅ Here TS knows it's not undefined
};

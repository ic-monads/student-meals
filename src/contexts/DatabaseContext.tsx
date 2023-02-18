import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { firestore } from "../firebase"
import { query, collection, where } from "firebase/firestore";
import { collectionData } from "rxfire/firestore";

interface ITestData {
    id: string;
    userID: string;
    text: string;
}

interface IDatabaseContext {
    testData: ITestData[] | null;
}

const DatabaseContext = React.createContext({} as IDatabaseContext);

export function useDatabase() {
    return React.useContext(DatabaseContext);
}

export function DatabaseProvider({ children }: { children: any }) {
    const [testData, setTestData] = useState<ITestData[] | null>(null);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            const entriesRef = query(collection(firestore, "test"), where("userID", "==", currentUser.uid));

            const entriesObserver = collectionData(entriesRef, { idField: "id" }).subscribe(receivedTestData => {
                setTestData(receivedTestData as ITestData[]);
            });

            return function cleanup() {
                entriesObserver.unsubscribe();
            }
        }
    }, [currentUser]);

    const value: IDatabaseContext = {
        testData
    }

    return(
        <DatabaseContext.Provider value={value}>
            { children }
        </DatabaseContext.Provider>
    )
}
import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { firestore } from "../firebase"
import { query, collection, where, limit, getDocs } from "firebase/firestore";
import { collectionData } from "rxfire/firestore";
import {Recipe} from "../interfaces/recipes/Recipe";
import {Ingredient} from "../interfaces/recipes/Ingredient";
import {Quantity} from "../interfaces/recipes/Quantity";
import {Equipment} from "../interfaces/recipes/Equipment";
import {Instruction} from "../interfaces/recipes/Instruction";
//
// interface ITestData {
//     id: string;
//     userID: string;
//     text: string;
// }
//
// interface IDatabaseContext {
//     testData: ITestData[] | null;
// }
//
// const DatabaseContext = React.createContext({} as IDatabaseContext);
//
// export function useDatabase() {
//     return React.useContext(DatabaseContext);
// }
//
// export function DatabaseProvider({ children }: { children: any }) {
//     const [testData, setTestData] = useState<ITestData[] | null>(null);
//     const { currentUser } = useAuth();
//
//     useEffect(() => {
//         if (currentUser) {
//             const entriesRef = query(collection(firestore, "test"), where("userID", "==", currentUser.uid));
//
//             const entriesObserver = collectionData(entriesRef, { idField: "id" }).subscribe(receivedTestData => {
//                 setTestData(receivedTestData as ITestData[]);
//             });
//
//             return function cleanup() {
//                 entriesObserver.unsubscribe();
//             }
//         }
//     }, [currentUser]);
//
//     const value: IDatabaseContext = {
//         testData
//     }
//
//     return(
//         <DatabaseContext.Provider value={value}>
//             { children }
//         </DatabaseContext.Provider>
//     )
// }

// Non-test stuff
interface DatabaseContextProps {
    children :
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactPortal;
}

interface databaseContextTypes {
    recipes : Recipe[],
    getRecipes : () => Promise<void>
}

const databaseContextDefaults : databaseContextTypes = {
    recipes: [],
    getRecipes: async() => {},
}

export const DatabaseContext = React.createContext<databaseContextTypes>(databaseContextDefaults);

export default function DatabaseContextProvider({ children }: DatabaseContextProps) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    
    const getRecipes = async () => {
        try {
            const q = query(collection(firestore, "Recipe"), limit(9));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const recipe = doc.data();
                // TODO: Iterate over references and fetch actual data
                const ingredients : Map<Ingredient, Quantity> = new Map();
                const instructions : Instruction[] = [];
                setRecipes((prev) => [
                  ...prev,
                    {
                        id : doc.id,
                        name : recipe.Name,
                        time : recipe.Time,
                        difficulty : recipe.Difficulty,
                        cuisine : recipe.Cuisine,
                        ingredients : ingredients,
                        equipment : recipe.Equipment,
                        images : recipe.Images,
                        instructions : instructions,
                    }
                  ]
                );
            })
        } catch (error) {
            alert(error);
        }
    }
    
    return (
      <DatabaseContext.Provider value={{ recipes, getRecipes }}>
          {children}
      </DatabaseContext.Provider>
    )
}

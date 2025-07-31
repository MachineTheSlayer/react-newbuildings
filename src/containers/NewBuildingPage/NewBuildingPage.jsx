
import { useEffect, useState } from "react";
import { fakeFetchBuildings } from "../../api"
import styles from "./NewBuildingPage.module.css"

const NewBuildingPage = () => {
    const [newBuilding, setNewBuilding] = useState([]);

    useEffect(() => {
        async function preload() {
            const { result } = fakeFetchBuildings();

            setNewBuilding(result);
        }
       preload()
    }, [])

    /* const getResource = async (url) => {
        const res = await fakeFetchBuildings(url);
        console.log(res)

        if (res) {
            const newBuildingList = res.result.map(({}) => {
               
                return {
                   
                   
                }
            })
            console.log(newBuildingList)
            setNewBuilding(newBuildingList);
        }
    } */

   

    /* useEffect(() => {
        getResource();
    }, []); */

    return (
        <>
            <h2 className={styles.title}>Новостройки</h2>
            {newBuilding}
        </>
    )
}

export default NewBuildingPage;
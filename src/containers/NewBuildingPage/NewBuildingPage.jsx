import { useEffect, useState } from "react";
import { Card } from 'antd';
import { fakeFetchBuildings } from "../../api";
import { useBuildings } from '../../context/buildings-context';

import styles from "./NewBuildingPage.module.css";

const NewBuildingPage = () => {
    const [newBuilding, setNewBuilding] = useState([]);
//    const [building , setBuilding] = useState(null)
    const {buildings} = useBuildings()

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
            <Card title="Card title" variant="borderless" style={{ width: 300 }}>
                <ul className={styles.list__container}>
                    {buildings.map(({ id, name, icon, websiteUrl }) => 
                        <li className={styles.list__item} key={id}>
                            <img className={styles.person__photo} src={icon} alt={name} />
                            <p>{name}</p>
                            <a href={websiteUrl}>Официальный  сайт</a>
                        </li>
                    )}
                </ul>
            </Card>
        </>
    )
}

export default NewBuildingPage;
import { useState, useEffect } from "react";
import axios from "axios";

const CariMobil = () => {

    const [listMobil, setListMobil] = useState();
    //eslint-disable-next-line   
    const [carType, setTypeCar] = useState();
    //eslint-disable-next-line     
    const [dateRent, setDateRent] = useState();

    const getAllDataCar = async () => {
        const {data} = await axios("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");

        setListMobil(data);
    }

    const cari = () => {
        //eslint-disable-next-line 
        const filterMobil = listMobil.cari
    }

    useEffect(() => {
        getAllDataCar();
    }, [])
    return (
        <>
            <h1>Cari Mobil</h1>
            <select id="typeCar" onChange={(ev) => setTypeCar(ev.target.value)}>
                <option value="sedan">sedan</option>
            </select>
            <input type="date" id="tanggal" onChange={(ev) => setDateRent(ev.target.value)}/>
            <button onClick={cari}>cari mobil</button>
            <br />
            {listMobil?.map((mobil) => {
                return (
                    <div>
                        <h1>{mobil.model}</h1>
                        <p>{mobil.type}</p>
                        <img src="" alt="" aria-hidden="true" />
                    </div>
                )
            })}
        </>
        
    );
        
}
export default CariMobil;
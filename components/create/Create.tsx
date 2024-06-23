"use client"
import axios from "axios";
import styles from "./CreateForm.module.scss";
import { useEffect, useState } from "react";

interface Props {
    name: string;
    phone: string;
    date: string;
}



export default function Component() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = {
                name,
                phone,
                date
            };

            const response = await axios.post("http://localhost:3000/api/appointment", data);
            setName("");
            setPhone("");
            setDate("");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    
    return (
        <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.header}>
            <h2>Create</h2>
            <p>
                Напишите свое имя, номер телефона и удобный вам день, чтобы записаться
            </p>
            </div>
            <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="tel" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="date" placeholder="День" value={date} onChange={(e) => setDate(e.target.value)}/>
                <button type="submit">Записаться</button>
            </form>
            </div>
        </div>
        </section>
  );
}

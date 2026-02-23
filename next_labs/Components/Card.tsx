import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

type CardProps = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    href?: string;
};

const Card: React.FC<CardProps> = ({ id,  title, description, imageUrl, href }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className={styles.image}
                    unoptimized
                />
            </div>

            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{description}</p>
                <Link href={href ?? '/lab_23/photo/' + id} className={styles.button}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;

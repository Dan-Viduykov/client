import { FC } from "react";
import { IGame } from "../../types/game";
import styles from "./Tags.module.scss";

interface TagsProps {
    className?: string;
    tags: string[];
    count?: number;
}

const Tags: FC<TagsProps> = ({ tags = [], className, count }) => {
    const elements = tags.filter((tag, index) => count || tags.length > index)
                         .map((tag, index) => <li key={`tag${index}`} className={styles.tags__item}>{tag}</li>)

    return (
        <ul className={`${styles.tags} ${className}`}>
            { elements }
        </ul>
    )
}

export default Tags
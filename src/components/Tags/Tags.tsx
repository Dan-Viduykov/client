import { FC } from "react";
import { IGame } from "../../types/game";
import styles from "./Tags.module.scss";

interface TagsProps {
    className?: string;
    tags: string[];
    count?: number;
}

const Tags: FC<TagsProps> = ({ tags = [], className, count = tags.length }) => {
    return (
        <ul className={`${styles.tags} ${className}`}>
            {
                tags.filter((tag, index) => count > index)
                    .map((tag, index) => <li key={`tag${index}`} className={styles.tags__item}>{tag}</li>)
            }
        </ul>
    )
}

export default Tags
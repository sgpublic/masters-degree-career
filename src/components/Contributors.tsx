import React from "react";

interface ContributorsProps {
    repo?: string
}

export const Contributors: React.FC<ContributorsProps> = (props: ContributorsProps) => {
    const repo = props.repo ?? "sgpublic/pgee"
    return (
        <a href={`https://github.com/${repo}/graphs/contributors`}>
            <img src={`https://contrib.rocks/image?repo=${repo}`} alt={"贡献者"}/>
        </a>
    )
}
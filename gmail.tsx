import { Icon } from '@iconify/react';


export const Gmail = ({username="batchfy"}:{username?: string}) => {
    const letters = username.split('');
    return (
        <>
            {letters.map((letter, index) => (
                <Icon key={index} className="inline-block m-0" width={16} height={18} icon={`tabler:letter-${letter}`} />
            ))}
            @<Icon className="inline-block" icon="flat-color-icons:google" />mail.com
        </>
    );
}
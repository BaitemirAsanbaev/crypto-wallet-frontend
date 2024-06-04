import React, { useEffect, useState } from 'react';
import classes from './Logo.module.scss';
interface LogoProps{
    full:boolean
}
export const Logo: React.FC<LogoProps> = ({full = false}) => {
    const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth > 767);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 767);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={classes.Logo}>
            {isWideScreen||full ? (
                <>
                    CRYPTO<br />
                    WALLET
                </>
            ) : (
                <>C</>
            )}
        </div>
    );
};

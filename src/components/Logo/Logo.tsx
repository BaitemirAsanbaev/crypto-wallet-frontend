import React, { useEffect, useState } from 'react';
import classes from './Logo.module.scss';

export const Logo: React.FC = () => {
    const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth > 767);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 767);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className={classes.Logo}>
            {isWideScreen ? (
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

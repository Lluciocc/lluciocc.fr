import { useState } from "react";

const ShapeBound = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <img
                src="/sb.gif"
                alt="ShapeBound"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
            />      
        </div>
    );
};

export default ShapeBound;

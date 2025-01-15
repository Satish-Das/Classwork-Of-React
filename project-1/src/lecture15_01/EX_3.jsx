// 3. Create a react pure functional component that will toggle the visibility of text written by user take one text button , button will toggle the -> when text is visible button text should be "hide text " -> when text is hidden button text should be "show text"
import { useState } from 'react';

const EX_3 = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleText = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleText} className='border bg-blue-600 px-6 py-2'>
                {isVisible ? 'Hide Text' : 'Show Text'}
            </button>
            {isVisible && <h2 className="text">This is Text.</h2>}
        </div>
    );
};


export default EX_3
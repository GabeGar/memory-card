import React from "react";
import Images from "./utils/images";

const App = () => {
    const content = Images.map((image) => {
        return <img key={image.id} src={image.src} alt={image.alt} />;
    });

    return <>{content}</>;
};

export default App;

import { useState, useEffect, useRef } from "react";
import defaultPerson from "../assets/img/person-default.jpg";
import { getExpressions } from "../utils/face-rekognition";

const ImagePiquer = ({ setLoading, setExpressions }) => {
    const [uploadImage, setUploadImage] = useState(null);
    const imageToDetectRef = useRef();

    const handleInputFileChange = e => {
        setUploadImage(e.target.files[0]);
        setLoading(true);
    };

    useEffect(() => {
        getExpressions(imageToDetectRef.current).then(res => {
            setExpressions(res?.expressions);
            setLoading(false);
        })
    }, [uploadImage, setExpressions, setLoading]);
    return (
        <div className="container h-75">
            <div className="row">
                <div className="col-8">

                    <img
                        ref={imageToDetectRef}
                        src={uploadImage ? URL.createObjectURL(uploadImage) : defaultPerson}
                        alt="image de la personne a detecter"
                        className="my-2 rounded"
                        style={{ width: "250px" }}
                    />
                    <div className="row"><label htmlFor="personImage">Ajouter votre propre photo:</label></div>

                    <input
                        type="file"
                        name="personImage"
                        id="personImage"
                        className="form-control w-25 my-2"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleInputFileChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default ImagePiquer;
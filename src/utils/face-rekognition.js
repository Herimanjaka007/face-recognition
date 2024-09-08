import { detectSingleFace, loadFaceExpressionModel, loadSsdMobilenetv1Model } from "face-api.js"

export const loadModel = async () => {
    await loadSsdMobilenetv1Model("/models");
    await loadFaceExpressionModel("/models");
};


/**
 * 
 * @param {HTMLImageElement} input 
 * @returns {WithFaceExpressions<WithFaceDetection<{}>> | undefined}
 */
export const getExpressions = async (input) => {
    return loadModel().then(
        () => detectSingleFace(input)
            .withFaceExpressions());
}
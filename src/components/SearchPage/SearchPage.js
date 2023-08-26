import React from "react";
import classes from './SearchPage.module.css';
import LogoBar from "../UI/LogoBar/LogoBar";
import search from '../../assets/search.png';
import student from '../../assets/student.png';
import Card from "../UI/Card/Card";
import DemoBox from "../UI/DemoCard/DemoBox";
import DemoCard from "../UI/DemoCard/DemoCard";

const SearchPage = () => {
    const onSubmitHandler = (e) => {
        e.preventdefault();

    }


    return (
        <div>
            <LogoBar />
            <div className={classes.searchbar}>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Please enter your search key word" required />
                    <button type="submit"><img src={search} alt="" /></button>
                </form>
            </div>
            {/* <div className={classes.student}>
                <img src={student} alt="" />
            </div> */}

            <div className={classes.demo}>
                <DemoBox>
                    <div>
                        {/* <DemoCard> */}
                        <p className={classes.annotation}>#사용자가 최근에 읽은 논문들은 컴퓨터 비전에 관련된 논문, 좋아요를 누른 논문들은 Anomaly Detectioin 관련 논문, 자율주행 관련 논문, Detection 관련논문</p>
                        {/* </DemoCard> */}

                        <DemoCard>
                            <h3>Title</h3>
                            <p>Deep Anomaly Detection for Enhanced Safety in Autonomous Vehicles</p>
                        </DemoCard>

                        <DemoCard>
                            <h3>Abstract</h3>
                            <p>With the rise of autonomous vehicles, ensuring their safe operation in diverse and dynamic environments is paramount. This paper introduces a novel deep learning-based system to detect and respond to anomalies in real-time, such as unexpected pedestrian movements, road obstructions, and erratic behavior of other vehicles. We evaluate our approach using a newly curated dataset and demonstrate significant improvements over existing methods in terms of detection accuracy and response time.</p>
                        </DemoCard>
                        <p className={classes.annotation}>#You can choose exsiting model or dataset to make a new one<br />
                            #You can change real-time to performance, mAP & mAR upgrade</p>

                        <DemoCard>
                            <p className={classes.long}>
                                <b>1. Introduction:</b><br /><br />
                                1.1 Background:<br />
                                Autonomous vehicles (AVs) are transforming urban mobility, promising safer and more efficient transportation systems. However, the dynamic nature of urban environments poses challenges, with anomalies being a significant concern.<br />
                                <br />
                                1.2 Motivation:<br />
                                While many systems focus on standard traffic scenarios, the ability to detect and respond to anomalies is crucial for the widespread acceptance and safety of AVs.<br />
                                <br />
                                1.3 Contribution:<br />
                                This paper presents a comprehensive system that:<br /><br />

                                Introduces a novel deep learning architecture tailored for anomaly detection in AVs.<br />
                                Curates a new dataset capturing diverse anomalies in urban settings.<br />
                                Demonstrates improved performance over state-of-the-art methods.<br /><br />
                                <b>2. Method:</b><br /><br />
                                2.1 Data Collection:<br />
                                Discuss how the new dataset was collected, the types of anomalies included, and the annotation process.<br /><br />

                                2.2 Deep Learning Architecture:<br /><br />

                                2.2.1 Input Layer: Describe the input data (e.g., camera images, LiDAR point clouds).<br />
                                2.2.2 Feature Extraction: Details on layers/techniques used to extract features from the input.<br />
                                2.2.3 Anomaly Detection: Techniques employed to classify data as normal or anomalous. Discuss any attention mechanisms or other specialized layers.<br />
                                2.2.4 Response Mechanism: Once an anomaly is detected, how the system suggests the vehicle should respond.<br />
                                2.3 Training Procedure:<br />
                                Discuss training data split, augmentation techniques, loss functions, optimization strategies, and any regularization techniques.<br /><br />

                                <b>3. Metrics:</b><br /><br />
                                3.1 Detection Accuracy:<br />
                                Evaluate the true positive rate (sensitivity) and false positive rate for anomaly detection.<br /><br />

                                3.2 Response Time:<br />
                                Measure the time taken from anomaly detection to suggested response. This is crucial for real-time safety.<br /><br />

                                3.3 Comparison with State-of-the-Art:<br />
                                Benchmark the proposed system against existing methods, highlighting areas of improvement.<br /><br />

                                3.4 Qualitative Analysis:<br />
                                Showcase specific examples where the proposed system successfully detected anomalies, especially in challenging scenarios.<br /><br />

                                <b>4. Summary and Conclusion:</b><br /><br />
                                4.1 Key Findings:<br />
                                Recap the main contributions and findings of the paper.<br /><br />

                                4.2 Future Directions:<br />
                                Suggest potential avenues for future research, such as integrating with other vehicle systems, refining the response mechanisms, or expanding the types of anomalies detected.<br /><br />

                                4.3 Final Thoughts:<br />
                                Emphasize the importance of robust anomaly detection for the safety and acceptance of autonomous vehicles in urban environments.<br /><br />

                                <b>Acknowledgments:</b><br />
                                Thank any collaborators, funding sources, or institutions that supported the research.<br /><br />

                                <b>References:</b><br />
                                List all the references cited in the paper, including previous works on anomaly detection, autonomous vehicle research, and any foundational deep learning papers.<br />
                            </p>
                        </DemoCard>

                    </div>
                </DemoBox>
            </div>
        </div>
    )
}

export default SearchPage;
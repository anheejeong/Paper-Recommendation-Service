import React from "react";
import classes from './Payment.module.css';
import LogoBar from "../UI/LogoBar/LogoBar";
import PaymentCard from "../UI/PaymentCard/PaymentCard";

const Payment = () => {
    return (
        <div>
            <LogoBar />
            <div className={classes.title}>
                <h2>Payment</h2>
            </div>
            <div className={classes.description}>
                <p>Enjoy it unlimitedly.</p>
                <p>I recommend a paper that suits your taste.</p>
                <p>Membership can be changed or revoked at any time.</p>
            </div>
            <div className={classes.space}>
                <PaymentCard>
                    <div className={classes.cardspace}>
                        <div>
                            <h2>Silver</h2>
                            <p>Tree Depth 2 ✔</p>
                            <p>Reflect on papers by 2020 ✔</p>
                            <p>Save storage 10/10 ✔</p>
                        </div>
                        <div className={classes.btn}>
                            <button><span>Free</span></button>
                        </div>
                    </div>
                </PaymentCard>
                <PaymentCard>
                    <div className={classes.cardspace}>
                        <div>
                            <h2>Gold</h2>
                            <p>Tree Depth 5 ✔</p>
                            <p>Reflect on papers by 2021 ✔</p>
                            <p>Save storage 30/30 ✔</p>
                            <p>Translation of a paper<br />(three-nation restriction) ✔</p>
                            <p>Provide an important summary of the thesis ✔</p>
                        </div>
                        <div className={classes.btn}>
                            <button><span>9900₩</span></button>
                        </div>
                    </div>
                </PaymentCard>
                <PaymentCard>
                    <div className={classes.cardspace}>
                        <div>
                            <h2>VIP</h2>
                            <p>Tree Depth 10 ✔</p>
                            <p>Reflect on papers by 2022 ✔</p>
                            <p>Save storage 100/100 ✔</p>
                            <p>Translation of a paper ✔</p>
                            <p>Create a paper demo version ✔</p>
                            <p>Provide an important summary of the thesis ✔</p>
                        </div>
                        <div className={classes.btn}>
                            <button><span>13500₩</span></button>
                        </div>
                    </div>
                </PaymentCard>
            </div>
        </div>
    )
}

export default Payment;
import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from 'components/footer/Footer';
import "./Error.scss"

const Animation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const NotFound = () => {   
    return (
        <div>
            <motion.div
                initial="hidden"
                whileInView="visible"
            >
                <div className="flex-height">
                    <motion.div variants={Animation} className="error-wrapper">
                        <h1>404!</h1>
                        <font>Страница, которую вы ищете, не найдена.</font>
                        <div className="button-wrapper">
                            <Link to="/">
                                <div className="return-button">Вернуться</div>   
                            </Link>
                        </div>                                     
                    </motion.div>
                </div>
                <Footer />
            </motion.div>
        </div>
    );
};

export default NotFound;

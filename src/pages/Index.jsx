import React, { useState, useEffect } from 'react'
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Preloader from 'components/preloader/Preloader';
import "./Index.scss"

const Index = () => {	
    // Preloader
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)   
        }, 2000)
    }, []);

    // Вывод результата работы фильтра
    const [selectionResult, setSelectionResult] = useState("Пока пусто...");  
    
    // ------------------------------------------
    let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, Infinity] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [0, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, Infinity] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [0, Infinity] },
    ];

    let requiredRange1 = [0, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, Infinity];
    // ------------------------------------------

    return (	
        <div className="index">
            {loading 
                ? (<Preloader/>) 
                : (
                    <div className="wrap">
                    <Header/>         
                    <div className="index__common-wrapper">     
                        <div className="index__row-wrapper">
                            <div>
                                <li className="index__header">Курсы:</li>
                                {
                                    courses.map((courses) => {
                                        return (
                                            <li key={courses.name}>{courses.name}</li>
                                        )
                                    })
                                }               
                            </div>       
                            <div>
                                <li className="index__header">Цена за курсы:</li>
                                {
                                    courses.map((courses) => {
                                        return (
                                            <li key={courses.name}>от {courses.prices[0]} до {courses.prices[1]}</li>
                                        )
                                    })
                                }               
                            </div>     
                        </div>
                    </div>  
                    <div className="index__apply-wrapper">
                        <li className="index__header">Варианты цен (фильтры), которые ищет пользователь.</li>
                        {/* от 0 до 200 */}
                        <li className="index-filter__selection">от {requiredRange1[0]} до {requiredRange1[1]}
                            <span 
                                onClick={() => {
                                    setSelectionResult(courses
                                        .filter(courses => courses.prices[0] <= requiredRange1[0] && courses.prices[1] <= requiredRange1[1])
                                        .map(courses => (courses.name + " "))
                                    )}
                                } 
                                className="index__apply-button">Применить
                            </span>
                        </li>	
                        {/* от 100 до 350 */}
                        <li className="index-filter__selection">от {requiredRange2[0]} до {requiredRange2[1]}
                            <span 
                                onClick={() => {
                                    setSelectionResult(courses
                                        .filter(courses => courses.prices[0] >= requiredRange2[0] && courses.prices[1] <= requiredRange2[1])
                                        .map(courses => (courses.name + " "))
                                    )}                                
                                } 
                                className="index__apply-button">Применить
                            </span>
                        </li>
                        {/* от 200 до Infinity */}
                        <li className="index-filter__selection">от {requiredRange3[0]} до {requiredRange3[1]}
                            <span 
                                onClick={() => {
                                    setSelectionResult(courses
                                        .filter(courses => courses.prices[0] >= requiredRange3[0] && courses.prices[1] <= requiredRange3[1])
                                        .map(courses => (courses.name + " "))                                     
                                    )}
                                } 
                                className="index__apply-button">Применить
                            </span>
                        </li>	                       
                    </div>
                    <div className="index__apply-wrapper">
                        <li className="index__header">Подходящие курсы:</li>
                        <li>{selectionResult}</li>
                    </div>               
                    <Footer/>
                </div>
                )
            }
		</div>  
    );
};

export default Index;